import React from 'react';
import "./Feedback.css";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../../public/api';
import Footer from '../Footer/Footer';

const Feedback = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${api}/api/v1/newFeedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success("Thanks for Feedback");
        console.log(result);
        reset();
      } else {
        const errorText = await response.text();
        toast.error(`Something went wrong: ${errorText}`);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error('Error:', error);
    }
  }

  return (
    <>
      <div className='feedback'>
        <div className="feedback-title">
          <h2>DAV PUBLIC SCHOOL</h2>
          <small>Send Us FeedBack</small>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <input placeholder='Name' type="text" {...register("name")} required />
            <input placeholder='Email' type="email" {...register("email")} required />
          </div>
          <input placeholder='Phone Number' id='feedback-tel' type="tel" {...register("number")} required />
          <textarea placeholder='Feedback here' {...register("feedback")} required />
          <button type='submit' disabled={isSubmitting} className='submit-btn'>Send Feedback</button>
        </form>
        <ToastContainer />
      </div>
      <Footer />
    </>
  )
}

export default Feedback;

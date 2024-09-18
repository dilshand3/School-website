import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import "./Addmision.css";
import { api } from '../../../public/api';
import { Image } from "../../../public/Image.js";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admission = () => {
    const [image, setImage] = useState(false); // Initialize with null
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    const onSubmit = async (data) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("firstname", data.firstname);
        formData.append("lastname", data.lastname);
        formData.append("fathername", data.fathername);
        formData.append("mothername", data.mothername);
        formData.append("number", data.number);
        formData.append("fathernumber", data.fathernumber);
        formData.append("email", data.email);
        formData.append("adharCard", data.adharCard);
        formData.append("LastClass", data.LastClass);
        formData.append("LastClassMarks", data.LastClassMarks);
        formData.append("cast", data.cast);
        formData.append("location", data.location);
        formData.append("city", data.city);
        formData.append("district", data.district);
        formData.append("dob", data.dob);
        formData.append("admisionClass", data.admisionClass);
        if (image) {
            formData.append("studentPhoto", image);
        }

        let response = await fetch(`${api}/api/v1/admission`, {
            method: 'POST',
            body: formData,
        });
        let result = await response.text();
        try {
            if (response.ok) {
                toast.success("Application submitted successfully");
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
        console.log(data, result);
        reset();
        setImage(null);
        setIsLoading(false);
    }

    return (
        <>
            <section className='admission' id='admission'>
                <div className="admission-right">
                    <h2>DAV PUBLIC SCHOOL</h2>
                    <h5>Admission Application</h5>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="add-img-upload flex-col">
                            <label htmlFor="studentPhoto">
                                <img src={image ? URL.createObjectURL(image) : Image.upload} alt="student-photo" className='student-photo' />
                            </label>
                            <input onChange={(e) => setImage(e.target.files[0])} type="file" id='studentPhoto' hidden required />
                            <h6>Upload image</h6>
                        </div>
                        <div className="label-info">
                            <h3>Name:</h3>
                            <div className="student-name">
                                <input type="text" {...register("firstname")} placeholder='FirstName' required />
                                <input type="text" {...register("lastname")} placeholder='LastName' required />
                            </div>
                            <div className="parents-name">
                                <input type="text" {...register("fathername")} placeholder='FatherName' required />
                                <input type="text" {...register("mothername")} placeholder='MotherName' required />
                            </div>
                        </div>
                        <div className="label-info">
                            <h3>Contact:</h3>
                            <div className="student-contact">
                                <input type="tel" {...register("number")} placeholder='Phone Number' required />
                                <input type="tel" {...register("fathernumber")} placeholder='Phone Number' required />
                            </div>
                            <input type="email" {...register("email")} placeholder='Email' required className='email' />
                        </div>
                        <div className="label-info">
                            <h3>Personal info:</h3>
                            <div className="student-contact">
                                <input type="date" {...register("dob")} required />
                                <select {...register("cast")}>
                                    <option value="">Choose Cast</option>
                                    <option value="OBC">OBC</option>
                                    <option value="GENERAL">GENERAL</option>
                                    <option value="SC/ST">SC/ST</option>
                                    <option value="OTHER">OTHER</option>
                                </select>
                            </div>
                            <input type="text" {...register("adharCard")} placeholder='AdharCard NO.' required className='email' />
                        </div>
                        <div className="label-info">
                            <h3>Academic:</h3>
                            <div className="student-contact">
                                <input type="text" {...register("admisionClass")} placeholder='AdmissionClass' required />
                                <input type="text" {...register("LastClass")} placeholder='LastClass' required />
                            </div>
                            <input type="text" {...register("LastClassMarks")} placeholder='LastClass Marks' required className='email' />
                        </div>
                        <div className="label-info">
                            <h3>Location:</h3>
                            <input type="text" {...register("location")} placeholder='Location' required className='location email' />
                            <div className="student-contact">
                                <input type="text" {...register("city")} placeholder='City' required />
                                <input type="text" {...register("district")} placeholder='District' required />
                            </div>
                        </div>
                        <button type='submit' disabled={isSubmitting} className='submit-btn'>
                            {isLoading ? (
                                <>
                                    Submitting...
                                    <div className="spinner"></div>
                                </>
                            ) : 'Submit Application'}
                        </button>
                    </form>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}

export default Admission;

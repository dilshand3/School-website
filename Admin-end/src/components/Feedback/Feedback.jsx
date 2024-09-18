import React, { useState, useEffect } from 'react';
import "./Feedback.css";
import Footer from '../Footer/Footer.jsx';
import { api } from '../../../public/api.js';
import { image } from '../../../public/Image.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Feedback = () => {
    const [fields, setFields] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`${api}/api/v1/allfeedback`);
            if (response.ok) {
                const apiResponse = await response.json();
                console.log(apiResponse)
                setFields(apiResponse);
            } else {
                toast.error('No data Founnd');
            }
        } catch (error) {
            toast.error('No data found');
            console.error('Fetch error:', error);
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${api}/api/v1/deletefeedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }), // Send the ID in the request body
            });
            if (response.ok) {
                toast.success('Feedback deleted successfully');
                fetchData(); // Refresh the feedback list
            } else {
                toast.error('Failed to delete feedback');
            }
        } catch (error) {
            toast.error('Error deleting feedback');
            console.error('Delete error:', error);
        }
    };
    

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <header className='feedback-header'>DAV FEEDBACK</header>
            <div className="all-feedback">
                {fields.length === 0 ? (
                    <div className="no-data">
                        <img src={image.noData} alt="No Data Available" className="no-data-img" />
                    </div>
                ) : (
                    fields.map((field) => (
                        <div key={field._id} className="container">
                        <h3 className="feedback-title">Feedback</h3>
                        <div className="feedback-data">
                            <div className="feedback-details">
                                <p className="student-name">Name: <span>{field.name}</span></p>
                                <p className="father-name">Number: <span>{field.number}</span></p>
                                <p className="mother-name">Email: <span>{field.email}</span></p>
                            </div>
                            <div className="main-feedback">
                                <textarea readOnly className="feedback-textarea" value={field.feedback}></textarea>
                                 <button className="delete-button" onClick={() => handleDelete(field._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                    ))
                )}
            </div>
            <ToastContainer />
            <Footer />
        </>
    )
}

export default Feedback
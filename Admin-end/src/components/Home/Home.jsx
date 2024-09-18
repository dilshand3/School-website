import React, { useState, useEffect } from 'react';
import { api } from '../../../public/api';
import './Home.css';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { image } from '../../../public/Image';

const Home = () => {
    const [fields, setFields] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`${api}/api/v1/addmision/alladmission`);
            if (response.ok) {
                const apiResponse = await response.json();
                setFields(apiResponse);
            } else {
                toast.error('No data Founnd');
            }
        } catch (error) {
            toast.error('No data found');
            console.error('Fetch error:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this record?')) {
            try {
                const response = await fetch(`${api}/api/v1/admission/delete`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id }),
                });

                if (response.ok) {
                    fetchData();
                    toast.success('Record deleted successfully');
                } else {
                    toast.error('Failed to delete record');
                }
            } catch (error) {
                toast.error('Something went wrong');
                console.error('Delete error:', error);
            }
        }
    };

    return (
        <>
            <div className="all-admission">
                {fields.length === 0 ? (
                    <div className="no-data">
                        <img src={image.noData} alt="No Data Available" className="no-data-img" />
                    </div>
                ) : (
                    fields.map((field) => (
                        <div key={field._id} className="container1">
                            <div className="student-card">
                                <img src={field.studentPhoto} alt="studentPhoto" className='student-Img' />
                                <div className="profile-data">
                                    <p>Student Name: {field.firstname} {field.lastname}</p>
                                    <p>Father Name: {field.fathername}</p>
                                    <p>Mother Name: {field.mothername}</p>
                                    <p>Contact No.: {field.number}</p>
                                </div>
                                <div className="student-btn">
                                    <button id='student-btn-1'>
                                        <Link className='secondry' to={`/student/${field._id}`}>View Details</Link>
                                    </button>
                                    <button
                                        id='student-btn-2'
                                        onClick={() => handleDelete(field._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <ToastContainer />
        </>
    );
};

export default Home;

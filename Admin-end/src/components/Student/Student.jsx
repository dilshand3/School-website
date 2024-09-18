import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { api } from '../../../public/api';
import './Student.css';

const Student = () => {
    const { id } = useParams();
    const navigate = useNavigate();  // Create navigate function
    const [student, setStudent] = useState(null);

    const fetchStudentData = async () => {
        try {
            const response = await fetch(`${api}/api/v1/admission/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const apiResponse = await response.json();
            setStudent(apiResponse);
            console.log(apiResponse);
        } catch (error) {
            console.log(`Something went wrong: ${error}`);
        }
    }

    useEffect(() => {
        fetchStudentData();
    }, [id]);

    if (!student) return <p>Loading...</p>;

    return (
        <div className="student-detail">
            <p onClick={() => navigate(-1)} style={{ cursor: 'pointer',display : "flex",alignItems :"center" }}>
                <i className='bx bx-chevron-left'></i>Back
            </p>
            <div className="profile-header">
                <img src={student.studentPhoto} alt="Student Photo" className="profile-img" />
                <div className="profile-info">
                    <h1 className="student-name">{student.firstname} {student.lastname}</h1>
                    <p className="student-class">Class: {student.admisionClass}</p>
                </div>
            </div>
            <div className="personal-info">
                <h2>Personal Information</h2>
                <p><strong>Father's Name:</strong> {student.fathername}</p>
                <p><strong>Mother's Name:</strong> {student.mothername}</p>
                <p><strong>Location:</strong> {student.location} {student.city}</p>
                <p><strong>District:</strong> {student.district}</p>
                <p><strong>Category:</strong> {student.cast}</p>
                <p><strong>Contact Number:</strong> {student.number}</p>
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>Father's Contact Number:</strong> {student.fathernumber}</p>
                <p><strong>Aadhar Card:</strong> {student.adharCard}</p>
                <p><strong>Date of Birth:</strong> {student.dob}</p>

            </div>
            <div className="academic-info">
                <h2>Academic Information</h2>
                <p><strong>Last Class:</strong> {student.LastClass}</p>
                <p><strong>Marks in Last Class:</strong> {student.LastClassMarks}</p>
            </div>
        </div>
    );
};

export default Student;

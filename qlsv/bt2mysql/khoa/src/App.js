import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({
        name: '',
        age: '',
        address: '',
        email: '',
    });

    // Lấy danh sách sinh viên từ API
    useEffect(() => {
        axios
            .get('http://localhost:5000/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Error fetching students:', error);
            });
    }, []);

    // Thêm sinh viên
    const addStudent = () => {
        axios
            .post('http://localhost:5000/students', newStudent)
            .then(response => {
                setStudents([...students, { ...newStudent, id: response.data.id }]); // Assuming response contains new student ID
                setNewStudent({ name: '', age: '', address: '', email: '' });
            })
            .catch(error => {
                console.error('Error adding student:', error);
            });
    };

    // Xóa sinh viên
    const deleteStudent = id => {
        axios
            .delete(`http://localhost:5000/students/${id}`)
            .then(() => {
                setStudents(students.filter(student => student.id !== id));
            })
            .catch(error => {
                console.error('Error deleting student:', error);
            });
    };

    return (
        <div>
            <h2>Quản Lý Sinh Viên</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name} - {student.age} - {student.address} - {student.email}
                        <button onClick={() => deleteStudent(student.id)}>Xóa</button>
                    </li>
                ))}
            </ul>
            <h3>Thêm Sinh Viên</h3>
            <input
                placeholder="Tên"
                value={newStudent.name}
                onChange={e => setNewStudent({ ...newStudent, name: e.target.value })}
            />
            <input
                placeholder="Tuổi"
                value={newStudent.age}
                onChange={e => setNewStudent({ ...newStudent, age: e.target.value })}
            />
            <input
                placeholder="Địa chỉ"
                value={newStudent.address}
                onChange={e => setNewStudent({ ...newStudent, address: e.target.value })}
            />
            <input
                placeholder="Email"
                value={newStudent.email}
                onChange={e => setNewStudent({ ...newStudent, email: e.target.value })}
            />
            <button onClick={addStudent}>Thêm</button>
        </div>
    );
}

export default App;
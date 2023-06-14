import './App.css';
import React from 'react';
import TableCourses from './Components/TableCourses';
import Header from './Components/Header';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
function App() {
return (
<div className="App-container">

    <Header />
    <Container>
        <TableCourses />
    </Container>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick
        rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    
    <ToastContainer />
</div>
);
}

export default App;

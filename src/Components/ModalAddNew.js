import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
function ModalAddNew(props){
    
    const {handleClose ,show, handleUpdate} = props;
    const formik = useFormik({
        initialValues: {
          image: "",
          title: "",
          description: "",
        },
        validationSchema: Yup.object({
          image: Yup.string()
            .required("Required image"),
          title: Yup.string()
            .required("Required title"),
          description: Yup.string()
            .required("Required description"),
        }),
        onSubmit: (values) => {
          console.log(values);
          handleUpdate({image: values.image, title: values.title, description: values.description})
          handleClose(false);
          toast.success("add new course success")
        },
      });
      const { handleSubmit, handleChange, values, errors } = formik
    return (
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Course</Modal.Title>
        </Modal.Header>
        <form action="" onSubmit={handleSubmit}>
        <Modal.Body>
        
            <div className="form-group">
                <label htmlFor="exampleInputImage">Title</label>
                <input 
                    name="image"
                    type="text" 
                    className="form-control" 
                    id="exampleInputImage" 
                    placeholder="http://example.jpg"
                    onChange={handleChange}
                    value={values.image}
                />
                {
            <p style={{ color: 'red' }}>{errors.image}</p>
          }
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputTitle">Title</label>
                <input 
                    name="title"
                    type="text" 
                    className="form-control" 
                    id="exampleInputTitle" 
                    placeholder="Title"
                    onChange={handleChange}
                    value={values.title}
                />
                {
                    <p style={{ color: 'red' }}>{errors.title}</p>
                }
                
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputDes">Description</label>
                <input 
                    name="description"
                    type="text" 
                    className="form-control" 
                    id="exampleInputDes" 
                    placeholder="Description"
                    onChange={handleChange}
                    value={values.description}
                />
                {
                    <p style={{ color: 'red' }}>{errors.description}</p>
                }
            </div>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" >
            Add New
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    )
}

export default ModalAddNew;
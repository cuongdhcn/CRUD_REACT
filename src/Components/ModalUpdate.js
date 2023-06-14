import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react'
function ModalUpdate(props){
    
    const {handleClose ,show, dataCouseUpdate, handeupdateCourseFromModal} = props;
    const [data, setData] = useState({
        image:'',
        title: '',
        description: ''
    })
    useEffect(() => {
        if(show){
            setData({image: dataCouseUpdate.image,title: dataCouseUpdate.title,description: dataCouseUpdate.description});
        }
    },[dataCouseUpdate]);
    const handSaveUpdate = (data) =>{
        handeupdateCourseFromModal({
            image: data.image,
            title: data.title,
            description: data.description,
            id: dataCouseUpdate.id
        })
        handleClose(false);
        toast.success("Updata success")
    }
    return (
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
            <div className="form-group">
                <label htmlFor="exampleInputImage">Image</label>
                <input 
                    name="image"
                    type="text" 
                    className="form-control" 
                    id="exampleInputImage" 
                    placeholder="http://example.jpg"
                    onChange={(e) => setData({...data, image: e.target.value})}
                    value={data.image}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputTitle">Title</label>
                <input 
                    name="title"
                    type="text" 
                    className="form-control" 
                    id="exampleInputTitle" 
                    placeholder="Title"
                    onChange={(e) => setData({...data, title: e.target.value})}
                    value={data.title}
                />
                
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputDes">Description</label>
                <input 
                    name="description"
                    type="text" 
                    className="form-control" 
                    id="exampleInputDes" 
                    placeholder="Description"
                    onChange={(e) => setData({...data, description: e.target.value})}
                    value={data.description}
                />
            </div>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handSaveUpdate(data)} >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalUpdate;
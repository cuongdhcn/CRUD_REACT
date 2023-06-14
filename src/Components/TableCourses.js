import { useState } from 'react';
import './Courses.scss';
import Courses from './data.json'
import ModalAddNew from './ModalAddNew';
import ModalUpdate from './ModalUpdate';
function TableCourses(){
    const [data, setData] = useState(Courses);
    const [search, setSearch] = useState('')
    const [showModalAddNew, setShowModalAddNew] = useState(false)
    const [showModalUpdate, setShowModalUpdate] = useState(false)
    const handleClose = () =>{
        setShowModalAddNew(false);
        setShowModalUpdate(false);
    }
    //delete Course
    const handleDelete = (id) =>{
        const newlist = data.filter(course => course.id !== id);
        setData(newlist);
    }
    const handleSaveAddNew = (course) =>{
        setData([course,...data])
    }
    //update
    const [dataCouseUpdate, setDataCouseUpdate] = useState({})
    const handeUpdateCourse = (course) =>{
        setShowModalUpdate(true)
        setDataCouseUpdate(course)
    }
    const handeupdateCourseFromModal = (course) =>{
        let index = data.findIndex(item => item.id === course.id)
        data[index] = course;
        setData([...data]);
    }
    const handlePageClick =() =>{}
return (
<div className='courses'>
    <div className="Nav-bar">
        <h3>List Course</h3>
        <button className="btn btn-success" onClick={() => setShowModalAddNew(true)}>Add New</button>
    </div>
    <input type="text" onChange={(e) => setSearch(e.target.value)} className="form-control search-course" placeholder="Search Course by Title"></input>
    <div className="row">
        {
            data.filter((course) =>{
                return search.toLowerCase() === '' ? course : course.title.toLowerCase().includes(search)
            }).map(course =>(
                <div key={course.id} className="col-sm-6 col-md-4 col-lg-3">
                <div className="card item-card" >
                    <img className="card-img-top" src={course.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title title">{course.title}</h5>
                        <p className="card-text card-description">{course.description}</p>
                        <div className='button-action'>
                            <a href="#" className="btn btn-warning" onClick={() => handeUpdateCourse(course)}>Edit</a>
                            <a href="#" className="btn btn-danger" onClick={() => handleDelete(course.id)} >Delete</a>
                        </div>
                    </div>
                </div>
        </div>
            ))
        }
        
    </div>
    {/* <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={3}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      /> */}
<ModalAddNew
    show = {showModalAddNew}
    handleClose = {handleClose}
    handleUpdate = {handleSaveAddNew}
/>
<ModalUpdate
    show ={showModalUpdate}
    handleClose = {handleClose}
    dataCouseUpdate = {dataCouseUpdate}
    handeupdateCourseFromModal = {handeupdateCourseFromModal}
/>

</div>
)
}

export default TableCourses

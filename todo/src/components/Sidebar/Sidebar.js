import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsListCheck} from "react-icons/bs";
import { BsFillStarFill} from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcPlanner } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { Link } from 'react-router-dom';

export default function Sidebar({ handleCategoryClick }) {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <BsListCheck className='bars fs-3 text-white mt-4' role='button' onClick={handleShow}/>


      <Offcanvas className='p-4' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
         <h3>List</h3>
        </Offcanvas.Header>

        <Offcanvas.Body>
        <div className='border-bottom px-5 pb-3'>
          <Link className='text-decoration-none text-dark' to="/" onClick={() => handleCategoryClick('today')}><h5><FcPlanner className='fs-4 me-3'/> Today</h5></Link>
          <Link className='text-decoration-none text-dark' to="/Week" onClick={() => handleCategoryClick('week')}><h5><FcCalendar className='fs-4 me-3'/> This Week</h5></Link>
          <Link className='text-decoration-none text-dark' to="/Imp" onClick={() => handleCategoryClick('important')}><h5><BsFillStarFill className='text-warning fs-4 me-3' /> Important</h5></Link>
          </div>

          <div className='px-5 py-3'>
          <Link className='text-decoration-none text-dark' to='/personal' onClick={() => handleCategoryClick('personal')}><p><FcHome className='fs-4 me-3'/> Personal</p></Link>
          <Link className='text-decoration-none text-dark' to='/work' onClick={() => handleCategoryClick('work')}><p><FcBriefcase className='fs-4 me-3'/> Work</p></Link>
          <Link className='text-decoration-none text-dark' to='/learn' onClick={() => handleCategoryClick('learn')}><p> <FcReadingEbook className='fs-4 me-3'/> Learning</p></Link>
          <Link className='text-decoration-none text-dark' to='/deadline' onClick={() => handleCategoryClick('deadline')}><p> <FcAlarmClock className='fs-4 me-3'/> Deadline</p></Link>
          <Link className='text-decoration-none text-dark' to='/fit' onClick={() => handleCategoryClick('fitness')}><p><FcSportsMode className='fs-4 me-3'/>Fitness</p></Link>
          <Link className='text-decoration-none text-dark' to='/birthday' onClick={() => handleCategoryClick('birthday')}><p><FaBirthdayCake className='fs-4 me-3 text-info'/> Birthday</p></Link>
          <Link className='text-decoration-none text-dark' to='/other' onClick={() => handleCategoryClick('other')}><p><FaBirthdayCake className='fs-4 me-3 text-info'/> Other</p></Link>

          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


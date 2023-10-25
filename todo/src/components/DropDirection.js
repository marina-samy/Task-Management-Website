import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Timer from './Timer';
import TimeLoader from './TimeLoader';


function DropDirection({ setSelectedDate, selectedDate }) {

  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [showTimeLoader, setshowTimeLoader] = useState(false);

    function CustomToggle({ children, onClick }) {
        return <div onClick={onClick}>{children}</div>;
      }

      const handleCalendarClick = () => {
        setShowCalendar(!showCalendar);
      
        if (selectedDate) {
          setSelectedDate(selectedDate);
        }
      };

      const handleTimerClick = () => {
        setShowTimer(!showTimer);
        setShowCalendar(false);
      };

      const handleTimeLoadClick = () => {
        setshowTimeLoader(!showTimeLoader);
      };

      const handleDateSelect = (date) => {
        setSelectedDate(date);
        setShowCalendar(false);
      };

      
  return (
    <>
    
      {['end'].map((direction) => (
        <Dropdown className="custom-dropdown" align={direction} key={direction}>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-toggle">
            <BsThreeDotsVertical className='text-primary' />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={handleCalendarClick}>
              Select Date  
            </Dropdown.Item>
            <Dropdown.Item onClick={handleTimerClick}>Timer</Dropdown.Item>
            <Dropdown.Item onClick={handleTimeLoadClick}>TimeLogger</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>      
      ))}




      

      {showCalendar && (
        <DatePicker
         selected={selectedDate}
         onChange={(date) => handleDateSelect(date)}
         onSelect={(date) => setSelectedDate(date)}
         dateFormat="EEE MMM dd yyyy"
         customInput={
          <input
            type="text"
            value={selectedDate ? selectedDate.toLocaleDateString() : ""}
            onClick={handleCalendarClick}
            readOnly
          />
          
        }

        />
        
      )}
      {showTimeLoader && <TimeLoader />}
      {showTimer && <Timer duration={1} />}


   
    </>
  );
}


export default DropDirection;
import React from "react"
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function TableCalendar() {
    const [date, setDate] = useState(new Date());

    return <div className='wedding-calendar'>
        <h3 className='calendar-month'>Tháng 2 / 2024</h3>
        <div className="line-bottom"></div>
        <div className='calendar-container'>
            <Calendar
                onChange={setDate}
                value={date}
                selectRange={true}
            />
        </div>
        {date.length > 0 ? (
            <p className='text-center'>
                <span className='bold'>Start:</span>{' '}
                {date[0].toDateString()}
                &nbsp;|&nbsp;
                <span className='bold'>End:</span> {date[1].toDateString()}
            </p>
        ) : (
            <p className='text-center'>
                <span className='bold'>Default selected date:</span>{' '}
                {date.toDateString()}
            </p>
        )}
    </div>
}

export default TableCalendar
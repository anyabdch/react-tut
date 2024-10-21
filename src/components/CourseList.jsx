import './CourseList.css';
import { useState } from 'react';

const Course = ({course, selected, toggleSelected}) => (
    <div className={selected.includes(course) ? "card m-1 p-2 selected" : "card m-1 p-2"}
        onClick={() => toggleSelected(course)}>
        <div className="card-body">
            <h5 className="card-title">{course.term} CS{course.number}</h5>
            <p className="card-text">{course.title}</p>
        </div>
        <hr></hr>
        <p className="card-text">{course.meets}</p>
    </div>
);

const CourseList = ({courses, selected, toggleSelected}) => {
    return( <div className='course-list'>
                { courses === selected 
                    ? courses.map(cur => <Course key={cur.title} course={cur} selected={selected} toggleSelected={toggleSelected} />)
                    : courses.map(([id, cur]) => <Course key={cur.title} course={cur} selected={selected} toggleSelected={toggleSelected} />)
                    }
            </div>
    );
};

export default CourseList;
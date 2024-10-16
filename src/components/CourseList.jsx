import './CourseList.css';
import { useState } from 'react';

const Course = ({course, selected, toggleSelected}) => (
    <div className={selected.includes(course.title) ? "card m-1 p-2 selected" : "card m-1 p-2"}
        onClick={() => toggleSelected(course.title)}>
        <div className="card-body">
            <h5 className="card-title">{course.term} CS{course.number}</h5>
            <p className="card-text">{course.title}</p>
        </div>
        <hr></hr>
        <p className="card-text">{course.meets}</p>
    </div>
);

const CourseList = ({courses}) => {
    const  [selected, setSelected] = useState([]);

    const toggleSelected = (item) => setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
    );
    
    return( <div className='course-list'>
                { courses.map(([id, cur]) => <Course key={cur.title} course={cur} selected={selected} toggleSelected={toggleSelected} />)}
            </div>
    );
};

export default CourseList;
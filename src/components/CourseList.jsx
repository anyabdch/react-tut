import './CourseList.css';
import { useState } from 'react';
import { sameTime, includesDay } from '../utilities/conflicts';


const Course = ({course, selected, toggleUpdate, conflicts}) => (
    <div className={selected.includes(course) 
                    ? "card m-1 p-2 selected" 
                    : conflicts.includes(course) 
                        ? "card m-1 p-2 conflict" 
                        : "card m-1 p-2"}
        onClick={() => toggleUpdate(course)}>
        <div className="card-body">
            <h5 className="card-title">{course.term} CS{course.number}</h5>
            <p className="card-text">{course.title}</p>
        </div>
        <hr></hr>
        <p className="card-text">{course.meets}</p>
    </div>
);

const CourseList = ({courses, selected, toggleSelected}) => {
    
    const [conflicts, setConflicts] = useState([]);
    const toggleConflicts = () => setConflicts(
        courses === selected
        ? courses.filter(course => (includesDay(course, selected) || sameTime(course.meets, selected) ))   
        : courses.filter(([_, course]) => (includesDay(course.meets, selected) || sameTime(course.meets, selected) ))  
    );

    const toggleUpdate = (item) => {
        toggleSelected(item);
        toggleConflicts();
        console.log(conflicts);
    };
    
    return( <div className='course-list'>
                { courses === selected 
                    ? courses.map(cur => <Course key={cur.title} course={cur} selected={selected} toggleUpdate={toggleUpdate} conflicts={conflicts}/>)
                    : courses.map(([_, cur]) => <Course key={cur.title} course={cur} selected={selected} toggleUpdate={toggleUpdate} conflicts={conflicts} />)
                    }
            </div>
    );
};

export default CourseList;
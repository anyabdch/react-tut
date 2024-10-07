const Course = ({course}) => (
    <p>{course.term} CS{course.number}: {course.title}</p>
);

const CourseList = ({courses}) => (
    <div>
        { Object.entries(courses).map(([id, cur]) => <Course course={cur}/>)}
    </div>
);

export default CourseList;
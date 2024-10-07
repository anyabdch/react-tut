import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import CourseList from './components/CourseList';

const schedule = {
  "title": "CS Courses for 2018-2019",
  "courses" : {
    "F101" : {
      "term" : "Fall",
      "number" : "101",
      "meets" : "MWF 11:00-11:50",
      "title" : "Computer Science: Concepts, Philosophy, and Connections"
    },
    "F110" : {
      "term" : "Fall",
      "number" : "110",
      "meets" : "MWF 12:00-12:50",
      "title" : "Intro Programming for non-majors"
    },
    "F111" : {
      "term" : "Fall",
      "number" : "111",
      "meets" : "MWF 1:00-1:50",
      "title" : "Fundamentals of Computer Programming I"
    },
    "W111" : {
      "term" : "Winter",
      "number" : "111",
      "meets" : "MWF 12:00-12:50",
      "title" : "Fundamentals of Computer Programming I"
    },
    "F211" : {
      "term" : "Fall",
      "number" : "211",
      "meets" : "TTh 2:00-3:20",
      "title" : "Fundamentals of Computer Programming II"
    },
    "S313" : {
      "term": "Spring",
      "number": "313",
      "meets" : "TuTh 15:30-16:50",
      "title" : "Tangible Interaction Design and Learning"
    },
    "S314" : {
      "term": "Spring",
      "number": "314",
      "meets" : "TuTh 9:30-10:50",
      "title" : "Tech & Human Interaction"
    }
  }
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <Banner title={schedule.title} />
      </header>
      <CourseList courses={schedule.courses} />
    </div>
  );
};

export default App;

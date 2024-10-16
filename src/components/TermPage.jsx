import {useState} from 'react';
import CourseList from './CourseList';

const TermButton = ({term, choice, setChoice}) => (
    <div className="m-2">
        <input type="radio" id={term} className="btn-check" 
                checked={term === choice} autoComplete="off"
                onChange={() => setChoice(term)} />
        <label className="btn btn-info mb-1 p-2" htmlFor={term}>
            { term }
        </label>
    </div>
);

const TermFilter = ({terms, choice, setChoice}) => (
    <div className="btn-group">
        { 
            Object.keys(terms).map(term => <TermButton key={term} term={term} choice={choice} setChoice={setChoice} /> )
        }
    </div>
);

const Term = ({terms, choice}) => (

        <CourseList courses={terms[choice]} />
);

const TermPage = ({terms}) => {

    console.log("got here");
    const [choice, setChoice] = useState(() => Object.keys(terms)[0]);

    return (
        <div>
            <TermFilter terms={terms} choice={choice} setChoice={setChoice} />
            <Term terms={terms} choice={choice}></Term>
        </div>
    );
}

export default TermPage;
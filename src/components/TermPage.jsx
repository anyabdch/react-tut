import {useState} from 'react';
import CourseList from './CourseList';
import PopUp from './PopUp';

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
    <div className="d-inline-flex flex-row btn-group me-auto text-start">
        { 
            Object.keys(terms).map(term => <TermButton key={term} term={term} choice={choice} setChoice={setChoice} /> )
        }
    </div>
);

const TermPage = ({terms}) => {

    const [choice, setChoice] = useState(() => Object.keys(terms)[0]);

    const [open, setOpen] = useState(false);
    const openPopUp = () => setOpen(true);
    const closePopUp = () => setOpen(false);

    
    const  [selected, setSelected] = useState([]);
    const toggleSelected = (item) => setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
    );

    return (
        <div>
            <TermFilter terms={terms} choice={choice} setChoice={setChoice} />
            <div className="d-inline-flex flex-row-reverse ms-auto text-end">
                <button className="btn btn-warning" onClick={openPopUp}>Current Schedule</button>
            </div>
            <PopUp isOpen={open} close={closePopUp}>
                {
                    selected.length === 0
                    ? <div>
                        <h1>You haven't selected any classes yet! Start clicking on classes</h1>
                    </div>
                    : <CourseList courses={selected} selected={selected} toggleSelected={toggleSelected} />
                }
            </PopUp>
            <CourseList courses={terms[choice]} selected={selected} toggleSelected={toggleSelected} />
        </div>
    );
}

export default TermPage;
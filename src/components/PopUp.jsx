import './PopUp.css'

const PopUp = ({children, isOpen, close}) => (
    <div className={isOpen ? 'pop-up' : 'visually-hidden'}
        tabIndex="-1"
        role="dialog"
        onClick={(evt) => { if (evt.target !== evt.currentTarget) close(); }}>
            <div className="modal-dialog" role="document"> 
                <div className="modal-content">
                    <div className="modal-header"> 
                        <h1>Current Schedule</h1>
                        <button type="button" className="btn-close" aria-label="Close" onClick={close}/>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
);

export default PopUp;
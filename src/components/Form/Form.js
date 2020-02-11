import React from 'react';
import './Form.css';

const Form = ({submitFn}) => (
    <div className="form__wrapper"> 
        <h2>Add new travel</h2>
        <form className="form__form" onSubmit={submitFn}>
            <div className="form__item">
                <input 
                    type="text"
                    placeholder=" " 
                    name="date" 
                    id="date"
                    maxLength="30"
                />
                <label htmlFor="date">Date</label>
                <div className="forms__item__bar"></div>
            </div>
            <div className="form__item">
                <input 
                    type="text"
                    placeholder=" " 
                    name="departure" 
                    id="departure"
                    maxLength="30"
                />
                <label htmlFor="departure">Departure</label>
                <div className="forms__item__bar"></div>
            </div>
            <div className="form__item">
                <input 
                    type="text"
                    placeholder=" " 
                    name="arrival" 
                    id="arrival"
                    maxLength="30"
                />
                <label htmlFor="arrival">Arrival</label>
                <div className="forms__item__bar"></div>
            </div>
            <div className="form__item">
                <input 
                    type="text"
                    placeholder=" test " 
                    name="country" 
                    id="country"
                    maxLength="30"
                />
                <label htmlFor="country">Country</label>
                <div className="forms__item__bar"></div>
            </div>
            <button className="form__button" type="submit">add travel</button>
        </form>
    </div>
)

export default Form;
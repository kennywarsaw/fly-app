import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';

const Form = ({submitFn}) => (
    <div className={styles.wrapper}> 
        <h2>Add new travel</h2>
        <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
            <Input
                name="date"
                label="label"
                maxLength="30"
            />
            <Input
                name="deparature"
                label="label"
                maxLength="30"
            />
            <Input
                name="arrival"
                label="label"
                maxLength="30"
            />
            <Input
                name="country"
                label="label"
                maxLength="30"
            />
            <button className={styles.button} type="submit">add travel</button>
        </form>
    </div>
)

export default Form;
import React from 'react';
import AppContext from '../../context';
import styles from './Form.module.scss';
import Input from '../Input/Input';

const Form = ({submitFn}) => (
    <AppContext.Consumer>
        {(context) => (
            <div className={styles.wrapper}> 
            <h2>Add new travel</h2>
            <form 
                autoComplete="off" 
                className={styles.form} 
                onSubmit={context}
            >
                <Input
                    name="date"
                    label="Date"
                    maxLength={30}
                />
                <Input
                    name="deparature"
                    label="Deparature"
                    maxLength={30}
                />
                <Input
                    name="arrival"
                    label="Arrival"
                    maxLength={30}
                />
                <Input
                    name="country"
                    label="Country"
                    maxLength={30}
                />
                <button className={styles.button} type="submit">add travel</button>
            </form>
            </div>
        )}
    </AppContext.Consumer>
);

export default Form;
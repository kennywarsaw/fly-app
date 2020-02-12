import React from 'react';
import Proptypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({name, label, maxLength}) => (
    <div className={styles.formItem}></div>
        <input 
            className={styles.input}
            type="text"
            name={name} 
            id={name}
            maxLength={maxLength}
            required 
        />
        <label className={styles.label} htmlFor={name}>
            {label}
        </label>
        <div className={styles.itemBar}></div>
    </div>
);

Input.propTypes = {
    name: Proptypes.string.isRequired,
    label: Proptypes.string.isRequired,
    maxLength: propTypes.number.isRequired,
}

export default Input;
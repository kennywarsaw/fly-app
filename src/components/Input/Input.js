import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({name, label, maxLength}) => (
    <div className={styles.formItem}>
        <input 
            className={styles.input}
            type="text"
            placeholder=" "
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
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
}

export default Input;
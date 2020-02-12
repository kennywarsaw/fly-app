import React from 'react';
import PropTypes from "prop-types";
import styles from './ListItem.module.scss';

const ListItem = ({
    date,
    departure,
    image,
    arrival,
    country
}) => (
    <li className={styles.wrapper}>
        <div className={styles.left}>
            <div className={styles.date}>{date}</div>
            <div className={styles.departure}>{departure || 'Warsaw'}</div>
        </div>
        <img src={image} alt="" className={styles.image} />
        <div className={styles.right}>
            <div className={styles.arrival}>{arrival}</div>
            <div className={styles.country}>{country}</div>
        </div>
    </li>
);

ListItem.propTypes = {
    date: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    arrival: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
    departure: "Warsaw",
};

export default ListItem;
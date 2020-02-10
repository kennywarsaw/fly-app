import React from 'react';
import './ListItem.css';

const ListItem = ({
    date,
    departure,
    image,
    arrival,
    country
}) => (
    <li className="listItem__wrapper">
        <div className="listItem__left">
            <div className="listItem__date">{date || 'I dont know'}</div>
            <div className="listItem__departure">{departure}</div>
        </div>
        <img src={image} alt="" className="listItem__image" />
        <div className="listItem__right">
            <div className="listItem__arrival">{arrival}</div>
            <div className="listItem__country">{country}</div>
        </div>
    </li>
);

export default ListItem;
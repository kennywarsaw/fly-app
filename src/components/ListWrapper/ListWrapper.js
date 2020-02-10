import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';

const ListWrapper = (props) => (
    <ul className="listWrapper_wrapper">
        {props.items.map(item => (
            <ListItem key={item.arrival} {...item} />
        ))}
    </ul>
);

export default ListWrapper;
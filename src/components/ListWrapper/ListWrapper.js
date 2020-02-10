import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { travels } from '../../data/travels';

const ListWrapper = () => (
    <ul className="listWrapper_wrapper">
        {travels.map(item => (
            <ListItem key={item.arrival} {...item} />
        ))}
    </ul>
);

export default ListWrapper;
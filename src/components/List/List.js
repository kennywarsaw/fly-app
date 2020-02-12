import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './List.module.scss';

const List = (props) => (
    <ul className={styles.wrapper}>
        {props.items.map(item => (
            <ListItem key={item.arrival} {...item} />
        ))}
    </ul>
);

export default List;
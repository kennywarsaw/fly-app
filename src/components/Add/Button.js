import React from 'react';
import styles from './Button.module.scss';

const Button = ({ href }) => (
    <div className={styles.wrapper}>
        <>
            {
                href ? (
                    <a
                        href={href}
                        target="_blank"
                        className={styles.button}
                        rel="noopener noreferrer"
                    >
                        add travel
                    </a>
                ) : (
                    <button className={styles.button}>
                        add travel
                    </button>
                )
            }
        </>
    </div>
);

export default Button;
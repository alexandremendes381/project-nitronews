import React from 'react';
import styles from './index.module.scss';

const Loading = () => {
    return (
        <div className={styles.spinnercontainer}>
            <div className={styles.spinner} role="status">
            </div>
        </div>
    );
};

export default Loading;

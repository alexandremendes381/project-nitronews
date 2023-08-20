import React from 'react';
import styles from './index.module.scss';

const InputCheckbox = ({ onClick }) => {
    return (
        <div className={styles.checkboxesContainer}>
            <div className={styles.checkboxGroup}>
                <input
                    className={styles.lamp}
                    type="checkbox"
                    data-testid="input-checkbox"
                    aria-label="night-mode"
                    onClick={onClick}
                    role="switch"
                />
                <label htmlFor="night-mode"></label>
            </div>
        </div>
    );
};

export default InputCheckbox;

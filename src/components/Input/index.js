import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import lupa from '../../assets/logos/lupa.png';
import Inputmask from 'inputmask';

const Input = ({ label, placeholder, onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const inputElement = document.getElementById('input-field');
        Inputmask('AAA-99A', {
        }).mask(inputElement);

        inputElement.addEventListener('input', () => {
            setInputValue(inputElement.value);
        });
    }, []);

    const handleSearchClick = () => {
        onSearch(inputValue);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    };

    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>
                <label
                    htmlFor="input-field"
                >
                    {label}
                </label>
            </div>
            <div className={styles.inputWithIcon}>
                <input
                    type="text"
                    id="input-field"
                    value={inputValue}
                    onChange={() => { }}
                    handleKeyPress={handleKeyPress}
                    placeholder={placeholder}
                    className={styles.roundedInput} 
                />
                <button
                    type="button"
                    className={`${styles.searchButton} ${styles.purpleSearchButton}`}
                    onClick={handleSearchClick}
                >
                    <img src={lupa} alt="Buscar" />
                </button>
            </div>
        </div>
    );
};

export default Input;

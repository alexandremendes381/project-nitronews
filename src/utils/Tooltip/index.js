import React, { useState } from 'react';
import styles from './index.module.scss';

const Tooltip = ({ text, children, isPurpleMode }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div
            className={`${styles.tooltiptext} ${isPurpleMode ? styles.purpleTooltip : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {showTooltip && <span className={styles.tooltip}>{text}</span>}
        </div>
    );
};

export default Tooltip;

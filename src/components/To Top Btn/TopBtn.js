import React, { useEffect, useState } from 'react';
import "./TopBtn.css";

const TopBtn = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className='top-btn'>
            {showTopBtn && (
                <button className='Btn' onClick={goToTop}>Top</button>
            )}
        </div>
    );
};

export default TopBtn;
import React, { useEffect, useState } from 'react';
import "./TopBtn.css";

const TopBtn = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [color, setColor] = useState("transparent");
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
                setColor("black");
            } else {
                setShowTopBtn(false);
            }
            if (window.scrollY > 7200) {
                setShowTopBtn(true);
                setColor("white");
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
                <button style={{ borderColor: color }} className='Btn' onClick={goToTop}>Top</button>
            )}
        </div>
    );
};

export default TopBtn;
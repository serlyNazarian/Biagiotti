import React from 'react';
import "./SubscribeModal.css";
import ViewMoreButton from "../View More Button/ViewMoreButton"
import { useState } from 'react';
import { useEffect } from 'react';
import { FaWindowClose } from "react-icons/fa";

const SubscribeModal = () => {
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setModal(true);
    }, [])

    const CloseModal = () => {
        setModal(false);
    };

    return (
        <div className='Modal'>
            {modal && (
                <div className='Subscribe-Modal-Wrapper'>
                    <div className='Subscribe-Row'>
                        <span className='TuesdayNight-font-face'>subscribe</span>
                        <FaWindowClose className='WindowClose' onClick={CloseModal} />
                    </div>
                    <h2 className='Modal-Title'>Stay in touch</h2>
                    <div className='Subscribe-Input'>
                        <input type="email" placeholder='E-mail address' />
                        <ViewMoreButton text="Send" />
                    </div>
                    <span>*At vero eos et accusamus et iusto odio dignissimos</span>
                    <div className='Popup-Checkbox'>
                        <input type="checkbox" />
                        <span>Prevent This Pop-up</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubscribeModal;
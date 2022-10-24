import React from 'react';
import './Benefits.css';

const Benefits = () => {
    const Benefits = [
        {
            id: 1,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-icon-number-1.png",
            title: "on-line purchase",
            description: "At vero eos et accusamus et iusto odio digniss ducimus qui blanditiis praesentium volu",
        },
        {
            id: 2,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-icon-number-2.png",
            title: "free shipping",
            description: "At vero eos et accusamus et iusto odio digniss ducimus qui blanditiis praesentium volu",
        },
        {
            id: 3,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-icon-number-3.png",
            title: "money back",
            description: "At vero eos et accusamus et iusto odio digniss ducimus qui blanditiis praesentium volu",
        },
    ];
    return (
        <div className='row-wrapper'>
            {Benefits.map((benefit) => {
                return (
                    <div className='row-first-item' key={benefit.id}>
                        <img src={benefit.img} alt="" />
                        <div className='row-right'>
                            <span className='row-tittle'>{benefit.title}</span>
                            <span className='row-text'>{benefit.description}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Benefits;
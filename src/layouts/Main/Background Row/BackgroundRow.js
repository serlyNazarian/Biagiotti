import React from 'react';
import "./BackgroundRow.css";

const BackgroundRow = () => {
    const Items = [
        {
            id: 1, backgroundImage: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-icon-back-1.png",
            Icon: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-icon-front-1.png",
            Title: "Fragrance",
            Description: "At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium",
        },
        {
            id: 2, backgroundImage: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-icon-back-2.png",
            Icon: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-icon-front-2.png",
            Title: "Quality",
            Description: "At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium",
        },
        {
            id: 3, backgroundImage: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-icon-back-3.png",
            Icon: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-icon-front-3.png",
            Title: "Petroleum",
            Description: "At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium",
        },
        {
            id: 4, backgroundImage: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-icon-back-4.png",
            Icon: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-icon-front-4.png",
            Title: "Colors",
            Description: "At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium",
        },
        {
            id: 5, backgroundImage: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-icon-back-5.png",
            Icon: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-icon-front-5.png",
            Title: "Natural",
            Description: "At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium",
        },
    ];
    return (
        <div className='Row-Wrapper'>
            {Items.map((item) => {
                return (
                    <div key={item.id} className='Row-Item'>
                        <div className='Row-Image'>
                            <img className='Icon-Background' src={item.backgroundImage} alt="" />
                            <img className='Icon' src={item.Icon} alt="" />
                        </div>
                        <div className='Row-Text'>
                            <h4 className='Row-Title'>{item.Title}</h4>
                            <p className='Row-P'>{item.Description}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

export default BackgroundRow;
import React from 'react';
import ProductsTitle from "../Products Title/ProductsTitle";
import "./LatestProducts.css";

const LatestProducts = () => {
    const LatestProducts = [
        {
            id: 1,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-img-6-300x389.jpg",
            Name: "Rest Complex",
            Description: "An dico accommodare ius, porro",
            Price: "$36.00",
        },
        {
            id: 2,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-img-7-300x389.jpg",
            Name: "Sweet Milk",
            Description: "An dico accommodare ius, porro",
            Price: "$46.00",
        },
        {
            id: 3,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-img-8-300x389.jpg",
            Name: "Sweet Milk",
            Description: "An dico accommodare ius, porro",
            Price: "$52.00",
        },
        {
            id: 4,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-img-9-300x389.jpg",
            Name: "Moist Lotion",
            Description: "An dico accommodare ius, porro",
            Price: "$43.00",
        },
        {
            id: 5,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-img-10-300x389.jpg",
            Name: "Body Cream",
            Description: "An dico accommodare ius, porro",
            Price: "$55.00",
        },
        {
            id: 6,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/shop-img2-new-300x389.jpg",
            Name: "Body Mist",
            Description: "An dico accommodare ius, porro",
            Price: "$45.00",
        },
        {
            id: 7,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/shop-img3-new-300x389.jpg",
            Name: "Roll Eye Gel",
            Description: "An dico accommodare ius, porro",
            Price: "$33.00",
        },
        {
            id: 8,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/shop-img4-new-300x389.jpg",
            Name: "Sebum Control",
            Description: "An dico accommodare ius, porro",
            Price: "$24.00",
        },
        {
            id: 9,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-img-6-300x389.jpg",
            Name: "Hydra On",
            Description: "An dico accommodare ius, porro",
            Price: "$34.00",
        },
        {
            id: 10,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-img-9-300x389.jpg",
            Name: "Rewind Effect",
            Description: "An dico accommodare ius, porro",
            Price: "$28.00",
        },
        {
            id: 11,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/shop-img1-new-300x389.jpg",
            Name: "Clean Cream",
            Description: "An dico accommodare ius, porro",
            Price: "$32.00",
        },
        {
            id: 12,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-img-9-300x389.jpg",
            Name: "Rewind Effect",
            Description: "An dico accommodare ius, porro",
            Price: "$28.00",
        },
    ]
    return (
        <div className='Latest-Products'>
            <ProductsTitle Text="perfect shades" Title="Latest skincare essentials" Description="At vero eos et accusamus et iusto" />
            <div className='Latest-Products-Flex'>
                <div className='Latest-Products-Grid'>
                    {LatestProducts.map((item) => {
                        return (
                            <div className='Latest-Product' key={item.id}>
                                <img className='Latest-Product-Img' src={item.img} alt="" />
                                <div className='Latest-Product-Text'>
                                    <h4>{item.Name}</h4>
                                    <p>{item.Description}</p>
                                    <span className='Latest-Product-Price'>{item.Price}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default LatestProducts;
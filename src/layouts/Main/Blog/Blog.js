import React from 'react';
import ProductsTitle from '../Products Title/ProductsTitle';
import "./Blog.css";

const Blog = () => {
    const BlogItems = [
        {
            id: 1,
            Image: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-blog-img-1.jpg",
            Date: "Apr",
            Day: "08",
            FirstSpan: "Lipstick",
            SecondSpan: "By Janny Joe",
            BlogTitle: "The Cosmetics World",
            BlogDescription: "Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei. Et...",
            More: "Read More",
        },
        {
            id: 2,
            Image: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-blog-img-2.jpg",
            Date: "Apr",
            Day: "08",
            FirstSpan: "Lipstick",
            SecondSpan: "By Janny Joe",
            BlogTitle: "Prep a good primer",
            BlogDescription: "Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei. Et...",
            More: "Read More",
        },
        {
            id: 3,
            Image: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-blog-img-3.jpg",
            Date: "Apr",
            Day: "08",
            FirstSpan: "Lipstick",
            SecondSpan: "By Janny Joe",
            BlogTitle: "Know how to apply it",
            BlogDescription: "Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei. Et...",
            More: "Read More",
        },
        {
            id: 4,
            Image: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-blog-img-4.jpg",
            Date: "Apr",
            Day: "08",
            FirstSpan: "Lipstick",
            SecondSpan: "By Janny Joe",
            BlogTitle: "50 shades of great",
            BlogDescription: "Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei. Et...",
            More: "Read More",
        },
    ]
    return (
        <div className='Blog-Wrapper'>
            <ProductsTitle Text="perfect shades" Title="Find your beauty match" Description="At vero eos et accusamus et iusto" />
            <div className='Blog-Row'>
                {BlogItems.map((item) => {
                    return (
                        <div key={item.id} className='Blog-Item'>
                            <div className='Blog-Upper-Part'>
                                <img className='Blog-Image' src={item.Image} alt="" />
                                <div className='Blog-Date  TuesdayNight-font-face'>
                                    <span>{item.Date}</span>
                                    <span>{item.Day}</span>
                                </div>
                            </div>
                            <div className='Blog-Text'>
                                <div className='Blog-Text-First-Row'>
                                    <span className='First-Span'>{item.FirstSpan} </span>
                                    <span>{item.SecondSpan}</span>
                                </div>
                                <h4 className='Blog-Name'>{item.BlogTitle}</h4>
                                <p className='Blog-Description'>{item.BlogDescription}</p>
                                <span>{item.More}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Blog;
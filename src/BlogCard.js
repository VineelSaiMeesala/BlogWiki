import React from 'react';

const BlogCard = (prop)=>{
    return (
        <div className='BlogCard'>
            <img src={prop.img} alt='Logo'/>
            <h3>Tilte: {prop.title}</h3>
            <p>Description: {prop.description}</p>
        </div>
    )
    
}
export default BlogCard;
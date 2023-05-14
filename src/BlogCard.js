import React from 'react';
const BlogCard = (prop)=>{
    return (
        <div className='BlogCard'>
            <h3>Tilte: {prop.title}</h3>
            <p>Description: {prop.description}</p>
        </div>
    )
    
}
export default BlogCard;
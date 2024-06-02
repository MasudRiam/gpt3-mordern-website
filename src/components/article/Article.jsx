import React from 'react';
import './article.css';



const Article = ({ imgUrl, date, title }) => {
    return (
    <div className='gpt3__blog-container__article'>
        <div className='gpt3__blog-container__article-image'>
            <img src={imgUrl} alt="imageUrl" />
        </div>

        <div className='gpt3__blog-container_article-content'>
            <div>
                <p>{date}</p>
                <h3>{title}</h3>
            </div>
            <div>
                <p>Read Full Article</p>
            </div>

        </div>
    </div>
    )
}

export default Article
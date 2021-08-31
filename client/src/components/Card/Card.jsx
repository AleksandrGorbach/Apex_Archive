import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({article}) {
    return (
        <div className="card-container">
            <Link to={`/articles/${article.id}`}><img src={article.img_url} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <p>{article.category_id}</p>
            </Link>
        </div>
    )
}

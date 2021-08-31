import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({article}) {
    return (
        <div className="flex justify-between m-6">
            <div className="flex flex-col min-h-100 w-72 border-2 mx-auto bg-white p-2 rounded-lg shadow-lg">
                <Link to={`/articles/${article.id}`}>
                <img src={article.img_url} alt={article.title} className="rounded flex flex-col justify-center h-500 w-auto bg-cover"/>                                
                <h3 className="text-2xl font-light text-gray-800">{article.title}</h3>
                <p className="overflow-hidden overflow-ellipsis h-24">{article.content}</p>
                <p>{article.category_id}</p>
            </Link>
            </div>
        </div>
    )
}

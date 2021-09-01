import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({article}) {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-80 bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-2xl hover:scale-105 duration-500 transform transition cursor-pointer">
                <Link to={`/articles/${article.id}`}>
                <img src={article.img_url} alt={article.title} className="rounded flex flex-col justify-center h-500 w-auto bg-cover"/>                                
                <h1 className="text-2xl font-bold">{article.title}</h1>
                <p className="mt-1 text-gray-500 font- overflow-hidden overflow-ellipsis h-24">{article.content}</p>
                <p>{article?.category?.name}</p>
            </Link>
            </div>
        </div>
    )
}


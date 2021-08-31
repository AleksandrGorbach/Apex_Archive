import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

export default function Card({article}) {
    return (
        <div data-aos="zoom-in-down" data-aos-duration="1000" className="motion-safe:animate-fadeIn flex justify-between m-6">
            <div className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-firstgreen animate-ping"></div>
            <div className="absolute top-0 right-0 -mr-1 w-4 h-4 rounded-full bg-firstgreen"></div>
            <div className="absolute top-0 left-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-firstgreen animate-ping"></div>
            <div className="absolute top-0 left-0 -mr-1 w-4 h-4 rounded-full bg-firstgreen"></div>
            <div className="absolute bottom-0 left-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-firstgreen animate-ping"></div>
            <div className="absolute bottom-0 left-0 -mr-1 w-4 h-4 rounded-full bg-firstgreen"></div>
            <div className="absolute bottom-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-firstgreen animate-ping"></div>
            <div className="absolute bottom-0 right-0 -mr-1 w-4 h-4 rounded-full bg-firstgreen"></div>
            <div className="transform hover:scale-110 motion-reduce:transform-none flex flex-col max-h-200 min-h-152 w-72 border-2 mx-auto bg-gradient-to-r from-firstgreen to-secondgreen p-2 rounded-lg shadow-lg">
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

//  data-aos="fade-up" data-aos-duration="1000" 
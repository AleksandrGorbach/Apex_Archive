import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneArticle } from '../../services/articles';
import './ArticleDetail.css'

export default function ArticleDetail(props) {
  const [articleItem, setArticleItem] = useState({});
  const { id } = useParams();
  const { article, handleDelete, currentUser } = props

  useEffect(() => {
    const fetchArticleItem = async () => {
      const articleData = await getOneArticle(id);
      setArticleItem(articleData);
    };
    fetchArticleItem();
  }, [id]);


  return (
    <div className="detail-container">
      <img className="detail-img" src={articleItem.img_url} alt={articleItem?.title}/>
      <h1 className="detail-title"><span>{articleItem?.title}</span></h1>
        <p className="detail-content">{articleItem?.content}</p> 
          {currentUser?.id === articleItem?.user_id && (
            <div>
              <Link to={`/articles/${articleItem?.id}/edit`}>
                <button className="edit-btn"><span>Edit</span></button>
              </Link>
              <button className="delete-btn"onClick={() => handleDelete(article?.id)}><span>Delete</span></button>
            </div>
          )}
    </div>
  );
}
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneArticle } from '../../services/articles';


export default function ArticleDetail(props) {
  const [articleItem, setArticleItem] = useState({});
  const [currentArticle, setCurrentArticle] = useState(null);
  const { id } = useParams();
  const { article, handleDelete, currentUser } = props

  useEffect(() => {
    const fetchArticleItem = async () => {
      const articleData = await getOneArticle(id);
      setArticleItem(articleData);
    };
    fetchArticleItem();
  }, [id]);
console.log(id)


  return (
    <div className="detail-container">
      <img src={articleItem.img_url}/>
      <h3>{articleItem?.title}</h3>
      <p>{articleItem?.content}</p>    
          {currentUser?.id === articleItem?.user_id && (
            <div>
              <Link to={`/articles/${articleItem?.id}/edit`}>
                <button className="edit-btn">Edit</button>
              </Link>
              <button className="delete-btn"onClick={() => handleDelete(article?.id)}>Delete</button>
            </div>
          )}
    </div>
  );
}
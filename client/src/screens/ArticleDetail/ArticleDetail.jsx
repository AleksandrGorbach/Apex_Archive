import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneArticle } from '../../services/articles';

export default function ArticleDetail(props) {
  const [articleItem, setArticleItem] = useState({});
  const { id } = useParams();
  const { categories } = props;

  useEffect(() => {
    const fetchArticleItem = async () => {
      const articleData = await getOneArticle(id);
      setArticleItem(articleData);
    };
    fetchArticleItem();
  }, [id]);

//   const userArticle

  return (
    <div>
      <img src={articleItem.img_url}/>
      <h3>{articleItem?.title}</h3>
      <p>{articleItem?.content}</p>
        <button>Add</button>
    </div>
  );
}
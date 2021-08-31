import { Link } from 'react-router-dom';

export default function Articles(props) {
  const { articles, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Articles</h3>
      {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/articles/${article.id}`}>
            <h2 className="article-title">{article.title}</h2>
            <img className="article-img" src={article.img_url} alt={article.title}/>
            <p className="article-content">{article.content}</p>
          </Link>
          {currentUser?.id === article.user_id && (
            <div>
              <Link to={`/articles/${article.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(article.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
      <Link to='/new'>
        <button>Create</button>
      </Link>
    </div>
  );
}
import { Link } from 'react-router-dom';

export default function Articles(props) {
  const { articles, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Articles</h3>
      {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/articles/${article.id}`}>
            <p>{article.title}</p>
            <p>{article.content}</p>
            <img src={article.img_url} alt={article.title}/>
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
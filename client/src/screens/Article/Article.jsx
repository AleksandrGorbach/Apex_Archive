import { Link } from 'react-router-dom';

export default function Articles(props) {
  const { articles, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Articles</h3>
      {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/articles/${article.id}`}>
            <p>{article.name}</p>
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
      <Link to='/articles/new'>
        <button>Create</button>
      </Link>
    </div>
  );
}
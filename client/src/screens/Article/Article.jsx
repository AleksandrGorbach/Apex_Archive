import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card'

export default function Articles(props) {
  const { articles, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Articles</h3>
      {articles.map((article) => (
              
        <div key={article.id}>
              <Card article={article}/>

        </div>
      ))}
      <Link to='/new'>
        <button>Create</button>
      </Link>

    </div>
  );
}
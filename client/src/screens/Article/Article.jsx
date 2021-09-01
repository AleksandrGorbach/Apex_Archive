import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card'

export default function Articles(props) {
  const { articles, handleDelete, currentUser } = props;

  return (
    <div className="articles-page">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {articles.map((article) => (
        <div key={article.id}>
              <Card article={article}/>
            </div>
      ))}
       </div>
    </div>
  );
}

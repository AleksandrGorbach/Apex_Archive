import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneArticle } from '../services/articles';

export default function ArticleDetail(props) {
  const [articleItem, setArticleItem] = useState(null);
  const { id } = useParams();
  const { categories } = props;

  useEffect(() => {
    const fetchArticleItem = async () => {
      const articleData = await getOneArticle(id);
      setArticleItem(articleData);
    };
    fetchArticleItem();
  }, [id]);

  return (
    <div>
      <h3>{articleItem?.title}</h3>
      {foodItem?.flavors.map((flavor) => (
        <p key={flavor.id}>{flavor.name}</p>
      ))}
      {/* below is our for for the flavor drop down */}
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} defaultValue='default'>
          {/* we can set a default value to tell people to select a flavor*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value='default'>
            -- Select a Flavor --
          </option>
          {/* now we loop over all flavors and return an <option> tag for each */}

          {flavors.map((flavor) => (
            // we track the flavor's id as the "value" which will get added to state onChange
            // the flavor's name goes between the open and close tag which is what the user sees
            <option value={flavor.id}>{flavor.name}</option>
          ))}
        </select>
        <button>Add</button>
      </form>
    </div>
  );
}
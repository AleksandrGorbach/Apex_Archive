import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

export default function ArticleEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    img_url: '',
    content: '',
    category_id: '',
  })
  const {articles, handleUpdate, categories} = props;
  const {id} = useParams();
  const {title, img_url, content, category_id} = formData
  console.log(categories)

  useEffect(()=> {
    const prefillFormData = () => {
      const articleItem = articles.find((article)=> article.id === Number(id));
      setFormData({ title: articleItem?.title, img_url: articleItem?.img_url, content: articleItem?.content })
      console.log(articleItem)

    }
    if (articles.length) {
      prefillFormData()
    }
  }, [articles, id])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form
    onSubmit={(e) => {
				e.preventDefault();
				handleUpdate(id, formData);
			}}
      >
        <input 
          type='text' 
          name='title' 
          placeholder='Title'
          value={title} 
          onChange={handleChange}
        />
        <input 
          type='text' 
          name='img_url' 
          placeholder='Image URL'
          value={img_url} 
          onChange={handleChange}
        />
        <input 
          type='text' 
          name='content' 
          placeholder='Content'
          value={content} 
          onChange={handleChange}
        />
        {/* <select className="create-input" onChange={handleChange} name='category_id' value={category_id}>
         <option value="category">Category</option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} name='category' value={Number(cat.id)}>{cat.name}</option>
              )
            })}
        </select> */}
      <button>Submit</button>
    </form>
  )
}
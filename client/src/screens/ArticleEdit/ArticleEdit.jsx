import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

export default function ArticleEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    img_url: '',
    content: ''
  })
  const {articles, handleUpdate} = props;
  const {id} = useParams();
  const {title, img_url, content} = formData

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
      <label>
        Name:
        <input 
          type='text' 
          name='title' 
          value={title} 
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input 
          type='text' 
          name='img_url' 
          value={img_url} 
          onChange={handleChange}
        />
      </label>
      <label>
        Content:
        <input 
          type='text' 
          name='content' 
          value={content} 
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
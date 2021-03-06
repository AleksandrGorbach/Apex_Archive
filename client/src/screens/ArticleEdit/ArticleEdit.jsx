import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import './ArticleEdit.css'

export default function ArticleEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    img_url: '',
    content: '',
  })
  const {articles, handleUpdate, categories} = props;
  const {id} = useParams();
  const {title, img_url, content} = formData
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
        <section className="edit">
        <header>
            <h2>Apex Archive</h2>
            <h4>Article Edit</h4>
        </header>
        <input className="edit-input"
          type='text' 
          name='title' 
          placeholder='Title'
          value={title} 
          onChange={handleChange}
        />
        <input className="edit-input" 
          type='text' 
          name='img_url' 
          placeholder='Image URL'
          value={img_url} 
          onChange={handleChange}
        />
        <textarea className="edit-area" 
          type='text' 
          name='content' 
          placeholder='Content'
          value={content} 
          onChange={handleChange}
        />
      <button className="edit-button">Submit</button>
      </section>
    </form>
  )
}
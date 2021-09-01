import { useState } from 'react';
import './ArticleCreate.css';

export default function ArticleCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    img_url: '',
    category_id: '',
  });

  const { title, content, img_url, category_id } = formData;
  const { handleCreate, categories } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <section className="create">
      <header>
      <h2>Apex Archive</h2>
      <h4>Create Article</h4>
      </header>
      <div className="create-form">
        <input className="create-input"
        type='text' 
        name='title' 
        placeholder='Name'
        value={title} 
        onChange={handleChange} 
        />
      <br />
        <input className="create-input"
        type='text'
        name='img_url'
        placeholder='Image URL'
        value={img_url}
        onChange={handleChange}
        /> 
      <br />
        <input className="create-input"
        type='text'
        name='content'
        placeholder='content'
        value={content}
        onChange={handleChange}
        />
        <select className="create-input" onChange={handleChange} name='category_id' value={category_id}>
         <option value="category">Category</option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} name='category' value={Number(cat.id)}>{cat.name}</option>
              )
            })}
        </select>
      <button className="create-button">Submit</button>
      </div>
      </section>
    </form>
  );
}
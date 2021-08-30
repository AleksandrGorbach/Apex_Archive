import { useState } from 'react';

export default function ArticleCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    img_url: '',
    category_id: '',
  });
  const { title, content, img_url, category_id } = formData;
  const { handleCreate } = props;

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
      <h3>Create Article</h3>
      <label>
        Name:
        <input
        type='text' 
        name='title' 
        value={title} 
        onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Image:
        <input
        type='text'
        name='img_url'
        value={img_url}
        onChange={handleChange}
        /> 
      </label>
      <br />
      <label>
        Content:
        <input
        type='text'
        name='content'
        value={content}
        onChange={handleChange}
        />
      </label>
      {/* <label>
        Category:
         <option value="category">Category</option>
            {allCategories.map((cat) => {
              return (
                <option key={cat.id} name='category' value={Number(cat.id)}>{cat.name}</option>
              )
            })}
      </label> */}
      <button>Submit</button>
    </form>
  );
}
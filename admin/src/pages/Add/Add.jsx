import React, { useState } from 'react';
import "./Add.css";
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
  const url = 'http://localhost:4000'; // calling the URL

  const [image, setImage] = useState(null);

  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad'
  });

  // To extract text from all the input boxes
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  // To call the API
  const onSubmitHandler = async (event) => {
    event.preventDefault(); // To prevent reload

    // To insert all our data inside the useState above
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price)); // Ensure the price is a number
    formData.append('category', data.category);
    formData.append('image', image);

    try {
      // Let's call the API using axios
      const response = await axios.post(`${url}/api/food/add`, formData);

      // To check if response is success or fail
      if (response.data.success) {
        setData({
          name: '',
          description: '',
          price: '',
          category: 'Salad'
        });
        setImage(false); // Assuming setImage should reset to null or an empty string

        toast.success(response.data.message)


      } else {
        // Handle the error scenario if there is error
        toast.error( response.data.message);
      }
    } catch (error) {
      // Handle any other errors that may occur during the API call
      console.error('Error while adding food item:', error);
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' name='image' hidden required />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Enter name of food here' required />
        </div>

        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category" value={data.category}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='#1500' required />
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  );
};

export default Add;

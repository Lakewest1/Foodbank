import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = () => {

  const url = 'http://localhost:4000';

  const [list, setList] = useState([]);
  // To fetch from srver//
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    // let check if we are getting response//
    console.log(response.data)

    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error('Error fetching the food list')
    }
    
  }
  // To display the food list when it is loaded//
  useEffect(() => {
    fetchList();
  }, [])
  
  return (
    <div className='list add flex-col'>
      <p>All food Lists</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
               <img src={`${url}/images/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>#{item.price}</p>
              <p>X</p>

            </div>
          )
        })}
      </div>
      
    </div>
  );
};

export default List

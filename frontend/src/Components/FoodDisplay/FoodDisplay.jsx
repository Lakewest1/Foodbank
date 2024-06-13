import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import Fooditem from '../Fooditem/Fooditem'

const FoodDisplay = ({ category}) => {

  const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2> View Top Dishes near you</h2>
      {/*Display many foods items-------------------------*/}
      <div className="food-display-list">{/*TO display food base on category */}
        {food_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
          
          
        })}
      </div>
      
    </div>
  )
}

export default FoodDisplay


import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'



const ExploreMenu = ({ category, setCategory }) => {

  return (
    <div className='Explore-menu' id='Explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='Explore-menu-text'>Choose from a diverse menu featuring a palatable set of dishes crafted with the best ingredient and culinary .Satify Your dinning experience with a super meal at a time. </p>

      {/*----Calling foods from the data (assets)*/}

      <div className="Explore-menu-list">
        {menu_list.map((item,index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className='Explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
              
            </div>
          )
        })}
      </div>
      <hr />
      
    </div>
  )
}

export default ExploreMenu;

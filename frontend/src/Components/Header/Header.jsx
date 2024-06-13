
import './Header.css'
import video1 from '../../../public/video1.mp4'
import video5 from '../../../public/video5.mp4'
import video3 from '../../../public/video3.mp4'
import background from '../../assets/header_img.png'



const Header = () => {
  return (
    <div className='header'>
      
      <div className="header-content">
       
        <div className="header-left">
        <h2>Order for your Favourite food here!</h2>
        <p>Choose from a diverse menu featuring a palatable set of dishes crafted with the best ingredient and culinary .Satify Your dinning experience with a super meal at a time. </p>
          <button>View Menu</button>
          </div>

         <div className="Foodvid">
        <div className="food-col">
       <video autoPlay muted loop  className='Food1'>
          <source src={video1} type='video/mp4'></source>
          </video>
        </div>
        <div className="food-col">
           <video autoPlay muted loop  className='Food1'>
          <source src={video5} type='video/mp4'></source>
        </video>
          </div>
            <div className="food-col">
           <video autoPlay muted loop  className='Food1'>
          <source src={video3} type='video/mp4'></source>
        </video>
          </div>
             <div className="food-col">
           <video autoPlay muted loop  className='Food1'>
          <source src={video5} type='video/mp4'></source>
        </video>
          </div>
             <div className="food-col">
           <video autoPlay muted loop  className='Food1'>
          <source src={video5} type='video/mp4'></source>
        </video>
          </div>
             <div className="food-col">
           <video autoPlay muted loop  className='Food1'>
          <source src={video5} type='video/mp4'></source>
        </video>
        </div>
         </div>

       
     
   
          
        </div>
      
    </div>
  )
}

export default Header

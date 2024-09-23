import  { useContext } from 'react';
import { UserContext } from '../Context/Context';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import FooterSection from "../Components/FooterSection"
const Likes = () => {
  
  const { removeFromLikes, likes,addToCart } = useContext(UserContext);

  const handleRemoveClick = (product) => {
    removeFromLikes(product);
    
  };
  const handleAddToCartClick = (product) => {
    addToCart(product);
  };

  return (
    <>
    <div className='my-10'>
      
      {likes.length === 0 ? (
        <div>
       <img src="/img/Likes/Untitled-1.pngwe.png" className="flex items-center justify-center sm:w-[300px] xs:w-[350px] m-auto " alt="" />
       <p className="flex items-center justify-center  text-red-600 text-xl">هیچ محصول مورد علاقه یافت نشد</p>
       </div>
      ) : (
        <div className='flex items-center justify-center mt-10'>
        <ul className="space-y-4">
          {likes.map((product, index) => (
            <li key={index} className="flex justify-between items-center p-4 bg-white xl:w-[1200px] lg:w-[900px] sm:w-[500px] xs:w-[400px] shadow-md rounded-lg">
              <div className="flex gap-5">
                <div>
                  <img src={product.img || 'default-image.jpg'} className="sm:w-[100px] xs:w-[80px] xs:h-[80px] sm:h-[100px]" alt="" />
                </div>
                <div>
                  <h2 className="text-md text-[#ed242e]">{product.name || 'نام محصول'}</h2>
                  <p className="pt-5 text-sm text-gray-600">قیمت: {product.price || 'قیمت نا معلوم'} تومان</p>
                 
                </div>
              </div>
              <div className='flex gap-4'>
              <div className="bg-gray-200 rounded-full w-[45px] h-[45px] flex items-center justify-center">
              <button
                onClick={() => handleRemoveClick(product)}
                className="text-[#ed242e] "
              >
                <FaRegTrashCan className="text-2xl" />
              </button>
              
              </div>
              <button  onClick={() => handleAddToCartClick(product)} className='text-[#ed242e] bg-gray-100 rounded-full p-3 hover:opacity-75'><FaBasketShopping className='text-2xl' /></button>
              </div>
            </li>
          ))}
        </ul>
        </div>
      )}
      <ToastContainer />
    </div>
    <FooterSection/>
    
    </>
  );
}

export default Likes;

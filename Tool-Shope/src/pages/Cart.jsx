import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegTrashCan } from "react-icons/fa6";
import { LiaCartPlusSolid } from "react-icons/lia";
import FooterSection from "../Components/FooterSection"
const Cart = () => {
  const { cart, totalPrice, removeFromCart, updateCartItemQuantity } = useContext(UserContext);

  const handleRemoveClick = (product) => {
    removeFromCart(product);
   
  };

  const shippingCost = "10".padStart(3, '0'); 
  const totalWithShipping = totalPrice + "," + shippingCost + ",";

  // توابع افزایش و کاهش تعداد
  const increaseQuantity = (product) => {
    updateCartItemQuantity(product.id, 1); 
  };

  const decreaseQuantity = (product) => {
    if (product.quantity > 1) {
      updateCartItemQuantity(product.id, -1); 
    } else {
     
      handleRemoveClick(product);
    }
  };

  return (
    <>
      <div>
        <div className="container mx-auto px-10 py-10">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center gap-y-5">
            <img src="/img/Cartimages/Untitled-1.pngqqq.png" className="flex items-center justify-center sm:w-[400px] xs:w-[350px] m-auto" alt="" />
            <p className="text-2xl text-[#ed242e] font-bold">سبد خرید شما خالی است</p>
            </div>
          ) : (
            <div className="flex flex-wrap items-start gap-y-5 justify-center gap-x-5">
              <ul className="space-y-4">
                {cart.map((product, index) => (
                  <li key={index} className="flex justify-between items-center p-4 bg-white lg:w-[1000px] md:w-[700px] sm:w-[500px] xs:w-[400px] shadow-md rounded-lg">
                    <div className="flex gap-5">
                      <div>
                        <img src={product.img} className="w-[100px] h-[100px]" alt="" />
                      </div>
                      <div>
                        <h2 className="sm:text-lg text-[#ed242e] xs:text-sm">{product.name}</h2>
                        <div className="flex items-center gap-20 pt-7">
                        <p className=" text-sm text-gray-600">قیمت محصول : {product.price} تومان</p>
                        <div className="pt-1 text-[#ed242e] text-sm flex items-center gap-2">
                          <button onClick={() => decreaseQuantity(product)} className="bg-gray-200 rounded-full w-[30px] h-[30px] flex items-center justify-center"><FaRegTrashCan className="text-xl" /></button>
                          <span>{product.quantity}</span>
                          <button onClick={() => increaseQuantity(product)} className="bg-gray-200 rounded-full w-[30px] h-[30px] flex items-center justify-center"><LiaCartPlusSolid className="text-2xl" /></button>
                        </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveClick(product)}
                      className="text-red-500 hover:text-red-800"
                    >
                      
                    </button>
                  </li>
                ))}
              </ul>
              <div className="bg-white w-[350px] h-[250px] rounded-xl shadow-lg">
                <h1 className="flex justify-center bg-[#ed242e] text-white rounded-t-xl h-[50px] items-center">محاسابت سبد خرید شما</h1>
                <div className="flex gap-10 justify-center text-md text-gray-700 pt-10">
                  <div className="flex flex-col gap-3 items-start">
                    <span className="text-[#ed242e]">قیمت کل :</span>
                    <span className="text-teal-800">هزینه ارسال :</span>
                    <span className="text-red-600">قیمت مجموع :</span>
                  </div>
                  <div className="flex flex-col gap-3 items-end">
                    <span>{totalPrice.toLocaleString()},000,000 تومان</span>
                    <span>10,000 تومان</span> 
                    <span>{totalWithShipping.toLocaleString()}000 تومان</span>
                  </div>
                </div>
                <div>
                  <Link to="/continuBuying">
                    <span className="text-white text-sm bg-[#ed242e] flex items-center justify-center w-[200px] h-[35px] hover:opacity-70 m-auto rounded-md mt-5 shadow-md cursor-pointer">ادامه فرایند خرید</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <ToastContainer />
      <FooterSection/>
    </>
  );
};

export default Cart;

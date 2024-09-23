import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../Context/Context"; 
import { useNavigate } from "react-router-dom"; 
import "../index.css"; 

const AuthForm = () => {
  
  const [isSignup, setIsSignup] = useState(true);
  const { registerUser, loginUser } = useContext(UserContext);
  
  const imageClass = isSignup ? "slide-left" : "slide-right";

  return (
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow rounded-2xl flex justify-center flex-1">
        {isSignup ? (
          <>
           
            <div className={`flex-1  rounded-2xl text-center hidden md:flex ${imageClass}`}>
              <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                <img src="/img/Login/Untitled-2.png005.png" className="flex items-center justify-center mx-auto pt-10 h-[400px] w-[400px]" alt="" />
              </div>
            </div>
            
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <FormContent isSignup={isSignup} setIsSignup={setIsSignup} registerUser={registerUser} loginUser={loginUser} />
            </div>
          </>
        ) : (
          <>
          
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <FormContent isSignup={isSignup} setIsSignup={setIsSignup} registerUser={registerUser} loginUser={loginUser} />
            </div>
          
            <div className={`flex-1  rounded-2xl text-center hidden md:flex ${imageClass}`}>
              <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                <img src="/img/Login/Untitled-2.png005.png" className="flex items-center justify-center mx-auto h-[400px] w-[400px]" alt="" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const FormContent = ({ isSignup, setIsSignup, registerUser, loginUser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
 

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
     
      if (username.length < 4 || username.length > 16) {
        Swal.fire({
          icon: 'error',
          title: 'خطا',
          text: 'نام کاربری باید بین 4 تا 16 کاراکتر باشد.',
          timer: 2000,
          showConfirmButton: false
        });
        return;
      }
      if (!validateEmail(email)) {
        Swal.fire({
          icon: 'error',
          title: 'خطا',
          text: 'لطفاً یک ایمیل معتبر وارد کنید.',
          timer: 2000, 
          showConfirmButton: false
        });
        return;
      }
      if (phone.length !== 11) {
        Swal.fire({
          icon: 'error',
          title: 'خطا',
          text: 'شماره تلفن باید دقیقاً 11 رقم باشد.',
          timer: 2000, 
          showConfirmButton: false
        });
        return;
      }
      if (password.length < 8 || password.length > 16) {
        Swal.fire({
          icon: 'error',
          title: 'خطا',
          text: 'رمز عبور باید بین 8 تا 16 کاراکتر باشد.',
          timer: 2000, 
          showConfirmButton: false
        });
        return;
      }

      
      const userData = { username, email, phone, password };

      try {
        await registerUser(userData);
        Swal.fire({
          icon: 'success',
          title: 'ثبت‌نام موفقیت‌آمیز بود!',
          text: 'حساب کاربری شما با موفقیت ایجاد شد.',
          timer: 2000, 
          showConfirmButton: false
        });
        setTimeout(() => {
          setUsername('');
          setEmail('');
          setPhone('');
          setPassword('');
          navigate("/");
        }, 2000);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'خطا',
          text: 'مشکلی در ثبت‌نام رخ داد.',
          timer: 2000, 
          showConfirmButton: false
        });
      }
    } else {
     
      if (!validateEmail(email)) {
        Swal.fire({
          icon: 'error',
          title: 'خطا',
          text: 'لطفاً یک ایمیل معتبر وارد کنید.',
          timer: 2000, 
          showConfirmButton: false
        });
        return;
      }
      if (password.length < 8 || password.length > 16) {
        Swal.fire({
          icon: 'error',
          title: 'خطا',
          text: 'رمز عبور باید بین 8 تا 16 کاراکتر باشد.',
          timer: 2000, 
          showConfirmButton: false
        });
        return;
      }

      try {
        
        const response = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`);
        const users = await response.json();

        if (users.length === 0) {
        
          Swal.fire({
            icon: 'error',
            title: 'خطا',
            text: 'حسابی با این اطلاعات وجود ندارد.',
            timer: 2000, 
            showConfirmButton: false
          });
        } else {
         
          await loginUser(email, password);
          
          setTimeout(() => {
            setEmail('');
            setPassword('');
            navigate("/"); 
          }, 1000);
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'خطا',
          text: 'مشکلی در ورود به حساب کاربری وجود دارد.',
          timer: 2000, 
          showConfirmButton: false
        });
      }
    }
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <div className="text-center">
        <h1 className="text-2xl xl:text-4xl font-extrabold text-[#ed242e]">
          {isSignup ? 'فرم ثبت نام' : 'فرم ورود'}
        </h1>
        <p className="text-[12px] text-gray-500 mt-4 text-md">
          {isSignup ? 'لطفاً اطلاعات خود را وارد کنید تا حساب کاربری خود را ایجاد کنید' : 'خوش آمدید! لطفاً وارد حساب کاربری خود شوید'}
        </p>
      </div>
      <div className="w-full flex-1 mt-8">
        <div className="mx-auto max-w-xs flex flex-col gap-4">
          {isSignup && (
            <input
              dir="rtl"
              className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-right"
              type="text"
              placeholder="نام کاربری"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              minLength="4"
              maxLength="16"
              required
            />
          )}
          <input
            dir="rtl"
            className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-right"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {isSignup && (
            <input
              dir="rtl"
              className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-right"
              type="text"
              placeholder="شماره موبایل"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength="11"
              required
            />
          )}
          <input
            dir="rtl"
            className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-right"
            type="password"
            placeholder="رمز عبور خود را وارد کنید"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="8"
            maxLength="16"
            required
          />
          <button
            type="submit"
            className="mt-5 w-full px-5 py-3 text-lg bg-[#ed242e] hover:opacity-65 text-white rounded-lg font-medium"
          >
            {isSignup ? 'ثبت‌نام' : 'ورود'}
          </button>
        </div>
      </div>
      <div className="my-4 text-sm text-gray-500">
        {isSignup ? 'قبلاً حساب کاربری دارید؟' : 'حساب کاربری ندارید؟'}
        <button
          type="button"
          onClick={() => setIsSignup(!isSignup)}
          className="text-[#ed242e] hover:underline px-2"
        >
          {isSignup ? 'ورود' : 'ثبت‌نام'}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;

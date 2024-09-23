import { createContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [likes, setLikes] = useState([]);
  

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedCart = localStorage.getItem('cart');
    const storedTotalPrice = localStorage.getItem('totalPrice');
    const storedLikes = localStorage.getItem('likes');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice));
    }
    if (storedLikes) {
      setLikes(JSON.parse(storedLikes));
    }
  }, []);

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  const fetchCart = async () => {
    if (!user) return;

    try {
      const response = await fetch(`http://localhost:3001/cart?userId=${user.id}`);
      const data = await response.json();
      if (data.cart) {
        setCart(data.cart);
        setTotalPrice(parseFloat(data.totalPrice));
        localStorage.setItem('cart', JSON.stringify(data.cart));
        localStorage.setItem('totalPrice', data.totalPrice.toString());
      }
    } catch (error) {
      Swal.fire('خطا', 'بارگذاری سبد خرید ناموفق بود.', 'error');
    }
  };

  const registerUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      setUser(data);
      setError(null);
      localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
      setError('ثبت‌نام ناموفق بود.');
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3001/users');
      const users = await response.json();

      const existingUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (existingUser) {
        setUser(existingUser);
        setError(null);
        localStorage.setItem('user', JSON.stringify(existingUser));
        fetchCart();
      } else {
        setError('ایمیل یا رمز عبور اشتباه است.');
      }
    } catch (error) {
      setError('ورود ناموفق بود.');
    }
  };

  const logoutUser = () => {
    setUser(null);
    setError(null);
    setCart([]);
    setTotalPrice(0);
    setLikes([]);
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('likes');
  };

  const addToCart = async (product) => {
    if (!user) {
      Swal.fire('خطا', 'ابتدا وارد حسابتان شوید.', 'warning');
      return;
    }

    const existingProduct = cart.find(item => item.id === product.id);

    let updatedCart;
    let updatedTotalPrice;

    if (existingProduct) {
      updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    updatedTotalPrice = updatedCart.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

    setCart(updatedCart);
    setTotalPrice(updatedTotalPrice);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    localStorage.setItem('totalPrice', updatedTotalPrice.toString());
    toast.success('محصول به سبد خرید اضافه شد!', {
      position: "top-center",
      autoClose: 2000,
    });
    try {
      await fetch(`http://localhost:3001/cart?userId=${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart: updatedCart, totalPrice: updatedTotalPrice }),
      });
    } catch (error) {
      Swal.fire('خطا', 'اضافه کردن به سبد خرید ناموفق بود.', 'error');
    }
  };
  const updateUser = async (updatedUserData) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserData),
      });
      const data = await response.json();
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      toast.success('اطلاعات با موفقیت ذخیره شد!', {
        position: "top-center",
        autoClose: 1500, 
      });
    } catch (error) {
      Swal.fire('خطا', 'به‌روزرسانی اطلاعات ناموفق بود.', 'error');
    }
  };

  
  const addToLikes = (product) => {
    if (!user) {
      Swal.fire('خطا', 'ابتدا وارد حسابتان شوید.', 'warning');
      return;
    }

    const isAlreadyLiked = likes.some(item => item.id === product.id);

    if (isAlreadyLiked) {
      Swal.fire('خطا', 'این محصول قبلاً به علاقه‌مندی‌ها اضافه شده است.', 'warning');
      return;
    }

    const updatedLikes = [...likes, product];
    setLikes(updatedLikes);
    localStorage.setItem('likes', JSON.stringify(updatedLikes));

    toast.success('محصول به علاقه‌مندی‌ها اضافه شد!', {
      position: "top-center",
      autoClose: 1000,
    });
  };

  const removeFromCart = async (productToRemove) => {
    const existingProduct = cart.find(item => item.id === productToRemove.id);

    let updatedCart;
    let updatedTotalPrice;

    if (existingProduct.quantity > 1) {
      updatedCart = cart.map(item =>
        item.id === productToRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    } else {
      updatedCart = cart.filter(item => item.id !== productToRemove.id);
    }

    updatedTotalPrice = updatedCart.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

    setCart(updatedCart);
    setTotalPrice(updatedTotalPrice);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    localStorage.setItem('totalPrice', updatedTotalPrice.toString());
    toast.success('اطلاعات با موفقیت ذخیره شد!', {
  position: "top-center",
  autoClose: 2000, 
});
    try {
      await fetch(`http://localhost:3001/cart?userId=${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart: updatedCart, totalPrice: updatedTotalPrice }),
      });
    } catch (error) {
      Swal.fire('خطا', 'حذف از سبد خرید ناموفق بود.', 'error');
    }
  };

  const removeFromLikes = async (productToRemove) => {
    const updatedLikes = likes.filter(item => item.id !== productToRemove.id);

    setLikes(updatedLikes);
    localStorage.setItem('likes', JSON.stringify(updatedLikes));

    toast.success('محصول از علاقه‌مندی‌ها حذف شد!', {
      position: "top-center",
      autoClose: 1000,
    });

    try {
      await fetch(`http://localhost:3001/likes?userId=${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ likes: updatedLikes }),
      });
    } catch (error) {
      Swal.fire('خطا', 'حذف از علاقه‌مندی‌ها ناموفق بود.', 'error');
    }
  };

  const updateCartItemQuantity = async (productId, delta) => {
    const existingProduct = cart.find(item => item.id === productId);

    let updatedCart;
    let updatedTotalPrice;

    if (existingProduct) {
      if (existingProduct.quantity + delta > 0) {
        updatedCart = cart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        );
      } else {
        updatedCart = cart.filter(item => item.id !== productId);
      }

      updatedTotalPrice = updatedCart.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

      setCart(updatedCart);
      setTotalPrice(updatedTotalPrice);

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      localStorage.setItem('totalPrice', updatedTotalPrice.toString());
      toast.success('تعداد محصول به‌روزرسانی شد!', {
        position: "top-center",
        autoClose: 1000,
      });
      try {
        await fetch(`http://localhost:3001/cart?userId=${user.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cart: updatedCart, totalPrice: updatedTotalPrice }),
        });
      } catch (error) {
        Swal.fire('خطا', 'به‌روزرسانی تعداد محصول در سبد خرید ناموفق بود.', 'error');
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        error,
        cart,
        totalPrice,
        likes,
        registerUser,
        loginUser,
        logoutUser,
        addToCart,
        addToLikes,
        removeFromCart,
        removeFromLikes,
        updateCartItemQuantity,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

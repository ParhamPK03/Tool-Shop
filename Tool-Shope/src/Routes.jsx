import Shop from "./pages/Shop";
import MainPages from "./Components/MainPages"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs"
import Discount from "./pages/Discount";
import Likes from "./pages/Likes"
import ProductDetail from "./Components/ProductDetail";
import Wallet from "./pages/Wallet"
import AccountDetails from "./Components/AccountDetails"
import DifftentsDrill from "./pages/ReadMore/DifftentsDrill"
import OldvsNew from "./pages/ReadMore/OldvsNew"
import RecycleTools from "./pages/ReadMore/RecycleTools"
import RonixBadThings from "./pages/ReadMore/RonixBadThings"
import ContinuBuying from "./Components/CountinueBuyind";

const Routes = [
    { path: '/', element: <MainPages /> },
    { path: '/shop', element: <Shop /> },
    { path: '/login', element: <Login /> },
    { path: '/aboutUs', element: <AboutUs /> },
    { path:"/product/:id", element: <ProductDetail />},
    { path: '/blogs', element: <Blogs /> },
    { path: '/cart', element: <Cart /> },
    { path: '/discount', element: <Discount /> },
    { path: '/likes', element: <Likes /> },
    { path: '/difftentsDrill', element: <DifftentsDrill /> },
    { path: '/oldvsNew', element: <OldvsNew /> },
    { path: '/recycleTools', element: <RecycleTools /> },
    { path: '/ronixBadThings', element: <RonixBadThings /> },
    { path: '/wallet', element: <Wallet /> },
    { path: "/account-details", element: <AccountDetails /> },
    { path: "/continuBuying", element: <ContinuBuying /> },

];

export default Routes;
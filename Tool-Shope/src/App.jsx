import Header from "./Components/header"
import Navbar from "./Components/Navbar"
import { useRoutes } from "react-router-dom";
import Routes from "./Routes";
import { UserProvider } from "./Context/Context";
import ScrollToTopButton from "./Components/ScrollToTopButton";
const App = () => {
  const router = useRoutes(Routes);
  return (
    <UserProvider> 
    <div className="h-screen">
      <ScrollToTopButton/>
      <Navbar/>
      <Header/>
      {router}
    </div>
    </UserProvider> 
  )
}

export default App

import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home'
import Order from "./pages/order/Order"
import Card from "./pages/card/Card"
import Dashboard from "./pages/admin/dashboard/Dashboard"
import NoPage from "./pages/nopage/NoPage"
import State from "./context/data/State"
import AllProducts from "./pages/allproducts/AllProducts"

function App() {
 
  return (
    <State>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/order" element={<Order></Order>}/>
          <Route path="/card" element={<Card></Card>}/>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
          <Route path="/allproducts" element={<AllProducts></AllProducts>}></Route>
          <Route path="/*" element={<NoPage></NoPage>}/>
        </Routes>
    </BrowserRouter>
    </State>
  )
}

export default App

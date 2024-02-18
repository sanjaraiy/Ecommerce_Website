import Navbar from '../navbar/NavBar'
import Footer from '../footer/Footer'

function Layout({children}) {
  return (
    
    <div>
        <Navbar></Navbar>
        <div className='content'>
            {children}
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout
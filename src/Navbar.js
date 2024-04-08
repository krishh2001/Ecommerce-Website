import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Home from './Home'
import Jwellery from './Jwellery'
import Electronics from './Electronics'
import Men from './Men'
import Women from './Women'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/Jwellery">Jwellery</NavLink>
            </li>
            <li>
              <NavLink to="/electronics">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/Men">Men Clothes</NavLink>
            </li>
            <li>
              <NavLink to="/Women">Women Clothes</NavLink>
            </li>
          </ul>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Routes><Route path='/' element={<Home></Home>}></Route></Routes>
        <Routes><Route path='/Jwellery' element={<Jwellery></Jwellery>}></Route></Routes>
        <Routes><Route path='/electronics' element={<Electronics></Electronics>}></Route></Routes>
        <Routes><Route path='/Men' element={<Men></Men>}></Route></Routes>
        <Routes><Route path='/Women' element={<Women></Women>}></Route></Routes>
      </div>
    </nav>
  )
}

export default Navbar
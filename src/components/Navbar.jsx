
import { Navbar, Button, Dropdown } from "flowbite-react"
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {HiOutlineShoppingCart } from 'react-icons/hi';
import {TbArmchair} from 'react-icons/tb';
import Cart from "../pages/Cart";
import { useCart } from "react-use-cart";



export default function Flownavbar() {

  
  const {totalItems} = useCart();

  
  {/*function for signin page */}
  let navigate_signup = useNavigate(); 
  const routeChange_signup = () =>{ 
    let path = `/Signin`;
    navigate_signup(path);
  }
  {/*function for login page */}
  let navigate_login = useNavigate(); 
  const routeChange_login = () =>{ 
    let path = `/Login`;
    navigate_login(path);
  }

  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
        className="bg-gray-100 bg-opacity-30 shadow-2xl"
      >
        <Navbar.Brand href="/home">
        {/*using react icons */}
          <TbArmchair size='3rem'></TbArmchair>
          <span className=" font-mono self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          HOME DECOR
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="shadow-2xl bg-opacity-90 px-5 mr-4 bg-slate-900	hover:bg-slate-600" onClick={routeChange_signup}>
            <span>Sign up</span>
          </Button>
          <Button className="shadow-2xl bg-opacity-90 px-5 mr-6 bg-slate-900	hover:bg-slate-600" onClick={routeChange_login}>
            <span>Log in</span>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/navbars"
            active={true}
          >
            <Link to="/home"> Home </Link>
          </Navbar.Link>
          <Navbar.Link href="/Gallery">
            <Link to='/Gallery'>Gallery</Link> 
          </Navbar.Link>
          <Navbar.Link href="/Contact">
            <Link to="/Contact">Contact</Link>
          </Navbar.Link>
          
          <Navbar.Link href="/about">
            <Link to="/about"> About</Link>
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            <Link to="/Cart">
              <div className="flex ">
                <span><HiOutlineShoppingCart size='2rem'></HiOutlineShoppingCart></span><span className=" text-sm  align-text-top text-center mt-0 h-6 w-7 mx-1 p-1 bg-red-400  text-blue-900 rounded-full ">{totalItems}</span>
              </div>
             </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
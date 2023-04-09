
import { Navbar, Button, Dropdown } from "flowbite-react"
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {HiOutlineShoppingCart } from 'react-icons/hi';
import {TbArmchair} from 'react-icons/tb';


export default function Flownavbar() {
  
  {/*function for signin page */}
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Signin`; 
    navigate(path);
  }

  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
        className="bg-gray-100 bg-opacity-30"
      >
        <Navbar.Brand href="/home">
        {/*using react icons */}
          <TbArmchair size='3rem'></TbArmchair>
          <span className="text-5xl self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          HOME DECOR
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="px-5 mr-4 bg-gray-600	background-color: rgb(75 85 99);" onClick={routeChange}>
            <span>Sign up</span>
          </Button>
          <Button className="px-5 mr-6 bg-gray-600	background-color: rgb(75 85 99);">
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
          <Navbar.Link href="/navbars">
            <Dropdown
              label="Products"
              inline={true}
            >
            <Dropdown.Item>
                All
              </Dropdown.Item>
              <Dropdown.Item>
                Beds
              </Dropdown.Item>
              <Dropdown.Item>
                Chairs
              </Dropdown.Item>
              <Dropdown.Item>
                Sofa
              </Dropdown.Item>
              <Dropdown.Item>
                Single Sofa
              </Dropdown.Item>
              <DropdownItem>
              Tables
              </DropdownItem>
              <DropdownItem>
              Lights
              </DropdownItem>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            <Link to="/Contact">Contact</Link>
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            <Link to="/about"> About</Link>
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            <HiOutlineShoppingCart size='2rem'></HiOutlineShoppingCart>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
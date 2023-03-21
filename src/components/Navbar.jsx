
import { Navbar } from "flowbite-react"
import { Button } from "flowbite-react"
import { Link } from "react-router-dom"


export default function Flownavbar(){
    return(
        <>
     <Navbar
  fluid={true}
  rounded={true}
  className="bg-gray-100"
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="./images/logo.jpg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        HOME DECOR
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button className="px-5 mr-4 bg-gray-600	background-color: rgb(75 85 99);">
      <span>Sign in</span>
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
      Products
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      <Link to="/about"> About</Link>
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}
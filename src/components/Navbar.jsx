
import { Navbar } from "flowbite-react"
import { Button } from "flowbite-react"


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
      Furniture Mela
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button >
      <span>Sign in</span>
    </Button>
    <Button>
      <span>Log in</span>
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
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
  </Navbar.Collapse>
</Navbar>
        </>
    )
}
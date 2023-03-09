import { Footer } from "flowbite-react"

export default function Flowfooter(){
    return(
        <>
<Footer container={true} className="mt-96">
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
      <Footer.Brand
        href="https://flowbite.com"
        src="./images/logo.jpg"
        alt="Flowbite Logo"
        name="Furnitur Mela"
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </div>
    <Footer.Divider />
    <Footer.Copyright
      href="#"
      by="Furniture Mela™"
      year={2022}
    />
  </div>
</Footer>
</>
    )
}
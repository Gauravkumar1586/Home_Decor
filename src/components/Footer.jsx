import { Footer } from "flowbite-react";
import {TbArmchair} from 'react-icons/tb';

export default function Flowfooter(){
    return(
        <>
<Footer container={true} className="mt-96 bg-opacity-30">
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
      <TbArmchair size='3rem'></TbArmchair>
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
      by="HOME DECOR™"
      year={2022}
    />
  </div>
</Footer>
</>
    )
}
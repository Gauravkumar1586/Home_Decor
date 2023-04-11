import { Footer } from "flowbite-react";
import {TbArmchair} from 'react-icons/tb';

export default function Flowfooter(){
    return(
        <>
<Footer container={true} className="bg-gray-100 bg-opacity-30 shadow-2xl" >
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
    <div className="flex justify-between sm:flex sm:items-center sm:justify-between">
    <span>
      <TbArmchair size='3rem' color="black"></TbArmchair>
    </span>
    <span className="text-xl font-semibold">
    HOME DECOR
    </span>
    </div>
      <Footer.LinkGroup>
        <Footer.Link href="#" className="text-black">
          About
        </Footer.Link>
        <Footer.Link href="#" className="text-black">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#" className="text-black">
          Licensing
        </Footer.Link>
        <Footer.Link href="#" className="text-black">
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
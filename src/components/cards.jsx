
import { useCart } from 'react-use-cart';
import {BiRupee} from 'react-icons/bi'

export default function Flowcards(props) {

  const {addItem} = useCart();
  
  return (
    <>
    
    <div className=" drop-shadow-xl shadow-indigo-500/50 mt-6 mb-6 transition ease-in-out delay-110 bg-white border-solid  hover:scale-110  hover:border-black duration-170 rounded-lg ">
      <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg " src={props.imgurl} alt="" style={{width:'330px' , height:'300px'}} />
        </a>
        <div className="p-5 ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.desc}</p>
          <span className="flex justify-between">
          <p  className="inline-flex items-center px-3 py-2 text-2xl font-medium text-center text-red-500 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <BiRupee/>{props.price}
          </p>
          <button href="#" className="inline-flex items-center px-3 py-2 text-1xl font-medium text-center text-white bg-slate-600 rounded-lg hover:bg-green-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={()=> addItem(props.item)}>
            Add Cart

          </button>
          </span>
        </div>
      </div>
    </div>

    </>
  )

}
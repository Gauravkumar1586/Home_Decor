import { Card } from "flowbite-react";


export default function Flowcards(props) {
  return (
    <>

    <div className="mt-6 mb-6">
      <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg h-64 " src={props.imgurl} alt="" style={{width:'100%'}} />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.desc}</p>
          <span className="flex justify-between">
          <p  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {props.price}
          </p>
          <button href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add Cart

          </button>
          </span>
        </div>
      </div>
    </div>

    </>
  )

}
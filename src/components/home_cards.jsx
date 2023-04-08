import { Card } from "flowbite-react";


export default function Flowcards(props) {
  return (
    <>
  
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Card  imgSrc={props.imgurl} className="">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {props.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {props.desc}
          </p>
        </Card>
      </div>
      
    </>
  )

}
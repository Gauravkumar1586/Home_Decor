import React, { useState } from 'react';
import Flowcards from '../components/cards';
import data from './data';

import { Card } from 'flowbite-react';

const Gallery = () => {


  const [furniturecategory, setfurniturecategory] = useState(0)


           

  return (
    <>

     <div class="transition ease-in-out delay-150 hover:scale-110  hover:border-black duration-300 rounded-lg flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button type="button" onClick={() => { setfurniturecategory(0) }} class="text-gray-900 hover:text-white border border-blue-600 bg-white hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-slate-900 dark:bg-gray-900 dark:focus:ring-blue-800" >All categories</button>
        <button type="button" onClick={() => { setfurniturecategory(1) }} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800" > Beds</button>
        <button type="button" onClick={() => { setfurniturecategory(2) }} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Chairs</button>
        <button type="button" onClick={() => { setfurniturecategory(3) }} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Sofa Set</button>
        <button type="button" onClick={() => { setfurniturecategory(4) }} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Tables</button>
      </div>
      {furniturecategory == 0 &&
        <div className="flex justify-evenly flex-wrap ">

         {data.productData.map((items,index)=>{
          return (
            <Flowcards  imgurl={items.imgurl}
                        title={items.title}
                        desc={items.desc}
                        price={items.price}
                        item={items}
                        key={index}
            ></Flowcards>
          )
         })}
        
        </div>
      }

      {/*bellow are Beds cards*/}
      {furniturecategory == 1 &&
        <div className="flex justify-evenly flex-wrap ">

         {data.bedsData.map((items,index)=>{
          return (
            <Flowcards imgurl={items.imgurl}
                       title={items.title}
                       desc={items.desc}
                       price={items.price}
                       item={items}
                       key={index}
            ></Flowcards> 
          )
         })}

        </div>}

      {/*bellow are chairs cards*/}
      {furniturecategory == 2 &&
        <div className="flex justify-evenly flex-wrap ">

        {data.chairsData.map((items,index)=>{
          return(
            <Flowcards imgurl={items.imgurl}
                       title={items.title}
                       desc={items.desc}
                       price={items.price}
                       item={items}
                       key={index}
            ></Flowcards> 
            )
          })}
        </div>}

      {/*bellow are sofa set cards*/}
      {furniturecategory == 3 &&
        <div className="flex justify-evenly flex-wrap ">
        {data.sofasData.map((items,index)=>{
          return(
            <Flowcards imgurl={items.imgurl}
                       title={items.title}
                       desc={items.desc}
                       price={items.price}
                       item={items}
                       key={index}
            ></Flowcards>           
          )
        })}
          


        </div>}

      {/*bellow are tables cards*/}
      {furniturecategory == 4 &&
        <div className="flex justify-evenly flex-wrap ">
        
        {data.tablesData.map((items,index)=>{
          return(
            <Flowcards imgurl={items.imgurl}
                       title={items.title}
                       desc={items.desc}
                       price={items.price}
                       item={items}
                       key={index}
            ></Flowcards>           
          )
        })}
         
        </div>} 





    </>
  )

}
export default Gallery
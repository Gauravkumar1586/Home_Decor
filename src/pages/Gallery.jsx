import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Flowcards from '../components/cards';

import { Card } from 'flowbite-react';

const Gallery = () => {
    

    const [furniturecategory,setfurniturecategory]=useState(0)


    return (
        <>

            <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button type="button" onClick={()=>{setfurniturecategory(0)}} class="text-gray-900 hover:text-white border border-blue-600 bg-white hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-slate-900 dark:bg-gray-900 dark:focus:ring-blue-800" >All categories</button>
                <button type="button" onClick={()=>{setfurniturecategory(1)}} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800" > Beds</button>
                <button type="button"onClick={()=>{setfurniturecategory(2)}} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Chairs</button>
                <button type="button"onClick={()=>{setfurniturecategory(3)}} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Sofa Set</button>
                <button type="button"onClick={()=>{setfurniturecategory(4)}} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Tables</button>
            </div>
            {furniturecategory==0 &&
            <div className="flex justify-evenly flex-wrap ">
          <Flowcards
            title=" Beds wiht super Quantity"
            imgurl="./images/beds/b0.jpg"
            desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
            price="₹ 32000"
          ></Flowcards>

          <Flowcards
            title=" Wooden Chairs"
            imgurl="./images/chairs/c1.jpg"
            desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
            price="₹ 32000"
          ></Flowcards>

          <Flowcards
            title="Single Set Sofa"
            imgurl="./images/single_sofas/ss1.jpg"
            desc="  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            price="₹ 32000"
          ></Flowcards>

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s0.jpg"
            desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
            price="₹ 32000"
          ></Flowcards>
                
        <Flowcards
          title="Tables"
          imgurl="./images/tables/t0.jpg"
          desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
          price="₹ 32000"
        ></Flowcards>

        <Flowcards
          title="Tables Lights"
          imgurl="./images/lights/l0.jpg"
          desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
          price="₹ 32000"
        ></Flowcards>

        <Flowcards
            title=" Beds wiht super Quantity"
            imgurl="./images/beds/b0.jpg"
            desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
            price="₹ 32000"
          ></Flowcards>

          <Flowcards
            title=" Wooden Chairs"
            imgurl="./images/chairs/c1.jpg"
            desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
            price="₹ 32000"
          ></Flowcards>

          <Flowcards
            title="Single Set Sofa"
            imgurl="./images/single_sofas/ss1.jpg"
            desc="  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            price="₹ 32000"
          ></Flowcards>

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s0.jpg"
            desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
            price="₹ 32000"
          ></Flowcards>
                
        <Flowcards
          title="Tables"
          imgurl="./images/tables/t0.jpg"
          desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
          price="₹ 32000"
        ></Flowcards>

        <Flowcards
          title="Tables Lights"
          imgurl="./images/lights/l0.jpg"
          desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
          price="₹ 32000"
        ></Flowcards>

        
        </div>}

        {furniturecategory==1 &&
            <div className="flex justify-evenly flex-wrap ">
        
        <Flowcards
          title="Tables Lights"
          imgurl="./images/lights/l0.jpg"
          desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
          price="₹ 32000"
        ></Flowcards>

        
        </div>}


        </>
    )
}

export default Gallery


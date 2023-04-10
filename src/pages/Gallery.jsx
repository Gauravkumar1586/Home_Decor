import React, { useState } from 'react';
import Flowcards from '../components/cards';

import { Card } from 'flowbite-react';

const Gallery = () => {


  const [furniturecategory, setfurniturecategory] = useState(0)

<<<<<<< HEAD
            <div>
                <button type="button" onClick={()=>{setfurniturecategory(0)}} class="text-gray-900 hover:text-white border border-blue-600 bg-white hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-slate-900 dark:bg-gray-900 dark:focus:ring-blue-800" >All categories</button>
                <button type="button" onClick={()=>{setfurniturecategory(1)}} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800" > Beds</button>
                <button type="button" onClick={()=>{setfurniturecategory(2)}} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Chairs</button>
                <button type="button" onClick={()=>{setfurniturecategory(3)}} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Sofa Set</button>
                <button type="button" onClick={()=>{setfurniturecategory(4)}} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Tables</button>

            </div>
            {furniturecategory==0 &&
            <div className="flex justify-evenly flex-wrap ">
=======

  return (
    <>

      <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button type="button" onClick={() => { setfurniturecategory(0) }} class="text-gray-900 hover:text-white border border-blue-600 bg-white hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-slate-900 dark:bg-gray-900 dark:focus:ring-blue-800" >All categories</button>
        <button type="button" onClick={() => { setfurniturecategory(1) }} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800" > Beds</button>
        <button type="button" onClick={() => { setfurniturecategory(2) }} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Chairs</button>
        <button type="button" onClick={() => { setfurniturecategory(3) }} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Sofa Set</button>
        <button type="button" onClick={() => { setfurniturecategory(4) }} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Tables</button>
      </div>
      {furniturecategory == 0 &&
        <div className="flex justify-evenly flex-wrap ">
>>>>>>> aa406a7ca46ece2a87c22088b0b84580ab9e10e1
          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b0.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 32000"
          ></Flowcards>

          <Flowcards
          title="Tables"
          imgurl="./images/tables/t12.jpg"
          desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
          price="₹ 4500"
        ></Flowcards>

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s1.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts. "
            price="₹ 45000"
          ></Flowcards>

          <Flowcards
          title="Tables"
          imgurl="./images/tables/t9.jpg"
          desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
          price="₹ 9800"
        ></Flowcards>

          <Flowcards
            title=" Wooden Chairs"
            imgurl="./images/chairs/c1.jpg"
            desc=" Perfect combination of distinctiveness and versatility with our Accent Trunk made of solid reclaimed wood. "
            price="₹ 5000"
          ></Flowcards>

          <Flowcards
          title="Tables"
          imgurl="./images/tables/t11.jpg"
          desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
          price="₹ 7600"
        ></Flowcards>

          <Flowcards
            title="Single Set Sofa"
            imgurl="./images/single_sofas/ss1.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts."
            price="₹ 8000"
          ></Flowcards>

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s0.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts. "
            price="₹ 35000"
          ></Flowcards>

          

          <Flowcards
            title="Tables"
            imgurl="./images/tables/t0.jpg"
            desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
            price="₹ 12000"
          ></Flowcards>

          
          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s2.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts. "
            price="₹ 85000"
          ></Flowcards>

          <Flowcards
            title="Tables"
            imgurl="./images/tables/t7.jpg"
            desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
            price="₹ 8000"
          ></Flowcards>

          <Flowcards
            title="Tables Lights"
            imgurl="./images/lights/l0.jpg"
            desc="Crafted from steel in a matte black finish, this chandelier features a  silhouette with an open-frame style. "
            price="₹ 4000"
          ></Flowcards>

          <Flowcards
            title="Single Set Sofa"
            imgurl="./images/single_sofas/ss4.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts."
            price="₹ 7000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b1.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 42000"
          ></Flowcards>

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s3.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts. "
            price="₹ 35000"
          ></Flowcards>

          <Flowcards
          title="Tables"
          imgurl="./images/tables/t13.jpg"
          desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
          price="₹ 6800"
        ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b18.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 65000"
          ></Flowcards>

           <Flowcards
            title="Tables"
            imgurl="./images/tables/t5.jpg"
            desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
            price="₹ 6000"
          ></Flowcards>

          <Flowcards
            title=" Wooden Chairs"
            imgurl="./images/chairs/c3.jpg"
            desc=" Perfect combination of distinctiveness and versatility with our Accent Trunk made of solid reclaimed wood. "
            price="₹ 2500"
          ></Flowcards>

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s4.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts. "
            price="₹ 65000"
          ></Flowcards>

          <Flowcards
          title="Tables"
          imgurl="./images/tables/t14.jpg"
          desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
          price="₹ 8800"
        ></Flowcards>

          <Flowcards
            title=" Wooden Chairs"
            imgurl="./images/chairs/c4.jpg"
            desc=" Perfect combination of distinctiveness and versatility with our Accent Trunk made of solid reclaimed wood. "
            price="₹ 8000"
          ></Flowcards>

          <Flowcards
          title="Tables"
          imgurl="./images/tables/t8.jpg"
          desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
          price="₹ 7800"
        ></Flowcards>

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s6.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts. "
            price="₹ 87000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b2.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 55000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b4.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 50000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b5.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 45000"
          ></Flowcards>

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s5.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts. "
            price="₹ 67000"
          ></Flowcards>

          <Flowcards
            title=" Wooden Chairs"
            imgurl="./images/chairs/c5.jpg"
            desc=" Perfect combination of distinctiveness and versatility with our Accent Trunk made of solid reclaimed wood. "
            price="₹ 6500"
          ></Flowcards>

          <Flowcards
          title="Tables"
          imgurl="./images/tables/t10.jpg"
          desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
          price="₹ 5600"
        ></Flowcards>
        </div>
      }

      {/*bellow are Beds cards*/}
      {furniturecategory == 1 &&
        <div className="flex justify-evenly flex-wrap ">

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b0.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 32000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b1.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 42000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b2.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 55000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b4.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 50000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b5.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 45000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b6.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 85000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b7.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 60000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b8.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 95000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b9.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 11000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b10.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 48000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Bedsy"
            imgurl="./images/beds/b11.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 55000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b12.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 75000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b13.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 45000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b14.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 98000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b15.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 35000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b16.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 45055"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b17.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 34000"
          ></Flowcards>

          <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b18.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 65000"
          ></Flowcards>

        </div>}

      {/*bellow are chairs cards*/}
      {furniturecategory == 2 &&
        <div className="flex justify-evenly flex-wrap ">

          <Flowcards
            title=" Wooden Chairs"
            imgurl="./images/chairs/c1.jpg"
            desc=" Perfect combination of distinctiveness and versatility with our Accent Trunk made of solid reclaimed wood. "
            price="₹ 5000"
          ></Flowcards>

          <Flowcards
            title=" Wooden Chairs"
            imgurl="./images/chairs/c2.jpg"
            desc=" Perfect combination of distinctiveness and versatility with our Accent Trunk made of solid reclaimed wood. "
            price="₹ 3000"
          ></Flowcards>

          <Flowcards
            title=" Wooden Chairs"
            imgurl="./images/chairs/c3.jpg"
            desc=" Perfect combination of distinctiveness and versatility with our Accent Trunk made of solid reclaimed wood. "
            price="₹ 2500"
          ></Flowcards>

          <Flowcards
            title=" Wooden Chairs"
            imgurl="./images/chairs/c4.jpg"
            desc=" Perfect combination of distinctiveness and versatility with our Accent Trunk made of solid reclaimed wood. "
            price="₹ 8000"
          ></Flowcards>

          <Flowcards
            title=" Wooden Chairs"
            imgurl="./images/chairs/c5.jpg"
            desc=" Perfect combination of distinctiveness and versatility with our Accent Trunk made of solid reclaimed wood. "
            price="₹ 6500"
          ></Flowcards>

        </div>}

      {/*bellow are sofa set cards*/}
      {furniturecategory == 3 &&
        <div className="flex justify-evenly flex-wrap ">

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s0.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts. "
            price="₹ 35000"
          ></Flowcards>

          <Flowcards
            title="Single Set Sofa"
            imgurl="./images/single_sofas/ss2.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts."
            price="₹ 6000"
          ></Flowcards>

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s1.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts. "
            price="₹ 45000"
          ></Flowcards>

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s2.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts. "
            price="₹ 85000"
          ></Flowcards>

          <Flowcards
            title="Single Set Sofa"
            imgurl="./images/single_sofas/ss4.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts."
            price="₹ 7000"
          ></Flowcards>

          
          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s3.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts. "
            price="₹ 35000"
          ></Flowcards>

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s4.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts. "
            price="₹ 65000"
          ></Flowcards>

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s5.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts. "
            price="₹ 67000"
          ></Flowcards>

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s6.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts. "
            price="₹ 87000"
          ></Flowcards>

          <Flowcards
            title="Single Set Sofa"
            imgurl="./images/single_sofas/ss1.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts."
            price="₹ 8000"
          ></Flowcards>

          <Flowcards
            title="Single Set Sofa"
            imgurl="./images/single_sofas/ss2.jpg"
            desc=" This L-shaped pull-out sleeper sectional is ideal for adding a cozy, casual touch to spaces of all sorts."
            price="₹ 6000"
          ></Flowcards>


        </div>}

      {/*bellow are tables cards*/}
      {furniturecategory == 4 &&
        <div className="flex justify-evenly flex-wrap ">

          <Flowcards
            title="Tables"
            imgurl="./images/tables/t0.jpg"
            desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
            price="₹ 12000"
          ></Flowcards>

          <Flowcards
            title="Tables"
            imgurl="./images/tables/t2.jpg"
            desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
            price="₹ 13000"
          ></Flowcards>

          <Flowcards
            title="Tables"
            imgurl="./images/tables/t3.jpg"
            desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
            price="₹ 17000"
          ></Flowcards>

          <Flowcards
            title="Tables"
            imgurl="./images/tables/t4.jpg"
            desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
            price="₹ 9000"
          ></Flowcards>

          <Flowcards
            title="Tables"
            imgurl="./images/tables/t5.jpg"
            desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
            price="₹ 6000"
          ></Flowcards>

          <Flowcards
            title="Tables"
            imgurl="./images/tables/t6.jpg"
            desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
            price="₹ 13000"
          ></Flowcards>

          <Flowcards
            title="Tables"
            imgurl="./images/tables/t7.jpg"
            desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
            price="₹ 8000"
          ></Flowcards>

          <Flowcards
          title="Tables"
          imgurl="./images/tables/t8.jpg"
          desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
          price="₹ 7800"
        ></Flowcards>

        <Flowcards
          title="Tables"
          imgurl="./images/tables/t9.jpg"
          desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
          price="₹ 9800"
        ></Flowcards>

        <Flowcards
          title="Tables"
          imgurl="./images/tables/t10.jpg"
          desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
          price="₹ 5600"
        ></Flowcards>

        <Flowcards
          title="Tables"
          imgurl="./images/tables/t11.jpg"
          desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
          price="₹ 7600"
        ></Flowcards>

        <Flowcards
          title="Tables"
          imgurl="./images/tables/t12.jpg"
          desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
          price="₹ 4500"
        ></Flowcards>

        <Flowcards
          title="Tables"
          imgurl="./images/tables/t13.jpg"
          desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
          price="₹ 6800"
        ></Flowcards>

        <Flowcards
          title="Tables"
          imgurl="./images/tables/t14.jpg"
          desc=" This coffee table showcases a modern openwork frame with sophisticated dark hues. "
          price="₹ 8800"
        ></Flowcards>

        </div>}





    </>
  )
}

export default Gallery


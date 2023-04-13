import Flowcards from "../components/cards";
import Flowcrousel from "../components/crousel";
import Hero from "../components/Hero";
import data from "./data";



export default function Home() {
  return (
    <>

      <Flowcrousel></Flowcrousel>
      <Hero></Hero>
      <h1 className="text-6xl mt-4 text-center overscroll-auto">
        POPULAR ACROSS SITE
      </h1>

      
        <div className="flex justify-evenly flex-wrap ">

        {data.productData.map((items,index)=>{
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
          
         {/* <Flowcards
            title="Good Quality Beds"
            imgurl="./images/beds/b0.jpg"
            desc="Designed to give you sleep that hits that sweet spot between perfectly cool and incredibly cozy.  "
            price="₹ 32000"
          ></Flowcards>

          <Flowcards
            title=" Wooden Chairs"
            imgurl="./images/chairs/c1.jpg"
            desc=" Perfect combination of distinctiveness and versatility with our Accent Trunk made of solid reclaimed wood. "
            price="₹ 5000"
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
          title="Tables Lights"
          imgurl="./images/lights/l0.jpg"
          desc="Crafted from steel in a matte black finish, this chandelier features a  silhouette with an open-frame style. "
          price="₹ 4000"
  ></Flowcards>*/}
  </div>
      
    </>
  );
}

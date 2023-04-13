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

        {data.homeCardsData.map((items,index)=>{
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
          
         
  </div>
      
    </>
  );
}

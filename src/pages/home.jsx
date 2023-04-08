import Flowcards from "../components/home_cards";
import Flowcrousel from "../components/crousel";

export default function Home() {
  return (
    <>
      <Flowcrousel></Flowcrousel>
      <h1 className="text-6xl mt-4 text-center overscroll-auto">
        POPULAR ACROSS SITE
      </h1>

      <div className="">
        <div className="flex justify-evenly flex-wrap ">
          <Flowcards
            title=" Beds wiht super Quantity"
            imgurl="./images/beds/b0.jpg"
            desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
          ></Flowcards>

          <Flowcards
            title="Best Quantity Wooden Chairs"
            imgurl="./images/chairs/c1.jpg"
            desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
          ></Flowcards>

          <Flowcards
            title="Single Set Sofa"
            imgurl="./images/single_sofas/ss1.jpg"
            desc="  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          ></Flowcards>

          <Flowcards
            title="Big Sofas"
            imgurl="./images/sofas/s0.jpg"
            desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
          ></Flowcards>
        </div>
        <div className="flex justify-evenly flex-wrap ">
        <Flowcards
          title="Tables"
          imgurl="./images/tables/t0.jpg"
          desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
        ></Flowcards>

        <Flowcards
          title="Tables Lights"
          imgurl="./images/lights/l0.jpg"
          desc=" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. "
        ></Flowcards>
        </div>
      </div>
    </>
  );
}

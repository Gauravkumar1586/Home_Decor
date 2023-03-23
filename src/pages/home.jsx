import Flowcards from "../components/home_cards";
import Flowcrousel from "../components/crousel";



export default function Home(){
    return (
        <>
        <Flowcrousel></Flowcrousel>
        <h1 className="text-6xl mt-4 text-center overscroll-auto">PRODUCT TYPES</h1>
        <Flowcards></Flowcards>
       
        </>
    )
}
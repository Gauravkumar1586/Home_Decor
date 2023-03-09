import { Carousel } from "flowbite-react"

export default function Flowcrousel(){
    return(
        <>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={5000}>
    <img
      src="./images/f1.jpg"
      alt="..."
    />
    <img
      src="./images/f2.jpg"
      alt="..."
    />
    <img
      src="./images/f3.jpg"
      alt="..."
    />
    <img
      src="./images/f4.jpg"
      alt="..."
    />
  </Carousel>
</div>
        </>
    )
}
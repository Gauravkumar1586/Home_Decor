import { Card } from "flowbite-react";


export default function Flowcards() {
  return (
    <>
    <div className="flex justify-evenly flex-wrap xl:h-80 2xl:h-96 px-4 py-10">
      {/* 1card */}
      <div className="max-w-sm ">
        <Card imgSrc="./images/beds/b0.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Beds wiht super Quantity
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
      </div>
      {/* 2card */}
      <div className="max-w-sm">
        <Card imgSrc="./images/chairs/c1.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Best Quantity Wooden Chairs
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
      </div>
      {/* 3card */}
      <div className="max-w-sm">
        <Card imgSrc="./images/single_sofas/ss1.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Single Set Sofa
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
      </div>
      {/* 4card */}
      <div className="max-w-sm">
        <Card imgSrc="./images/sofas/s0.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Big Sofas
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
      </div>
      </div> 
    </>
  )

}
import React from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { MdRemoveCircle, MdAddCircle } from "react-icons/md";




const Cart = () => {

  

  let Navigate = useNavigate();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <h1 className="   text-center text-2xl font-bold text-red-800 dark:text-white">
        Your Cart is Empty
      </h1>
    );
  return (
    <section className="py-4 bg-opacity-30">
      <div className="">
        <div className="container-md">
          <div className="flex justify-around">
            <h5 className="text-center text-3xl font-bold text-gray-800 dark:text-white m-4 p-3"style={{border:'double',borderColor:'gray',borderWidth:'thick'}}> Unique Items : ({totalUniqueItems})</h5>
            <h5 className="text-center text-3xl font-bold text-gray-800 dark:text-white m-4 p-3"style={{border:'double',borderColor:'gray',borderWidth:'thick'}}> Total Items : ({totalItems})</h5>
          </div>
          <div className="flex justify-center">
            <div className="flex-row  justify-evenly">
              {items.map((items, index) => {
                return (
      
                  <div key={index}>
                  <hr style={{borderTop:'2px solid gray'}}></hr>
                <div className="flex justify-around drop-shadow-2xl bg-indigo-500 shadow-xl shadow-indigo-500/50 bg-opacity-20"> {/*css for product content */}
                    <img
                      className="mx-10 my-4 rounded-xl"
                      src={items.imgurl}
                      style={{
                        width: "400px",
                        height: "300px",
                        border: "solid",
                        borderColor: "black",
                      }}
                    />
                    

                   <div className="ml-16 mt-28"> {/*css for product informatin */}
                    <p className="ml-4 text-3xl font-bold text-gray-900 dark:text-white mt-1">
                      {items.title}
                    </p>
                    <h1 className="ml-4 text-2xl font-bold text-red-800 dark:text-white ">
                      Price : ₹({items.price})
                    </h1>
                    <p className="ml-4 text-1xl font-bold text-gray-900 dark:text-white mt-1">
                      {items.desc}
                    </p>

                    <span className=" flex justify-items-center">
                      <button
                        className="ml-4 rounded-lg w-8 m-2 font-bold"
                        onClick={() =>
                          updateItemQuantity(items.id, items.quantity - 1)
                        }
                      >
                        <MdRemoveCircle size="2rem"></MdRemoveCircle>
                      </button>
                      <h2 className=" mt-3 mx-4 text-2xl font-bold text-gray-900 dark:text-white">
                        {" "}
                        {items.quantity}
                      </h2>
                      <button
                        className="rounded-lg w-8 font-bold "
                        onClick={() =>
                          updateItemQuantity(items.id, items.quantity + 1)
                        }
                      >
                        <MdAddCircle size="2rem" ></MdAddCircle>
                      </button>
                      <button
                        className=" bg-gray-900 hover:bg-red-800 text-blue-50 rounded-lg m-3 ml-4 mt-2 w-28 h-9"
                        onClick={() => removeItem(items.id)}
                      >
                        Remove
                      </button>
                      </span>
                      </div>
                    </div>
                   
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="grid justify-items-center" style={{border:'solid'}}>
        <h2 className="mt-2 mb-16 text-3xl font-bold text-gray-900 dark:text-white underline">ORDER SUMMARY</h2>
       
        <div className="">
          <h2 className="text-3xl font-bold text-red-800 dark:text-white">
            Total Price : ₹ {cartTotal} 
          </h2>
        </div>
        <div className="col-auto ">
          <button
            className="bg-gray-900 hover:bg-red-800  m-2 text-white rounded-lg w-28 h-10"
            onClick={() => emptyCart()}
          >
            Clear Cart
          </button>
          <button
            className="bg-gray-900 hover:bg-green-500 hover:text-black m-2 text-white rounded-lg w-28 h-10"
            onClick={() => {
              Navigate("/PaymentDetails");
            }}
          >
            Buy Now
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};
export default Cart;

// import React from 'react';
// import styled from 'styled-components';
// import { MdRemoveCircle, MdAddCircle } from 'react-icons/md';
// import { mobile } from '../responsive';
// import { useCart } from 'react-use-cart';
// import { useNavigate } from 'react-router-dom';

// {/*css of cart*/}
// const Container = styled.div``;
// const Wrapper = styled.div`
//     padding: 20px;
// `;
// const Title = styled.h1`
//     font-weight: 300;
//     text-align: center;
// `;
// const Top = styled.div`
//     display:flex;
//     align-item: center ;
//     justify-content: space-between;
//     padding:20px;
// `;

// const TopButton = styled.button`
//     padding:10px;
//     border:solid;
//     font-weight:550;
//     cursor:pointer;
//     border: ${props => props.type === "filled" && "none"};
//     background-color: ${props => props.type === "filled" ? "black" : "transparent"};
//     color: ${props => props.type === "filled" && "white"};
//     box-shadow: 10px 10px 5px #ccc;
// `;

// const TopTexts = styled.div`
// ${mobile({ display: "none" })}

// `;

// const TopText = styled.span`
//     text-decoration:underline;
//     cursor:pointer;
//     margin:0px 10px;
//     box-shadow: 10px 10px 5px #ccc;
// `;

// const Button = styled.div`
//       display:flex;
//       justify-content: space-between;
//       box-shadow: 10px 10px 5px #ccc;
//       ${mobile({ flexDirection: "column" })}
// `;

// const Info = styled.div`
//       flex: 3;

// `;

// const Product = styled.div`
//       display:flex;
//       justify-content:space-between;
//       margin-bottom:60px;
//       ${mobile({ flexDirection: "column" })}

// `;

// const ProductDetail = styled.div`
//       flex: 2;
//       display:flex;
// `;

// const Image = styled.img`
//       width:200px;
//       height:200px;
//       border:2px solid  #fff;
//       -moz-box-shadow: 10px 10px 5px #ccc;
//       -webkit-box-shadow: 10px 10px 5px #ccc;
//       box-shadow: 10px 10px 5px #ccc;
//       -moz-border-radius:25px;
//       -webkit-border-radius:25px;
//       border-radius:10px;
// `;

// const Details = styled.div`
//       padding: 20px;
//       display: flex;
//       flex-direction: column;
//       justfy-content: space-around;
// `;

// const ProductName = styled.span`

// `;

// const ProductId = styled.span`

// `;

// const PriceDetail = styled.div`
//       flex: 1;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
// `;

// const ProductAmountContainer = styled.div`
//       display: flex;
//       align-items:center;
//       margin-bottom:20px;
// `;

// const ProductAmount = styled.div`
//       font-size:24px;
//       margin:5px;
//       ${mobile({ margin: "5px 15px" })}
// `;

// const ProductPrice = styled.div`
//       font-size:30px;
//       fort-weight:200;
//       ${mobile({ marginBottom: "20px" })}
// `;

// const Summary = styled.div`
//       flex: 1;
//       border:0.5px sild lightgray;
//       border-radius: 10px;
//       padding: 20px;
//       height:55vh;
//       border:double;
// `;

// const SummaryTitle = styled.h1`
//     font-weight:500;
// `;

// const SummaryItem = styled.div`
//   margin: 30px 0px ;
//   display:flex;
//   justify-content:space-between;
//   font-weight:${props=>props.type === "total" && "500"};
//   font-size:${props=>props.type === "total" && "24px"};
// `;

// const SummaryItemText = styled.span`

// `;

// const SummaryItemPrice = styled.span`

// `;

// const SummaryButton = styled.button`
//   padding:10px;
//   border:double;
//   background-color:transparent;
//   color:black;
//   font-weight:550;
//   box-shadow: 10px 10px 5px #ccc;
// `;

// const Cart = () => {

//   let Navigate=useNavigate()
//     const {
//         isEmpty,
//         totalUniqueItems,
//         items,
//         totalItems,
//         cartTotal,
//         updateItemQuantity,
//         removeItem,
//         emptyCart,

//     } = useCart();

//   if(isEmpty) return <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white">Your Cart is Empty</h1>
//   return (
//     <>
//       <Container>
//         <Wrapper>

//           <Title>YOUR ITEMS</Title>
//           <Top>

//             <TopButton>CONTINUE SHOPPING</TopButton>
//             <TopTexts>
//               <TopText>Shopping Items({totalUniqueItems})</TopText>
//               <TopText>Your Wishlist({totalItems})</TopText>
//             </TopTexts>
//             <TopButton type='filled'>CHECKOUT NOW</TopButton>
//           </Top>
//           <Button>
//             {/*product information*/}
//             <Info>
//               {/*1 porduct */}
//               <Product >
//                 <ProductDetail  >
//                   <Image src={items.imgurl} />
//                   <Details>
//                     <ProductName><b>Product:</b>{items.title}</ProductName>
//                     <ProductId><b>Id:</b>{items.id}</ProductId>
//                   </Details>
//                 </ProductDetail>
//                 <PriceDetail>
//                   <ProductAmountContainer>
//                     <MdAddCircle size='2rem' onClick={()=>updateItemQuantity(items.id, items.quantity + 1)}></MdAddCircle>
//                     <ProductAmount>{items.quantity}</ProductAmount>
//                     <MdRemoveCircle size='2rem' onClick={()=>updateItemQuantity(items.id, items.quantity - 1)}></MdRemoveCircle>
//                   </ProductAmountContainer>
//                   <ProductPrice>{items.price}</ProductPrice>
//                 </PriceDetail>
//               </Product>
//             </Info>

//             <Summary>

//               <SummaryTitle>ORDER SUMMARY</SummaryTitle>

//                 <SummaryItem>
//                   <SummaryItemText>Subtotal</SummaryItemText>
//                   <SummaryItemPrice>₹ 503400</SummaryItemPrice>
//                 </SummaryItem>

//                 <SummaryItem>
//                   <SummaryItemText>Estimated shipping</SummaryItemText>
//                   <SummaryItemPrice>5:30</SummaryItemPrice>
//                 </SummaryItem>

//                 <SummaryItem>
//                   <SummaryItemText>Shipping Discount</SummaryItemText>
//                   <SummaryItemPrice>₹ -1200</SummaryItemPrice>
//                 </SummaryItem>

//                 <SummaryItem type="total">
//                   <SummaryItemText >₹ {cartTotal}</SummaryItemText>
//                   <SummaryItemPrice>₹ 503400</SummaryItemPrice>
//                 </SummaryItem>

//                 <SummaryButton>CHECKOUT NOW</SummaryButton>
//             </Summary>

//           </Button>
//         </Wrapper>
//       </Container>
//     </>
//   )
// }

// export default Cart

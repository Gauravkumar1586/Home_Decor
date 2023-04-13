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
//                 <ProductDetail key={index} >
//                   <Image src={items.imgurl} />
//                   <Details>
//                     <ProductName><b>Product:</b>({items.title})</ProductName>
//                     <ProductId><b>Id:</b>({items.id})</ProductId>
//                   </Details>
//                 </ProductDetail>
//                 <PriceDetail>
//                   <ProductAmountContainer>
//                     <MdAddCircle size='2rem' onClick={()=>updateItemQuantity(items.id, items.quantity + 1)}></MdAddCircle>
//                     <ProductAmount>({items.quantity})</ProductAmount>
//                     <MdRemoveCircle size='2rem' onClick={()=>updateItemQuantity(items.id, items.quantity - 1)}></MdRemoveCircle>
//                   </ProductAmountContainer>
//                   <ProductPrice>({items.price})</ProductPrice>
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


import React from "react";
import {useCart} from "react-use-cart"
import { useNavigate } from "react-router-dom";


const Cart = () => {
    let Navigate=useNavigate()
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
    if(isEmpty) return <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white">Your Cart is Empty</h1>
    return(
        <section className="py-4 bg-orange-50">
            <div className="row justify-center">
                <div className="container-md">
                    <h5 className="text-2xl font-bold text-gray-900 dark:text-white m-4">Cart : ({totalUniqueItems}) <br/>Total Items : ({totalItems})</h5>
                    <div className="justify-evenly align-middle flex">
                    <div class="ml-4 p-4">
     

                       
                   
                       
                       
                        {items.map((items, index)=>{
                           
                            return(
                                
                         <tr key={index}>
                            
                            
                         
                                <img className="m-5"
                                src={items.img} style={{width:'14rem'}}/>
                          <p className="ml-4 text-1xl font-bold text-gray-900 dark:text-white mt-1">{items.title}</p>   
                          <h1 className="ml-4 text-1xl font-bold text-gray-900 dark:text-white">Price : ({items.price})</h1>                           
                          <h2 className="ml-4 text-1xl font-bold text-gray-900 dark:text-white">Quantity : ({items.quantity})</h2>
                          
                            
                            <button
                         className="ml-4 bg-teal-400 rounded-lg w-8 m-2 font-bold"
                         onClick={()=>updateItemQuantity(items.id, items.quantity - 1)}
                         >-</button>
                        <button 
                        className="bg-teal-400 rounded-lg w-8 font-bold"
                        onClick={()=>updateItemQuantity(items.id, items.quantity + 1)}
                        >+</button>
                        <button 
                        className=" bg-cyan-900 hover:bg-cyan-400 text-blue-50 rounded-lg m-3 ml-1 mt-2 w-20"
                        onClick={()=>removeItem(items.id)}
                        >Remove</button>
                    
                        
                            </tr>)
                              
                        })}
                        
                        </div>
                    </div>
                
                </div>
                <div className="col-auto ms-auto">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Total Price : ₹ {cartTotal}</h2>
                   
                </div>
                <div className="col-auto">
                    <button 
                    className="bg-gray-900 m-5 border:4px text-white rounded-lg w-28"
                    onClick={()=>emptyCart()}
                    >Clear Cart</button>
                    <button className="bg-gray-900  text-white rounded-lg w-28" onClick={()=>{Navigate('/order')}}>Buy Now</button>
                </div>
             
            </div>
        </section>
   
    );
};
export default Cart;
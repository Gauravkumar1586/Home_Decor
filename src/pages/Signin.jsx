import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





export default function Signin() {

  const history=useNavigate();

  const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [conformPassword, setConformPassword] = useState('')
   const [name, setName] = useState('')
   async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:5000/register",{
          email,password,conformPassword,name
        })
        .then(res=>{
          if(res.data=="exist"){
            alert("user already exist")
             
          }
         else if(res.data=="not exist"){
           history("/login",{state:{id:email}})
         }
         })

         .catch(e=>{
          alert("wrong details")
          console.log(e);
         })
    }

    catch(e){
       console.log(e);

    }
   }


 
  return (
    <div className='my-20 mx-12 '>
      {/* This is a React component that renders a sign-in form with an email input, password input,
    remember me checkbox, and submit button. It uses the Flowbite-React library to create the UI
    elements such as Card, Label, TextInput, Checkbox, and Button. The form is wrapped in a Card
    component for styling purposes, and the inputs are wrapped in divs with some classNamees for layout.
  The component exports a default function called Signin. */}
  
      <section className=" dark:bg-gray-900 drop-shadow-2xl bg-indigo-500 shadow-xl shadow-indigo-500/50 bg-opacity-30">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Create your account to Enjoy Shopping </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">HOME DECOR is one of the leading Furniture Store Online located opposit to Idustrial Estate Kollakadavu view Furniture Gallery.</p>
            <a href="/about" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more about our websit
              <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
          <div>
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 bg-opacity-20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Sign up to HOME DECOR
              </h2>
              <form className="mt-8 space-y-6" action="#" >
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                  <input type="text" name="name" id="username" onChange={(e)=> {setName(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email"  id="email" onChange={(e)=> {setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" onChange={(e)=> {setPassword(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="conformPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input type="password" name="conformPassword" id="conformPassword" placeholder="••••••••" onChange={(e)=> {setConformPassword(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                  </div>
                  <a href="#" className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <button type="submit" name="" onClick={submit} className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>

              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

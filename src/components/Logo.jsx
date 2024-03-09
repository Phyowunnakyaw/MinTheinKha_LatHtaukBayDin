import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
         
         <div className=' flex items-center justify-center gap-8 p-8 bg-bg '> 

              <div className=' animate-spin w-32 h-32 '>

                  <img src= { logo } alt="" className=' rounded-full' />

              </div>

              <Link to= '/' className=' text-white text-4xl font-semibold transition delay-1000 animate-app '> Min Thein Kha </Link>

         </div>
  )
}

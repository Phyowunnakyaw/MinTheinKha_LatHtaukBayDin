import React, { useState } from "react";
import Question from "../components/Question";
import SearchInput from "../components/SearchInput";

function Home( { datas } ) {


  return (
    
         <div className=" p-8 bg-bg " > 
           
             <div className=" p-8 px-16 mb-20 max-w-6xl mx-auto rounded-md bg-white">

                 <SearchInput />

                 <Question datas={datas} />

             </div>


         </div>

  )
}

export default Home;

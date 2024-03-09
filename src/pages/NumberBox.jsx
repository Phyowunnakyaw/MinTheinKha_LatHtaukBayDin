import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function NumberBox( { datas } ) {

  const param = useParams();
  const id = param.id
  const [ number, setNumber ] = useState ( [] );
  const [ question, setQuestion ] = useState ( [] );

  const selectedQuestion = datas.questions.find( ( item ) => {
       return item.questionNo == id ;
  } )

  const randomNum = Math.floor((Math.random() * 9) + 1);

  useEffect( () => {
    const num = datas.numberList;
    setNumber( num );
    setQuestion( selectedQuestion.questionName );
  }, [ datas ] )

  return (
         
         <div className=" p-8 py-12 bg-bg  ">

           <div className=" p-8 px-16 max-w-6xl mx-auto space-y-8 rounded-md bg-white">

               <div className=" flex justify-center">

                   <p className=' text-text text-base font-semibold' > { question } </p>

               </div>

               <div className=" w-[300px] mx-auto grid grid-cols-9 gap-[2px] ">

                   { number.map( ( item, index ) => (

                   <div className= " w-8 h-8 flex justify-center items-center bg-main rounded-sm " key={ index } >

                       <Link to={ `/answer/${id}/${randomNum}` } > 
                       
                            <p className=' text-white font-semibold text-sm '> { item } </p>
                        
                       </Link>

                   </div>

                   ) ) }

               </div>

               <div className=" flex justify-center ">

                   <Link to='/' >
               
                        <button className=' p-1 px-4 text-sm font-semibold text-white rounded bg-main' > နောက်သို့ </button>

                   </Link>

               </div>

           </div>

         </div>
  )
}

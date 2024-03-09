import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import img from '../assets/logo.png'

export default function Answer( { datas } ) {

    const param = useParams();
    const quesId = param.id1;
    const numId = param.id2;
    const [ answer, setAnswer ] = useState( [] );

    const result = datas.answers.filter( res => ( res.questionNo == quesId && res.answerNo == numId ) ) 

    useEffect( () => {
        setAnswer( result );
    }, [ datas ] )

  return (
         
         <div className=' h-[550px] p-8 py-12 bg-bg '>

             <div className=" p-8 px-16 py-12 max-w-6xl mx-auto space-y-20 rounded-md bg-white">

                 <div className=" flex justify-center items-center gap-2">

                     <img src={ img } className=' w-12 h-12 rounded-full' />
                     <p className=' text-xl font-bold'>  လက်ထောက်ဗေဒင် </p>

                 </div>

                 <div className="">

                     { answer.map( ans => (

                     <div className=" flex justify-center" >

                         <p className=' text-text text-base font-semibold'> { ans.answerResult } </p>

                     </div>

                     ) ) } 

                 </div>

                 <div className=" flex justify-center ">

                     <Link to='/' >
               
                          <button className=' p-1 px-4 text-sm font-semibold text-white rounded bg-main' > နောက်မေးခွန်းတစ်ခု မေးမယ် </button>

                     </Link>

                 </div>

             </div>

         </div>
  )
}

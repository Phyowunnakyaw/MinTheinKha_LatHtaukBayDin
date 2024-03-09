import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Question ( { datas } ) {

  const [ questions, setQuestions ] = useState( [] );
  useEffect( () => {

     const questionsList = datas.questions;
     setQuestions( questionsList );

  }, [ datas ] )

  return (

          <div className=" py-12 ">

              <div className="">

                  { questions.map ( question => (

                  <div className="flex gap-2 py-3" key={ question.questionNo } >

                      <p> { question.questionNo }. </p>

                      <Link to={ `/numberbox/${ question.questionNo }` } >
                           <p className=' text-text text-base font-semibold hover:text-main'> { question.questionName } </p>
                      </Link>

                  </div>

                  ) ) }

              </div>

          </div>
  
  )
}

export default Question;

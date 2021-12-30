import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import {FaqContainer, FaqSubHeading,FaqSubscription} from './Faq.elements'
function Faq(){
  const [questions,setQuestions] = useState(data)
  return <main>
    <FaqContainer>
      <FaqSubHeading>FAQ'S</FaqSubHeading>
      <FaqSubscription>
        {
          questions.map((question)=>{
            return <SingleQuestion key = {question.id} {...question} />
          })
        }
      </FaqSubscription>
    </FaqContainer>
  </main>
}

export default Faq;
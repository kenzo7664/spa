import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Faq } from "..";
import { FaqSubText,FaqSpacing,FaqFlex } from "./Faq.elements";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article >
      <FaqFlex>
        <FaqSubText>{title}</FaqSubText>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </FaqFlex>
      {showInfo && <FaqSpacing>{info}</FaqSpacing>}
    </article>
  );
};

export default Question;

import { useEffect, useRef, useState } from "react";

function Card({ cardText, cardImage, cardHeading }) {
  const view = useRef(null);
  const cardRef = useRef(null);
  const headRef = useRef(null);
  const [size, setSize] = useState('1.875rem');

  useEffect(() => {
    const cardOn = cardRef.current;
    const hoverText = view.current;
    const headingText = headRef.current;

    if(cardOn && hoverText){
      const handleMouseIn = ()=>{
        hoverText.classList.remove('hidden');
        headingText.style.fontSize=setSize('1.125rem');
        headingText.style.lineHeight='1.75rem';
      }
      const handleMouseOut = ()=>{
        hoverText.classList.add('hidden');
        headingText.style.fontSize=setSize('1.876rem');
        headingText.style.lineHeight='2.25rem';
      }

      cardOn.addEventListener('mouseover', handleMouseIn);
      cardOn.addEventListener('mouseout', handleMouseOut);
    }

  }, []);

  return (
    <>
      <div ref={cardRef} className="bg-gradient-to-b from-[#ffffff] shadow-sm  to-[#00778d] flex-col font-medium text-gray-200 justify-between items-center gap-3 w-64 min-h-96 rounded-md hover:scale-105 hover:shadow-md duration-150">
        <img
          src={cardImage}
          alt="card-image"
          className="h-64 w-64 rounded-t-md"
        />
        <div className="p-3 justify-end">
          <h3 ref={headRef} className="font-bold text3 text-white" style={{ fontSize: size, lineHeight:'2.25rem'}}>{cardHeading}</h3>
          <p ref={view} className="card-para hidden text-wrap">
            {cardText}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;

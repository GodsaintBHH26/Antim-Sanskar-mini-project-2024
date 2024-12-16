function Card({ cardText, cardImage, cardHeading }) {

    const textPara = document.querySelector('.card-para');

    
  return (
    <>
      <div className="bg-gradient-to-b from-[#ffffff] shadow-sm  to-[#00778d] flex-col font-medium text-gray-200 justify-between items-center gap-3 w-64 h-96 rounded-md hover:scale-105 hover:shadow-md duration-150">
        <img src={cardImage} alt="card-image" className="h-64 w-64 rounded-t-md"/>
        <div className="p-3 justify-end">
            <h3 className="font-bold text-lg text-white">{cardHeading}</h3>
            <p className="card-para text-wrap" >{cardText}</p>
        </div>
      </div>
    </>
  );
}

export default Card
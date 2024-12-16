import Card from "../components/card";

function HomeContent(){

    const cardImages = {
        tulsi:'/card-images/tulsi.jpg',
        homa:'/card-images/homa-fire.jpg',
        cremation:'/card-images/cremation.jpg',
    }

    return(
        <>
        
        <div className="items-center justify-center flex gap-5 pt-24">
            <Card cardImage={cardImages.tulsi} cardHeading={'Rituals'} cardText={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, veritatis!'}/>
            <Card cardImage={cardImages.homa} cardHeading={'Pandits'} cardText={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore.'}/>
            <Card cardImage={cardImages.cremation} cardHeading={'Funerals & Cremation centers'} cardText={'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}/>
            
        </div>
        </>
    )
}

export default HomeContent
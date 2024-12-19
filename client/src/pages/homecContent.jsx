import Card from "../components/card";
import FootContact from "../components/footer";
import { Link } from 'react-router-dom';

function HomeContent(){

    const cardImages = {
        tulsi:'/card-images/tulsi.jpg',
        homa:'/card-images/homa-fire.jpg',
        cremation:'/card-images/cremation.jpg',
    }


    return(
        <>
        
        <div className="items-center justify-center flex gap-5 pt-24">
            <Link><Card cardImage={cardImages.tulsi} cardHeading={'Rituals'} cardText={'Learn all the details about the rituals in the funeral process in Hindu culture.'}/></Link>
            <Link><Card cardImage={cardImages.homa} cardHeading={'Pandits'} cardText={'Consult or contact with all the available pandits in your area through our services.'}/></Link>
            <Link><Card cardImage={cardImages.cremation} cardHeading={'Cremation Centers'} cardText={'Get the locations of all the cremation centers in your area.'}/> </Link>     

        </div>
        <FootContact/>
        </>
    )
}

export default HomeContent
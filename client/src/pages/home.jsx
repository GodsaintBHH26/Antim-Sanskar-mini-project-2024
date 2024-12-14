import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import '../home.css'

function Home() {
  return (
    <>
      <Parallax pages={1.9} style={{ top: '0', left: '0'}} className='animation block w-full h-full'>
        <ParallaxLayer offset={0} speed={0.5}> <div className='w-full h-full' id='waterfall'></div> </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}> <div className='h-full flex flex-col justify-center items-center  text-black' > 
          <h1 className='font-bold text-6xl'>Antim-sanskar</h1>
          <img src="/logo.svg" alt=""  className='h-28'/>
           </div> </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8}> <div className='w-full h-full ' id='river-bay'></div> </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.9}> <div className='w-full h-full' id='pandits'></div> </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
        <div className='bg-gradient-to-r from-[#a6aed2] to-[#a2aace] w-full h-screen bg-cover -mt-84.5'>
        </div>  
         </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Home;

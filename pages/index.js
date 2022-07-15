import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import asciiNFT from '../public/asciiNFT.png';
import MintButton from './mint';

const Home = () => {
  return (
    <div className='py-6 justify-center text-center'>
      <Header />
      <h1 className='text-5xl font-bold mt-10'>🚀 HotsThots 🚀</h1>
      <div className='flex justify-center mt-8'>
        <ConnectButton />
      </div>
      <div className='flex justify-center'>
        <div className='mt-6 w-4/5'>
          <Image src={asciiNFT} layout='intrinsic'></Image>
        </div>
      </div>
      <MintButton />
      <div>
        <h2 className='mt-4 text-sm'>
          Once your mint tx confirms, head over to&nbsp;
          <a href='https://opensea.io/collection/hotsthots' className='text-blue-600 underline'>Opensea</a> 
          &nbsp;to view your HotsThots Husky!</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

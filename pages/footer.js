import Image from 'next/image';
import githubLogo from '../public/github-logo.png'
import instagramLogo from '../public/instagram-logo.png'
import twitterLogo from '../public/twitter-logo.png'
import BirbBanner from '../public/birb-banner.jpg';

export default function Footer() {
    return (
      <footer className='mt-10 p-5'>
        <h2 className='text-xl font-bold'>Questions?</h2>
        <h2 className='text-l font-bold mt-2'>Try my&nbsp;
          <a
            href='https://huskycoin.vercel.app'
            target='_blank'
            className='underline text-blue-600'
          >
            HuskyCoin tutorial
          </a> or contact me:
        </h2>
        <div className='flex justify-center mt-2'>
          <div className='p-4'>
            <a 
              href='https://github.com/robriks/HuskyCoin'>
              <Image 
                src={githubLogo}
              />
            </a>
          </div>
          <div className='p-4'>
            <a
              href='https://twitter.com/marsterlund'>
              <Image 
                src={twitterLogo} 
              />
            </a>
          </div>
          <div className='p-4'>
            <a
              href='https://instagram.com/marsterlund'>
              <Image
                src={instagramLogo} 
              />
            </a>
          </div>
        </div>
        <div className='flex justify-center '>
          <div className='w-1/3'>
            <a href='https://huskycoin.vercel.app'>
              <Image src={BirbBanner} className='rounded-full'></Image>
            </a>
          </div>
        </div>
      </footer>
    );
  };
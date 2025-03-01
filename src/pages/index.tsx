"use-client"
import Image from 'next/image'
//components
import Layout from '../layout/'
import WeCreatedSlider from '../components/weCreated'
import Reviews from '../components/reviews';
import LandingDemoSlider from '@/components/landingdemoslider';

export default function Home() {

  return (
    <Layout
      title="Top Web Design near you & Development |Texsas Web Solutions"
      description='Web Solutions offers the best web design and development service. We create custom, cutting-edge websites for small businesses to boost their online presence and drive results.'
      keywordContent='web design, web development, custom websites, small business web design,Web solutions, professional web services' >

      <div className='bg-[#032127]'>
        <div className='px-4 max-w-screen-xl mx-auto pt-28 flex items-start'>
          <div className='md:w-[50%] w-full'>
            <span className='font-Font1 text-white px-3 py-1 rounded-2xl border-x-1 border-y-2 text-sm border-[rgba(126,214,223,.25)] bg-[rgba(126,214,233,.15)] animate__animated animate__fadeInDown'>Custom Development Solutions</span>
            <h1 className='font-Font1 my-6 text-white md:text-4xl text-2xl w-full max-w-[1200px] mx-auto animate__animated animate__fadeInDown tracking-wide leading-tight'>
              Be Visible in the Digital World with a Powerful Website: From Small Business to the Top!
            </h1>
            <p className='text-white font-sans text-sm md:text-xl max-w-[1200px] mx-auto opacity-95 animate__animated animate__fadeInUp leading-relaxed mb-8'>
              We take your brand to the next level with custom-designed websites, SEO optimization and sustainable digital strategies. Startups, those aiming for growth or those who want to maintain their leadership: The right solution for you is here!
            </p>
          </div>
          <div className='md:w-[50%] hidden md:block right-0 absolute mt-0 -z-0'>
            <LandingDemoSlider />
          </div>
        </div>
        <div className='md:mt-16 w-[100%] mx-auto md:w-full h-[150px] md:h-[530px] flex justify-center relative animate__animated animate__fadeInUp'>
          <Image layout='fill' objectFit="contain" className='z-20 mt-[50px] md:mt-0' quality={100} src='./images/landingpagegraph.svg' alt='web design agency landingpage' />
          <div className="absolute -bottom-24 mb-2 left-0 w-full h-1/2 z-0 bg-white"></div>
          <div className="absolute -bottom-24 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white z-20"></div>
        </div>

      </div>
      <div className='relative w-full max-w-screen-2xl mx-auto overflow-hidden my-24 '>
        <WeCreatedSlider />
      </div>
      <div className='w-full max-w-screen-xl mx-auto my-24 px-2'>
        <div className='mb-8'>
          <h1 className='text-black text-center text-3xl md:text-6xl'>Why Choose Us?</h1>
          <p className='text-center mt-4 font-semibold font-sans text-sm md:text-base text-gray-500'>Empowering Your Business with the Best Design, Development, and SEO Services to Dominate the Digital World. </p>
        </div>
        <div className='flex flex-col gap-8'>
          <div className='flex md:flex-row  gap-4 md:gap-0 flex-col-reverse p-6 md:p-10 md:pb-0 md:pr-0 bg-cyan-50 rounded-2xl'>
            <div className='w-full max-w-[100%] md:max-w-[50%]'>
              <h2 className='text-black font-semibold font-Font1 text-xl md:text-3xl mb-3'>Stand Out with Optimized Keywords</h2>
              <p className='text-black opacity-80 text-sm md:text-base'>We craft the right strategies to put you ahead of your competitors. Let us harness the power of keywords to make your brand shine in the digital world!</p>
            </div>
            <div className='w-full  overflow-hidden'>
              <div className='w-full aspect-video md:rounded-tl-2xl float-none md:mx-0 mx-auto md:float-end shadow-2xl relative'>
                <Image
                  src="/images/grap-1.png"
                  alt=''
                  fill
                  className=''
                />
              </div>
            </div>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
            <div className='flex flex-col gap-6 p-10  bg-cyan-100 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>100% Secure</h1>
                <h1 className='text-black font-Font1 text-xl' >Secure and Reliable Static Website</h1>
                <p className='text-black text-sm my-2'>As a static HTML and CSS-based website, our platform offers unparalleled security. With no dynamic components or server-side logic, there are virtually no attack vectors for potential hackers to exploit. Our sites are inherently secure, ensuring your data and user experience remain protected at all times.</p>
              </div>
            </div>
            <div className='flex flex-col gap-6 p-10 bg-green-200 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>Custom Designed</h1>
                <h1 className='text-black font-Font1 text-xl' >Custom Designed for Your Needs</h1>
                <p className='text-black text-sm my-2'>Our in-house design team crafts custom solutions tailored to your requirements. With their expertise, we can create any design you envision, ensuring a seamless and visually appealing online presence.</p>
              </div>

            </div>

            <div className='flex flex-col gap-6 p-10 bg-green-200 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>100 PageSpeed Scores</h1>
                <h1 className='text-black font-Font1 text-xl' >Blazing Fast 100/100 PageSpeed Scores</h1>
                <p className='text-black text-sm my-2'>Our sites are built with optimal performance in mind, achieving perfect 100/100 PageSpeed scores from Google. By minimizing bloat and designing with purpose, we deliver lightning-fast loading times that delight your users.</p>
              </div>

            </div>

            <div className='flex flex-col gap-6 p-10 bg-teal-200 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>Money Back Guarantee</h1>
                <h1 className='text-black font-Font1 text-xl' >Money-Back Guarantee: Satisfaction Assured</h1>
                <p className='text-black text-sm my-2'>We stand by our work. If we cannot design something to your liking, we offer a full money-back guarantee and cancel the contract. Your satisfaction is our top priority.</p>
              </div>

            </div>
            <div className='flex flex-col gap-6 p-10 bg-teal-200 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>Unmatched Support</h1>
                <h1 className='text-black font-Font1 text-xl' >Unmatched Support: Always Available</h1>
                <p className='text-black text-sm my-2'>When you call our company, you will speak directly with me, the owner and developer. No phone trees or robots - just personalized assistance whenever you need it.</p>
              </div>

            </div>
            <div className='flex flex-col gap-6 p-10 bg-green-200 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>We Know SEO</h1>
                <h1 className='text-black font-Font1 text-xl' >Proven SEO Expertise</h1>
                <p className='text-black text-sm my-2'>We clearly explain SEO principles and our strategies to improve your rankings. No gimmicks - just transparent, effective SEO solutions.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </Layout >
  )
}
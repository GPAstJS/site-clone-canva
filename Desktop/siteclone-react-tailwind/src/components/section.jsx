import FlagImg from '../assets/brazil-flag-img.avif'


export default function Section() {

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
 
    return(

        <div className='flex flex-col justify-center items-center 3xl:w-full sm:m-10 sm:w-[40rem]'>

            <div className='flex flex-col items-center justify-center 3xl:w-[68.75rem] sm:w-[40rem] h-[18.75rem] '>

                <p className='3xl:w-full  font-roboto ' >Início → Aprender → Design → 10 sites brasileiros de design para seguir</p>
                <h1 className='3xl:text-5xl sm:text-4xl 3xl:text-left sm:text-center font-bold font-roboto mt-5 sm:w-[40rem] 3xl:w-[68.75rem]'>10 sites brasileiros de design para seguir</h1>
                
            </div>

            <div className='
            w-full h-[50rem]' style={{
                backgroundImage: `url(${FlagImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }}>
            </div>


        </div>
    )
}
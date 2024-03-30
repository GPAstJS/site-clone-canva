import imageCTA from "../assets/cta-img.png";

export default function CTA() {
  return (

    <div className="w-full flex flex-col items-center justify-center ">


    <div className="w-full  flex flex-col items-center justify-center relative 3xl:m-20 sm:mt-[5rem] sm:p-10">
      <img className="z-0 xrelative rounded-xl" src={imageCTA} alt="CTA" />

      <h4 className="absolute text-lg 3xl:text-2xl 3xl:top-[10rem] sm:text-sm z-[1] sm:top-[4rem] w-[37.5] text-center font-roboto ">
        Dê vida às suas ideias em questão de minutos.
      </h4>
      <p className="absolute z-[1] sm:top-[5.5rem] 3xl:text-2xl 3xl:top-[15rem] text-center  mt-2 sm:text-sm  font-roboto ">Expresse-se melhor com o programa de design mais fácil do mundo.</p>

      <button className="absolute bg-white 3xl:text-xl 3xl:top-[22rem] sm:text-sm text-black 3xl:font-bold py-2 px-8 rounded mr-5 z-[1] sm:top-[8.5rem] font-roboto ">
        Crie um design
      </button>
    </div>
    </div>
  );
}

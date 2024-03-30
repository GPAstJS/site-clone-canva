import Article1Img from "../assets/article1.avif";
import Article2Img from "../assets/article2.avif";
import Article3Img from "../assets/article3.avif";
import Article4Img from "../assets/article4.avif";
    

export default function Section2() {
  return (
    <div className="flex 3xl:flex-row sm:flex-col 3xl:items-center 3xl:justify-center 3xl:w-full sm:w-[40rem]">
      <div className="flex flex-col 3xl:w-[80rem] sm:w-[40rem] sm:ml-[2.5rem]">
        <h3 className="text-3xl sm:text-xl font-roboto ">Artigos relacionados</h3>

        <div className="3xl:flex 3xl:flex-row sm:grid sm:grid-cols-2 justify-between mt-5 ">

        <div className="flex flex-col sm:w-[15rem] sm:mb-[3rem]">
            <div className="w-[18.75rem] sm:w-[15rem] ">
              <img className="rounded-xl" src={Article1Img} alt="Article I" />
            </div>
            
            <p className=" font-roboto mt-2 ">DESIGN</p>

            <p className="w-[18.75rem]  sm:w-[15rem] font-roboto mt-2 ">
              Como fazer um cartão de Dia das Mães personalizado
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-[18.75rem] sm:w-[15rem]">
              <img className="rounded-xl" src={Article2Img} alt="Article 2" />
            </div>

            <p className=" font-roboto mt-2">DESIGN</p>

            <p className="w-[18.75rem]  sm:w-[15rem] font-roboto mt-2">
              Como fazer capa para destaque do Instagram
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-[18.75rem] sm:w-[15rem]">
              <img className="rounded-xl" src={Article3Img} alt="Article 3" />
            </div>

            <p className=" font-roboto mt-2 ">DESIGN</p>

            <p className="w-[18.75rem] sm:w-[15rem]  font-roboto mt-2 ">
              Como fazer um mapa mental online no Canva: passo a passo
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-[18.75rem] sm:w-[15rem]">
              <img className="rounded-xl" src={Article4Img} alt="Article 4" />
            </div>

            <p className=" font-roboto mt-2 ">DESIGN</p>

            <p className="w-[18.75rem] sm:w-[15rem] mt-2 font-roboto">
              Cores para sites: inspire-se nas paletas utilizadas em 50 páginas diferentes
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

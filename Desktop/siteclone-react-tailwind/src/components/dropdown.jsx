import DropDownHandler from "./DropDownHandler";
import HighlightThumb1 from "../assets/highlight-1.webp"
import HighlightThumb2 from '../assets/highlight-2.webp'
import EducationThumb1 from "../assets/education-1.webp";
import EducationThumb2 from "../assets/education-2.webp";
import EducationThumb3 from "../assets/education-3.webp";
import EducationThumb4 from "../assets/education-4.webp";
import EducationThumb5 from "../assets/education-6.webp";
import EducationThumb6 from "../assets/education-5.webp";
import EducationThumb7 from "../assets/education-7.webp";
import EnterpriseThumb1 from '../assets/enterpriseThumb1.webp'
import EnterpriseThumb2 from '../assets/enterpriseThumb2.webp'
import PlansThumb1 from "../assets/plansThumb-1.webp";
import PlansThumb2 from "../assets/plansThumb-2.webp";
import PlansThumb3 from "../assets/plansThumb-3.webp";
import PlansThumb4 from "../assets/plansThumb-4.webp";
import PlansThumb5 from "../assets/plansThumb-5.webp";
import LearnThumb1 from '../assets/learn-1.webp'
import LearnThumb2 from '../assets/learn-2.webp'
import LearnThumb3 from '../assets/learn-3.webp'
import LearnThumb4 from '../assets/learn-4.webp'
import LearnThumb5 from '../assets/learn-5.webp'
import LearnThumb6 from '../assets/learn-6.webp'

export default function Dropdown() {
  return (
    <div className="3xl:w-[55rem] sm:w-40 flex 3xl:flex-row sm:flex-col  sm:justify-between sm:items-start 3xl:items-center 3xl:gap-5 sm:gap-0">
      <DropDownHandler innerText="Destaque">
        <div className="h-[21.875rem]  mt-5 bg-white 3xl:w-full sm:w-40 shadow-2xl flex flex-row">
          <div className="flex flex-row p-2 items-start justify-start text-left">
            <div className="flex flex-col justify-between mr-12">
              <h2 className="text-lg font-ptsans font-bold white-space-nowrap w-40">
                Documentos visuais
              </h2>
              <p className="text-sm mt-3 mb-1">Kit de Criação Visual</p>
              <p className="text-sm mt-3 mb-1">Docs</p>
              <p className="text-sm mt-3 mb-1">Apresentações</p>
              <p className="text-sm mt-3 mb-1">Quadros brancos</p>
              <p className="text-sm mt-3 mb-1">Editor de PDF</p>
              <p className="text-sm mt-3 mb-1">Gráficos e ilustrações</p>
            </div>

            <div className="flex flex-col mr-12">
              <h2 className="text-lg font-ptsans font-bold white-space-nowrap w-40">
                Fotos e vídeos
              </h2>
              <p className="text-sm mt-3 mb-1">Editor de Vídeos</p>
              <p className="text-sm mt-3 mb-1">Editor de Vídeos para YouTube</p>
              <p className="text-sm mt-3 mb-1">Editor de Fotos</p>
              <p className="text-sm mt-3 mb-1">Montagem de Fotos</p>
            </div>

            <div className="flex flex-col mr-12">
              <h2 className="w-[7.5rem]  text-lg font-ptsans font-bold white-space-nowrap">
                Canva Print
              </h2>
              <p className="text-sm mt-3 mb-1">Cartões de visita</p>
              <p className="text-sm mt-3 mb-1">Cartões</p>
              <p className="text-sm mt-3 mb-1">Convites</p>
              <p className="text-sm mt-3 mb-1">Canecas</p>
              <p className="text-sm mt-3 mb-1">Calendários</p>
              <p className="text-sm mt-3 mb-1">Etiquetas</p>
            </div>

            <div className="flex flex-col mr-12">
              <h2 className="text-lg font-ptsans font-bold white-space-nowrap">
                Marketing
              </h2>
              <p className="text-sm mt-3 mb-1">Logotipos</p>
              <p className="text-sm mt-3 mb-1">Cartazes</p>
              <p className="text-sm mt-3 mb-1">Flyers</p>
              <p className="text-sm mt-3 mb-1">Folders</p>
              <p className="text-sm mt-3 mb-1">Construtores de sites</p>
              <p className="text-sm mt-3 mb-1">Gerador de QR code</p>
            </div>
          </div>

          <div className="mr-5">
            <div className="flex flex-col text-left p-5">
              <img
                className="h-44 w-64 rounded-xl"
                src={HighlightThumb1}
                alt="Highlight Thumb 1"
              />

              <h2 className="text-lg font-ptsans font-bold white-space-nowrap mt-2 w-56">
                Explore os modelos do Canva
              </h2>

              <p className=" mt-2 text-sm opacity-75 w-56">
                Escolha a partir de milhares de modelos gŕatis.
              </p>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col text-left p-5">
              <img
                className="h-44 w-64 rounded-xl "
                src={HighlightThumb2}
                alt="Highlight Thumb 2"
              />

              <h2 className="mt-2 text-lg font-ptsans font-bold white-space-nowrap w-56">
                Estúdio Mágico
              </h2>

              <p className=" mt-2 text-sm opacity-75 w-56">
                Todo poder de uma IA, em um só lugar.
              </p>
            </div>
          </div>
        </div>
      </DropDownHandler>
      <DropDownHandler innerText="Empresarial">
        <div className="flex flex-row h-[23.438rem] mt-5 bg-white rounded-lg right-[10.625rem] 3xl:w-full sm:w-40 absolute">
          <div className="flex flex-row p-5 gap-5 items-start justify-start text-left ">
            <div className="flex flex-col justify-between mr-12">
              <h2 className="text-lg font-ptsans font-bold white-space-nowrap">
                Canva para negócios
              </h2>
              <p className="text-sm mt-3 mb-1">Criação de conteúdo</p>
              <p className="text-sm mt-3 mb-1">Comunicação visual</p>
              <p className="text-sm mt-3 mb-1">Gestão de marca</p>
              <p className="text-sm mt-3 mb-1">Colaboração em equipe</p>
              <p className="text-sm mt-3 mb-1">Planeje e agende conteúdo</p>
              <p className="text-sm mt-3 mb-1">
                Gerenciamento de ativos digitais
              </p>
              <p className="text-sm mt-3 mb-1">Brainstorms e workshops</p>
              <p className="text-sm mt-3 mb-1">Modelos da equipe com marca</p>
              <p className="text-sm mt-3 mb-1">
                Produtividade e fluxos de trabalho
              </p>
            </div>

            <div className="flex flex-col justify-between mr-12">
              <h2 className="text-lg font-ptsans font-bold white-space-nowrap">
                Soluções
              </h2>
              <p className="text-sm mt-3 mb-1">Marketing</p>
              <p className="text-sm mt-3 mb-1">Criativos</p>
              <p className="text-sm mt-3 mb-1">Agências</p>
              <p className="text-sm mt-3 mb-1">Vendas</p>
              <p className="text-sm mt-3 mb-1">Comunicações</p>
              <p className="text-sm mt-3 mb-1">Mídias e publicações</p>
              <p className="text-sm mt-3 mb-1">Startup</p>
              <p className="text-sm mt-3 mb-1">Imóveis</p>
            </div>

            <div className="flex flex-col mr-12">
              <h2 className="text-lg font-ptsans font-bold white-space-nowrap">
                Recursos
              </h2>
              <p className="text-sm mt-3 mb-1">Recursos para empresas</p>
              <p className="text-sm mt-3 mb-1">Casos de sucesso</p>
              <p className="text-sm mt-3 mb-1">Recursos</p>
              <p className="text-sm mt-3 mb-1">Integrações e apps</p>
              <p className="text-sm mt-3 mb-1">Fale com a equipe de vendas</p>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-row items-center justify-center">
              <img
                className="w-16 h-16 rounded-xl"
                src={EnterpriseThumb1}
                alt="Enterprise Thumb  1"
              />

              <div className="ml-5 justify-start items-start text-left">
                <h2 className=" m-0 text-lg font-ptsans font-bold white-space-nowrap w-[10.625rem]">
                  Kit de Criação Visual
                </h2>

                <p className="text-sm mt-1 mb-1 opacity-75 w-52">
                  Reinvente sua forma de trabalhar.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-2">
              <img
                className="w-16 h-16 rounded-xl"
                src={EnterpriseThumb2}
                alt="Enterprise Thumb 2"
              />

              <div className="ml-5 justify-start items-start text-left">
                <h2 className=" m-0 text-lg font-ptsans font-bold white-space-nowrap w-[10.625rem]">
                  Canva para Equipes
                </h2>

                <p className="text-sm mt-1 mb-1 opacity-75 w-52">
                  Para equipes de todos os tamanhos que querem criar em
                  conjunto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DropDownHandler>
      <DropDownHandler innerText="Educação">
        <div className="flex flex-row h-[23.438rem] mt-5 bg-white shadow-xl  right-[21.25rem] w-full absolute">
          <div className="flex flex-row">
            <div className="flex flex-col items-center justify-between mt-8 ml-5">
              <div className="flex flex-row items-center">
                <img
                  className="w-[4rem] rounded-xl"
                  src={EducationThumb1}
                  alt="Thumb 1"
                />

                <div className="ml-5 justify-start items-start text-left">
                  <h2 className=" m-0 text-lg font-ptsans font-bold white-space-nowrap">
                    Professores e escolas
                  </h2>

                  <p className="text-sm mt-1 mb-1 opacity-75">
                    Crie e colabore em sala de aula
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center mt-5">
                <img
                  className="w-16 h-16 rounded-xl"
                  src={EducationThumb2}
                  alt="Thumb 2"
                />

                <div className="ml-5 justify-start items-center text-left">
                  <h2 className=" m-0 text-lg font-ptsans font-bold white-space-nowrap">
                    Estudantes
                  </h2>

                  <p className="text-sm mt-1 mb-1 opacity-75 w-[13.625rem]">
                    Designs e documentos para impulsionar o aprendizado
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center mb-5">
                <img
                  className="w-16 h-16 rounded-xl"
                  src={EducationThumb3}
                  alt="Thumb 3"
                />

                <div className="ml-5 justify-start items-start text-left">
                  <h2 className=" m-0 text-lg font-ptsans font-bold white-space-nowrap w-[10.625rem]">
                    Recursos gratis para professores
                  </h2>

                  <p className="text-sm mt-1 mb-1 opacity-75 w-[13.625rem]">
                    Tutoriais, cursos, eventos virtuais e mais, só para
                    educadores.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-12 ml-10 gap-2">
              <div className="flex flex-row items-center">
                <img
                  className="w-16 h-16 rounded-xl"
                  src={EducationThumb4}
                  alt="Thumb 4"
                />

                <div className="ml-5 justify-start items-start text-left">
                  <h2 className=" m-0 text-lg font-ptsans font-bold white-space-nowrap w-[10.625rem]">
                    Integrações com LMS
                  </h2>

                  <p className="text-sm mt-1 mb-1 opacity-75 w-60">
                    Integre o Canva ao seu sistema de gestão de aprendizagem
                    {"(LMS)"}.
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center">
                <img
                  className="w-16 h-16 rounded-xl"
                  src={EducationThumb5}
                  alt="Thumb 5"
                />

                <div className="ml-5 justify-start items-start text-left">
                  <h2 className=" m-0 text-lg font-ptsans font-bold white-space-nowrap w-[10.625rem]">
                    Casos de sucesso
                  </h2>

                  <p className="text-sm mt-1 mb-1 opacity-75 w-60">
                    Veja como outras pessoas trabalham com aprendizagem criativa
                    e colaborativa.
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center">
                <img
                  className="w-16 h-16 rounded-xl"
                  src={EducationThumb6}
                  alt="Thumb 6"
                />

                <div className="ml-5 justify-start items-start text-left">
                  <h2 className=" m-0 text-lg font-ptsans font-bold white-space-nowrap w-[10.625rem]">
                    Ensino Superior
                  </h2>

                  <p className="text-sm mt-1 mb-1 opacity-75 w-60">
                    Inspire as futuras gerações com o poder do design.\
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-16">
            <div className="flex flex-col text-left p-5">
              <img
                className="w-[16.563rem] w-[11.813rem] rounded-xl "
                src={EducationThumb7}
                alt="Thumb 7"
              />

              <h2 className="text-lg font-ptsans font-bold white-space-nowrap w-56"></h2>

              <p className="text-sm opacity-75 w-56">
                Crie e publique seu próprio conteúdo no Canva e fature de acordo
                com o uso.
              </p>
            </div>
          </div>
        </div>
      </DropDownHandler>
      <DropDownHandler innerText="Planos e preços">
        <div className="h-[23.438rem] mt-5 bg-white  right-[32.438rem] w-full absolute flex flex-row shadow-xl">
          <div className="flex flex-row">
            <div className="">
              <div className="flex flex-col text-left p-5">
                <img
                  className="h-44 w-64 rounded-xl "
                  src={PlansThumb1}
                  alt="Plans Thumb 1"
                />

                <h2 className="text-lg font-ptsans font-bold white-space-nowrap w-56">
                  Grátis
                </h2>

                <p className="text-sm opacity-75 w-56">
                  Para qualquer pessoa que queira criar designs, por conta
                  própria ou em equipe. É grátis para sempre.
                </p>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col text-left p-5">
                <img
                  className="h-44 w-64 rounded-xl "
                  src={PlansThumb2}
                  alt="Plans Thumb 2"
                />

                <h2 className="text-lg font-ptsans font-bold white-space-nowrap w-56">
                  Pro
                </h2>

                <p className="text-sm opacity-75 w-56">
                  Para pessoas que querem acesso ilimitado a conteúdo e
                  ferramentas premium.
                </p>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col text-left p-5">
                <img
                  className="h-44 w-64 rounded-xl "
                  src={PlansThumb3}
                  alt="Plans Thumb 3"
                />

                <h2 className="text-lg font-ptsans font-bold white-space-nowrap w-56">
                  Equipes
                </h2>

                <p className="text-sm opacity-75 w-56">
                  Para equipes de todos os tamanhos que querem criar em conjunto
                  com ferramentas premium de gestão de marca.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items center ml-3 mt-1">
            <div className="flex flex-row items-center justify-center">
              <img
                className="w-16 h-16 rounded-xl"
                src={PlansThumb4}
                alt="Plans Thumb 4"
              />

              <div className="ml-5 justify-start items-start text-left">
                <h2 className=" m-0 text-lg font-ptsans font-bold white-space-nowrap w-[10.625rem]">
                  Educação
                </h2>

                <p className="text-sm mt-1 mb-1 opacity-75 w-60">
                  Uma ferramenta poderosa e grátis para salas de aula, redes
                  escolares e estudantes.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center">
              <img
                className="w-16 h-16 rounded-xl"
                src={PlansThumb5}
                alt="Plans Thumb 5"
              />

              <div className="ml-5 justify-start items-start text-left">
                <h2 className=" m-0 text-lg font-ptsans font-bold white-space-nowrap w-[10.625rem]">
                  ONGs
                </h2>

                <p className="text-sm mt-1 mb-1 opacity-75 w-60">
                  O Canva Pro é gratis para ONGs registradas. Registre-se agora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DropDownHandler>
      <DropDownHandler innerText="Aprenda">
        <div className="flex flex-row h-[23.438rem] mt-5 bg-white right-[42.5rem] w-full absolute rounded-lg  shadow-xl ml-5">
          <div className="flex flex-row mt-5 ml-5 w-[22.5rem]">
            <div className="flex flex-col">
              <div className="flex flex-col items-start justify-start border-e">
                <img
                  className="w-[10rem] h-[6rem] rounded-lg"
                  src={LearnThumb1}
                  alt="Learn Thumb 1"
                />

                <h2 className="text-lg font-ptsans font-bold white-space-nowrap w-[11.25rem] text-left">
                  Crie designs de destaque
                </h2>

                <p className=" mt-2 text-sm opacity-75 w-56 text-left">
                  Logos e logotipos
                </p>

                <p className=" mt-2 text-sm opacity-75 w-56 text-left">
                  Panfletos
                </p>

                <p className=" mt-2 text-sm opacity-75 w-56 text-left ">
                  Banners
                </p>

                <p className=" mt-2 text-sm opacity-75 w-56 text-left">
                  Montagens de fotos
                </p>

                <p className=" mt-2 text-sm opacity-75 w-56 text-left">
                  Cartazes
                </p>

                <p className=" mt-2 text-sm opacity-75 w-56 text-left">
                  Currículos
                </p>
              </div>
            </div>

            <div className="pl-10">
              <div className="flex flex-row items-center mt-5">
                <img
                  className="w-16 h-16 rounded-xl"
                  src={LearnThumb2}
                  alt="Learn Thumb 2"
                />

                <div className="ml-5 justify-start items-center text-left">
                  <h2 className=" m-0 text-lg font-ptsans font-bold white-space-nowrap">
                    Blog do Canva
                  </h2>

                  <p className="text-sm mt-1 mb-1 opacity-75 w-[13.625rem]">
                    Explore artigos e materiais.
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center mt-5">
                <img
                  className="w-16 h-16 rounded-xl"
                  src={LearnThumb3}
                  alt="Learn Thumb 3"
                />

                <div className="ml-5 justify-start items-center text-left">
                  <h2 className=" m-0 text-lg font-ptsans font-bold white-space-nowrap">
                    Estudantes
                  </h2>

                  <p className="text-sm mt-1 mb-1 opacity-75 w-[13.625rem]">
                    Designs e documentos para impulsionar o aprendizado
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center mt-5">
                <img
                  className="w-16 h-16 rounded-xl"
                  src={LearnThumb4}
                  alt="Learn Thumb 4"
                />

                <div className="ml-5 justify-start items-center text-left">
                  <h2 className=" m-0 text-lg font-ptsans font-bold white-space-nowrap">
                    Estudantes
                  </h2>

                  <p className="text-sm mt-1 mb-1 opacity-75 w-[13.625rem]">
                    Designs e documentos para impulsionar o aprendizado
                  </p>
                </div>
              </div>
            </div>

            <div className="pl-20">
              <div className="flex flex-row items-center mt-3">
                <img
                  className="w-16 h-16 rounded-xl"
                  src={LearnThumb5}
                  alt="Learn Thumb 5"
                />

                <div className="ml-5 justify-start items-center text-left">
                  <h2 className=" m-0 text-lg font-ptsans font-bold white-space-nowrap">
                    Estudantes
                  </h2>

                  <p className="text-sm mt-1 mb-1 opacity-75 w-[13.625rem]">
                    Designs e documentos para impulsionar o aprendizado
                  </p>
                </div>
              </div>
            </div>

            <div className="ml-24">
              <div className="flex flex-col text-left p-5">
                <img
                  className="h-44 w-64 rounded-xl "
                  src={LearnThumb6}
                  alt="Learn Thumb 6"
                />

                <h2 className="text-lg font-ptsans font-bold white-space-nowrap w-56 mt-3">
                  Primeiros passos
                </h2>

                <p className="text-sm opacity-75 w-[15.625rem] mt-2">
                  Confira nosso tutorial rápido sobre como criar no Canva com
                  perfeição.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DropDownHandler>
    </div>
  );
}

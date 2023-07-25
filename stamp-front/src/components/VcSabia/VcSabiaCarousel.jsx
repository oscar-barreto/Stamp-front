import { Carousel, IconButton } from "@material-tailwind/react";
 
export function VcSabiaCarousel() {
  return (
    <Carousel
      className="rounded-xl h-80 sm:w-full"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {/* FIRST SLIDE */}
      <div className="flex justify-center items-center">
       <p className="text-white md:text-center text-center text-sm md:text-lg tracking-tight md:tracking-wide  p-2 m-2 leading-8 md:px-12 mt-10 " style={{fontFamily:"helvetica"}}>
       “O Registro de Marca das Havaianas:
As famosas sandálias de borracha que viraram símbolo da cultura brasileira ao redor do mundo, a marca desta empresa possui uma trajetória interessante e exemplar:
                     </p>
          </div>
          <div className="flex justify-center items-center">
       <p className="text-white md:text-center text-center  text-sm md:text-lg  tracking-tight md:tracking-wide  p-2 m-2 leading-8 md:px-12 mt-10 " style={{fontFamily:"helvetica"}}>
       <span className="font-bold text-sm md:text-lg">Registro internacional: </span>
        A marca Havaianas é tão icônica que tem seus direitos de marca registrados em mais de 150 países. Este é um feito notável e demonstra a popularidade global da marca.
                     </p>
          </div>
     
     
          <div className="flex justify-center items-center">
          <p className="text-white md:text-center text-center  text-sm md:text-lg  tracking-tight md:tracking-wide  p-2 m-2 leading-8 md:px-14 mt-10 " style={{fontFamily:"helvetica"}}>
       <span className="font-bold  text-sm md:text-lg"> Luta contra a falsificação: </span>
       Como muitas marcas populares, a Havaianas tem lutado contra a falsificação de seus produtos. No Brasil e em outros países, a empresa tem tomado medidas legais para proteger sua marca e produtos contra cópias ilegais. Em um caso notável, em 1998, uma operação da Polícia Federal chamada Operação Havaianas resultou na apreensão de milhares de pares de sandálias falsificadas.                     </p>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-white  text-sm md:text-lg text-center  tracking-tight md:tracking-wide p-2 m-2 md:px-14  mt-10 ">
            <span className="font-bold  text-sm md:text-lg">Defesa do "DNA" da marca: </span>
             Defesa do "DNA" da marca: Em 2013, a empresa venceu um processo contra a Grendene, fabricante das sandálias Ipanema, que tinha lançado um modelo de sandália muito parecido com as Havaianas. A Alpargatas, dona da marca Havaianas, alegou que o design era uma cópia e que isso poderia causar confusão entre os consumidores. O tribunal decidiu a favor da Havaianas, reconhecendo o design distinto das sandálias como parte do "DNA" da marca.
            </p>

          </div>
    </Carousel>
  );
}
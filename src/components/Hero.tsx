import { NavLink } from "react-router-dom";
// A importação da imagem foi alterada para o método de componente React
import Phonemockup from "../assets/phone-mockup.svg?react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Hero() {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="grid-row-2 grid gap-10 md:mt-40 md:grid-cols-2">
        {/* SEÇÃO ESQUERDA (TEXTO) */}
        <div className="z-20 mt-20 h-full max-w-md content-center justify-self-center text-neutral-200 lg:max-w-md">
          
          <h1 className="mb-2 text-5xl font-bold lg:text-6xl">
            PosiChat
          </h1>

          <h2 className="mb-5 text-3xl font-semibold text-neutral-300 lg:text-4xl">
            Você não está só.
          </h2>

          <p className="text-lg md:text-lg">
            Bem-vindo(a) ao PosiChat, uma comunidade de apoio e um espaço seguro para partilhar histórias, fazer novas amizades e fortalecer-se. Aqui, a sua voz importa e a sua jornada é respeitada.
          </p>

          {user ? (
            <NavLink to="/chatroom">
              <button className="animate-flow relative z-10 mt-5 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 text-base font-medium text-white shadow-lg">
                <span className="block rounded-lg bg-black px-4 py-2 text-white hover:bg-transparent">
                  Entrar no Chat
                </span>
              </button>
            </NavLink>
          ) : (
            <NavLink to="/signup">
              <button className="animate-flow relative z-10 mt-5 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 text-base font-medium text-white shadow-lg">
                <span className="block rounded-lg bg-black px-4 py-2 text-white hover:bg-transparent">
                  Junte-se a Nós
                </span>
              </button>
            </NavLink>
          )}
        </div>

        {/* SEÇÃO DIREITA (IMAGEM) */}
        <div className="lg:mt-10">
          <div className="grid h-fit w-full grid-cols-1 justify-items-center">
            {/* A imagem agora é renderizada como um componente */}
            <Phonemockup
              alt="Modelo de telemóvel"
              className="z-10 ml-10 h-fit w-full max-w-xs"
            />
            <div className="absolute ml-[10rem] mt-[12rem] h-96 w-96 animate-blob rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 blur-3xl filter transition lg:w-[30rem]"></div>
            <div className="-delay-4000 absolute mr-[10rem] mt-[2rem] h-96 w-72 animate-blob rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 blur-3xl filter transition lg:mt-0"></div>
            <div className="-delay-6000 absolute mt-[25rem] mr-[15em] h-96 w-80 animate-blob rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl filter transition lg:w-[15rem]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

//TODO Imagen muy pequeña en ipads o tablets, ajustar despues con mediaquery
const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-36 md:py-0 md:grid-cols-2 md:ml-28">
        <div className="md:flex md:items-center md:justify-end md:mb-6">
          <Image
            src="/avatar.png"
            priority
            width="750"
            height="750"
            alt="Avatar"
            className=""
          />
        </div>
        <div className="flex flex-col max-w-md md:pr-0 md:ml-16">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            ¡Hola! soy Hidekel un programador <br />
            <TypeAnimation
              sequence={["backend", 1000, "frontend", 1000, "mobile", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
            Como desarrollador, me dedico a combinar diseño y funcionalidad para
            crear experiencias digitales impactantes y accesibles.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <a
              href="/projects"
              className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver proyectos
            </a>
            <a
              href="/contact"
              className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
            >
              Contacta conmigo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

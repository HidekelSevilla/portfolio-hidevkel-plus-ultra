import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Github,
  LinkedinIcon,
} from "lucide-react";

// import type {  } from 'simple-icons';

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "#!",
  },

  {
    id: 2,
    logo: <Github size={30} strokeWidth={1} />,
    src: "#!",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Desarrollador ",
    subtitle: "KIO Tech",
    description:
      "Desarrollé API's utilizando NestJS y Firebase, implementando TypeScript para una codificación segura y mantenible. Además, desarrollé microservicios con MongoDB como base de datos, asegurando la protección de datos mediante JWT y siguiendo los principios SOLID para un código limpio y eficiente. En Python y Java, diseñé scripts eficientes y robustos. En Flutter, creé interfaces de usuario atractivas e incorporé notificaciones push. También integré OpenAI para mejorar la interacción con el cliente y gestioné entornos de desarrollo con Docker en sistemas Linux para una implementación consistente y eficiente.",
    date: "Nov 2023 ",
  },

  {
    id: 2,
    title: "Ingeniero de datos",
    subtitle: "KIO Tech",
    description:
      "Diseñé y optimicé flujos de datos para mantener su integridad y precisión en todas las etapas. Colaboré en el desarrollo de productos impulsados por inteligencia artificial y gestioné entornos de prueba y producción. Investigé y facilité la integración de datos de nuevos clientes, garantizando una transición sin problemas. Presenté demostraciones técnicas claras y lideré proyectos innovadores que ampliaron significativamente nuestra gama de productos.    ",
    date: "Apr 2023 ",
  },
  {
    id: 3,
    title: "Desarrollador freelance",
    subtitle: "Proyectos",
    description:
      "Trabaje en una variedad de proyectos emocionantes y desafiantes que me permitieron desarrollar mis habilidades y aprender nuevas tecnologías. Colaboré con clientes de todo el mundo para crear soluciones digitales innovadoras y atractivas.",
    date: "Apr 2021",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 2,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 15,
    text: "Tecnologias aprendidas",
    lineRight: true,
    lineRightMobile: true,
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Primer Portfolio",
    image: "/image-0.png",
    urlGithub: "https://github.com/HidekelSevilla/PortfolioHidevkl",
    urlDemo: "https://hidekelsevilla.github.io/PortfolioHidevkl/",
  },
  {
    id: 2,
    title: "Proyecto 2",
    image: "/sintítulo-1.png",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Proyecto 3",
    image: "/sintítulo-1.png",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "Proyecto 4",
    image: "/sintítulo-1.png",
    urlGithub: "#!",
    urlDemo: "#!",
  },
];

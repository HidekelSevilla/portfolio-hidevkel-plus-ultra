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

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Copywriting",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Web Pro",
    image: "/image-1.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "Desarrollo Web Ágil",
    image: "/image-2.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Estrategias Web",
    image: "/image-3.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "Ideas Creativas",
    image: "/image-4.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 5,
    title: "Webs Impactantes",
    image: "/image-5.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 6,
    title: "Web Dinámica",
    image: "/image-6.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 7,
    title: "Dark Web ",
    image: "/image-7.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 8,
    title: "E-commerce web",
    image: "/image-8.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "",
    description: "",
    imageUrl: "",
  },
];

import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import ContainerPage from "@/components/container-page";
import CircleImage from "@/components/circle-image";
import PortfolioBox from "@/components/portfolio-box";

const PortfolioPage = () => {
  return (
    <ContainerPage>
      {/* <CircleImage /> */}
      <div className="flex flex-col justify-center h-full">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Mis últimos{" "}
          <span className="font-bold text-secondary">proyectos realizados</span>
        </h1>
        <div className="relative z-10 grid max-w-5x1 gap-6 mx-auto mt-4 md:grid-cols-4">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  );
};

export default PortfolioPage;

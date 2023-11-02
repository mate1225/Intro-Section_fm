//jsx
import Client from "./Client";
//images
import dataBiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import maker from "../images/client-maker.svg";
import meet from "../images/client-meet.svg";
import hero_desktop from "../images/image-hero-desktop.png";
import hero_mobile from "../images/image-hero-mobile.png";
import HeroImage from "./HeroImage";
import WorkSection from "./WorkSection";
export default function MainContent() {
  return (
    <main>
      <div className=" flex  max-w-[1440px] flex-col lg:flex-row-reverse lg:justify-between  ">
        <HeroImage mobile={hero_mobile} desktop={hero_desktop} />
        <div className=" lg:ml-10 xl:mr-[8.71rem] 2xl:ml-[7.81rem] ">
          <WorkSection />
          <Client
            image1={dataBiz}
            image2={audiophile}
            image3={meet}
            image4={maker}
          />
        </div>
      </div>
    </main>
  );
}

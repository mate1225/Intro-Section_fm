import { Button } from "@/components/ui/button";
export default function WorkSection() {
  return (
    <div className="  mt-[2.98rem] flex flex-col items-center justify-center lg:mt-[11.5rem] xl:items-start ">
      <h1 className=" mx-4  text-[2.25rem] font-bold leading-[2.625rem] tracking-[-0.031rem] text-Black_Text lg:flex lg:flex-wrap lg:gap-2 lg:text-[5rem] lg:leading-[5rem] lg:tracking-[-0.06944rem]">
        Make <span>remote work</span>
      </h1>
      <p className=" mx-4  mt-4 text-center font-medium text-Medium_Grey xl:mt-[3rem] xl:text-left xl:text-[1.25rem]">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <Button className=" mt-6 rounded-[0.938rem] border-[1px] border-solid border-Black_Text bg-Black_Text px-5 py-3 font-bold   text-Almost_White hover:bg-transparent  hover:text-Black_Text xl:mt-[3.19rem]">
        Learn more
      </Button>
    </div>
  );
}

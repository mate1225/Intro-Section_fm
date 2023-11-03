//ui
import { Button } from "@/components/ui/button";
//tsx
import DropdownMenu from "./DropdownMenu";
//image
import logo from "../../images/logo.svg";

export default function DesktopNav() {
  return (
    <div className="ml-[3.89rem] mr-10 mt-[1.31rem]  hidden justify-between text-[0.875rem] font-medium text-Medium_Grey lg:flex ">
      <div className="flex gap-10 items-center ">
        <img src={logo} className=" mx-4 mb-6 mt-4" />

        <DropdownMenu title="Features" isItFutures={true} />
        <DropdownMenu title="Company" isItFutures={false} />

        <Button className="hover:text-Black_Text">Careers</Button>
        <Button className="hover:text-Black_Text"> About</Button>
      </div>
      <div className=" flex gap-10 ">
        <Button className=" hover:text-Black_Text">Login</Button>
        <Button className="  rounded-[0.875rem] border-2 border-solid border-Medium_Grey px-[1.4rem] py-[0.81rem] hover:border-Black_Text  hover:text-Black_Text">
          Register
        </Button>
      </div>
    </div>
  );
}

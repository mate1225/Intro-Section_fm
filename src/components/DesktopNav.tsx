import logo from "../images/logo.svg";
import { Button } from "@/components/ui/button";
import DropdownMenu from "./DropdownMenu";
import iconCalendar from "../images/icon-calendar.svg";
import { MenuContext } from "@/utils/contexts";

export default function DesktopNav() {
  const DropdownMenuProps = [
    {
      title: "Company",
      item1: "History",
      items: {
        item1: "Todo List",
        item2: "Calendar",
        item3: "Reminders",
        item4: "Planning",
      },
      image: iconCalendar,
    },
    {
      title: "Features",
      items: {
        item1: "History",
        item2: "Our Team",
        item3: "Blog",
      },
      image: iconCalendar,
    },
  ];

  return (
    <div className="ml-[3.89rem] mr-10 mt-[1.31rem]  hidden justify-between text-[0.875rem] font-medium text-Medium_Grey lg:flex">
      <div className="flex gap-10 items-center ">
        <img src={logo} className=" mx-4 mb-6 mt-4" />
        <MenuContext.Provider value={DropdownMenuProps}>
          {/*    <DropdownMenu
            title1="Features"
            item12="Todo List"
            image={iconCalendar}
          />

          <DropdownMenu
            title1="Company"
            item12="History"
            image={iconCalendar}
          /> */}
        </MenuContext.Provider>

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

//ui
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
//tsx
import Features from "./Features";
import Company from "./Company";

export default function DropdownMenu(props: {
  title: string;
  isItFutures: boolean;
}) {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" text-[0.875rem] font-medium  text-Medium_Grey hover:text-Black_Text">
              {props.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className=" bg-white p-6 ">
              <NavigationMenuLink>
                {props.isItFutures ? <Features /> : <Company />}
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

/* import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import DropdownMenuItem from "./DropdownMenuItem";

export default function DropdownMenu(props: {
  title1: string;
  image: string;
  item12: String;
}) {
  const { title1, image, item12 } = props;
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" text-[0.875rem] font-medium  text-Medium_Grey hover:text-Black_Text">
              {title1}
            </NavigationMenuTrigger>
            <NavigationMenuContent className=" bg-white p-6 ">
              <NavigationMenuLink className="flex ">
                <DropdownMenuItem image={image} item12={item1} />
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
 */

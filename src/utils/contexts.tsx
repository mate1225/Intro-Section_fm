import { createContext } from "react";
type MenuContextType =
  | null
  | {
      title: string;
      items: {};
      image: string;
    }[];
export const MenuContext = createContext<MenuContextType>(null);

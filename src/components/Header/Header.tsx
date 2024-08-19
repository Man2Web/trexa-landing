import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import IMAGE_LINK from "../../assets/TrExa.png";
export const Header = () => {
  const MENU_ITEMS = [
    { name: "Item One", link: "Link One" },
    { name: "Item Two", link: "Link Two" },
    { name: "Item Three", link: "Link Three" },
    { name: "Item Four", link: "Link Four" },
  ];

  return (
    <section>
      <header className="p-2 border border-1 border-solid border-slate-200 rounded-lg">
        <NavigationMenu>
          <NavigationMenuList className="grid grid-cols-3 items-center">
            <img src={IMAGE_LINK} className="h-6" />

            <div className="flex justify-center space-x-4">
              {MENU_ITEMS.map(
                (item: { name: string; link: string }, index: number) => {
                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>{item.link}</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }
              )}
            </div>
            <div className="flex justify-end">
              <Button>Schedule Demo</Button>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </section>
  );
};

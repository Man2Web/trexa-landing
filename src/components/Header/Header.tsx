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
  const MeetLink = "https://calendly.com/harsha-vardhan-man2web/30min";
  return (
    <section>
      <header className="backdrop-blur-sm bg-white/30 p-2 border border-1 border-solid border-slate-200 rounded-lg">
        <NavigationMenu>
          <NavigationMenuList className="grid grid-cols-3 items-center">
            <img src={IMAGE_LINK} alt="logo" className="h-6" />

            <div className="flex justify-end space-x-4">
              {MENU_ITEMS.map(
                (item: { name: string; link: string }, index: number) => {
                  return (
                    <NavigationMenuItem
                      className="hidden md:block text-slate-400"
                      key={index}
                    >
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
              <a target="_blank" href={MeetLink}>
                <Button>Schedule Demo</Button>
              </a>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </section>
  );
};

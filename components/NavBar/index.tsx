import { useBreakpointValue } from "@chakra-ui/react";
import { MobileNavBar } from "./MobileNavBar";
import { DesktopNavBar } from "./DesktopNavBar";

export const NavBar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) return <MobileNavBar />;
  return <DesktopNavBar />;
};

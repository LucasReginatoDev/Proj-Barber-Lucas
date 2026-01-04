import Image from "next/image";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between flex flex-row items-center">
        <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;

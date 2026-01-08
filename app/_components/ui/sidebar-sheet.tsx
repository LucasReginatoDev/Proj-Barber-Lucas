import { Button } from "./button";
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { quickSearchOptions } from "@/app/_constants/search";
import { Avatar, AvatarImage } from "./avatar";
import Link from "next/link";
import Image from "next/image";

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center p-4 pt-0 border-b border-solid">
        <Avatar>
          <AvatarImage src="/avatar-01.png" alt="Avatar do usuário" />
        </Avatar>

        <div>
          <p className="font-bold px-3">Lucas Blex</p>
          <p className="text-xs px-3">lucasblex@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col p-5 gap-4 border-b border-solid">
        <SheetClose asChild>
          <Button className="gap-2 justify-start" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>
        <Button className="gap-1 justify-start" variant="ghost">
          <CalendarIcon size={18} />
          Agendamento
        </Button>
      </div>

      <div className="flex flex-col p-5 gap-2 border-b border-solid">
        {quickSearchOptions.map((option) => (
          <Button
            className="gap-1 justify-start"
            variant="ghost"
            key={option.title}
          >
            <Image
              src={option.imageUrl}
              alt={option.title}
              width={18}
              height={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 p-5">
        <Button className="gap-2 justify-start" variant="ghost">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;

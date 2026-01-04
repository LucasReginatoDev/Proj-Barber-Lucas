"use client";

import Header from "app/_components/ui/header";
import { Button } from "app/_components/ui/button";
import { Input } from "./_components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Lucas!</h2>
        <p>Domingo, 04 de Janeiro.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende nos melhores com FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDAMENTO */}
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/avatar-01.png" alt="Avatar" />
                </Avatar>
                <p className="text-sm">Barbearia Blex</p>
              </div>
            </div>
            {/* DIREITA */}
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Janeiro</p>
              <p className="text-2xl">04</p>
              <p className="text-sm">15:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;

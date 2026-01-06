import { Barbershop } from "@prisma/client";
import Image from "next/image";
import { Button } from "./button";
import { Card, CardContent } from "./card";

interface ServiceItemProps {
  service: Barbershop;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        {/* IMAGEM */}
        <div className="relative min-w-[100px] min-h-[100px] max-h-[100px] max-w-[100px]">
          <Image
            src={service.imageUrl}
            fill
            className="object-cover rounded-lg"
            alt={service.name}
          />
        </div>
        {/* DETALHES DO SERVIÇO */}
        <div className="space-y-2">
          <h3 className="font-semibold text-sm">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
          {/* PREÇO E BOTÃO */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>

            <Button variant="secondary" size="sm">
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;

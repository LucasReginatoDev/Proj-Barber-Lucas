import { Button } from "@/app/_components/ui/button";
import PhoneItem from "@/app/_components/ui/phone-item";
import ServiceItem from "@/app/_components/ui/service-item";
import { db } from "app/_lib/prisma";
import {
  ChevronLeftIcon,
  MapPinIcon,
  MenuIcon,
  SmartphoneIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BarbershopPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  // chamar banco de dados
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: (await params).id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return notFound();
  }

  return (
    <div>
      {/* IMAGEM */}
      <div className="relative w-full h-[250px]">
        <Image
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
          alt={barbershop.name}
        />

        <Button
          className="absolute left-4 top-4"
          variant="secondary"
          size="icon"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          className="absolute right-4 top-4"
          variant="secondary"
          size="icon"
        >
          <MenuIcon />
        </Button>
      </div>

      <div className="p-5 border-b border-solid">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-2 mb-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon className="text-primary fill-primary" size={18} />
          <p className="text-sm">4,7 (487 AVALAIAÇÕES)</p>
        </div>
      </div>

      {/* DESCRIÇÃO */}
      <div className="border-b border-solid p-5 space-y-3">
        <h2 className="font-bold uppercase text-gray-400 text-xs">Sobre Nós</h2>
        <p className="text-sm text-justify">{barbershop?.description}</p>
      </div>

      {/* SERVIÇOS */}
      <div className="p-5 space-y-3 border-b border-solid">
        <h2 className="font-bold uppercase text-gray-400 text-xs">Serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* CONTATO */}
      <div className="p-5 space-y-3">
        <h2 className="font-bold uppercase text-gray-400 text-xs mb-4">
          Contato
        </h2>
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopPage;

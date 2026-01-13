import BarbershopItem from "../_components/ui/barbershop-item";
import { db } from "app/_lib/prisma";
import Header from "app/_components/ui/header";
import Search from "../_components/ui/search";

interface BarbershopsPageProps {
  searchParams: Promise<{
    title?: string;
    service?: string;
  }>;
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  const rawParams = await searchParams;

  const title = rawParams.title?.trim();
  const service = rawParams.service?.trim();

  let whereClause = {};

  if (title) {
    // Busca pela barra de pesquisa
    whereClause = {
      name: {
        contains: title,
        mode: "insensitive",
      },
    };
  } else if (service) {
    // Busca pelo menu lateral
    whereClause = {
      services: {
        some: {
          name: {
            contains: service,
            mode: "insensitive",
          },
        },
      },
    };
  }

  const barbershops = await db.barbershop.findMany({
    where: whereClause,
  });

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        {title && (
          <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
            Resultados para &quot;{title}&quot;
          </h2>
        )}

        {service && !title && (
          <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
            Barbearias com o serviço &quot;{service}&quot;
          </h2>
        )}
        {barbershops.length === 0 ? (
          <p className="mt-6 mb-3 text-xs font-bold uppercase text-red-400">
            Nenhuma barbearia foi encontrada para este serviço.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BarbershopsPage;

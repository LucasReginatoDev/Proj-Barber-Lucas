import { Avatar, AvatarImage } from "./avatar";
import { Badge } from "./badge";
import { Card, CardContent } from "./card";

export const BookingItem = () => {
  return (
    <>
      <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
        Agendamentos
      </h2>

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
          <div className="flex flex-col items-center justify-center px-8 border-l-2 border-solid">
            <p className="text-sm">Janeiro</p>
            <p className="text-2xl">04</p>
            <p className="text-sm">15:00</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

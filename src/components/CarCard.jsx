import { Card, CardHeader, CardBody, CardFooter, Button, Image, Chip } from "@nextui-org/react";

export default function ({ auto }) {
  return (
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-black/60 uppercase font-bold">{auto.marca}</p>
        <h4 className="text-black/90 font-bold text-xl backdrop-blur-sm">{auto.modelo}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={auto.images[0]}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-col flex-grow gap-2 items-center">
          <div className="flex gap-1 w-full ml-6">
            <p className="text-medium text-white/60 font-bold">Precio de contado: <strong className="text-[#FFB457]">${auto.precio}</strong></p>
          </div>
          <div className="flex flex-wrap w-full justify-start gap-1 scale-80 lg:scale-90 xl:gap-2">
            <p className="text-small text-white/60 ">{auto.subidoHace}</p>
            {auto.chips.map((chip) => (
              <Chip size="sm" key={chip}>
                {chip}
              </Chip>
            ))}
          </div>
        </div>
        <Button radius="full" size="sm" className="bg-[#FFB457] hover:bg-[#ffa27d]">
          Comprar
        </Button>
      </CardFooter>
    </Card>

  );
}
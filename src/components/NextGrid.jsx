import { useEffect, useState } from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function NextGrid({autos, isLoading}) {

  const [list, setList] = useState([]);

  useEffect(() => {
    console.log(autos);
    setList(autos);
  }, [autos, isLoading])

  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {list.map((item, index) => (
        /* eslint-disable no-console */
        <Card radius="sm" key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.modelo}
              className="w-full object-cover h-[140px]"
              radius="sm"
              shadow="sm"
              src={item.images[0]}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.marca}</b>
            <p className="text-default-500">{item.precio}</p>

          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

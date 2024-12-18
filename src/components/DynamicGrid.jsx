import { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";


export default function DynamicGrid({ cards }) {
    const [list, setList] = useState(cards);

    useEffect(() => {
        // Actualiza las tarjetas cada vez que el array cambia
        setList(cards);
    }, [cards]);

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {list.map((item, index) => (
                    /* eslint-disable no-console */
                    <Card radius="sm" key={index} isPressable shadow="sm" isHoverable onPress={() => console.log("item pressed")}>
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
        </div>
    );
}

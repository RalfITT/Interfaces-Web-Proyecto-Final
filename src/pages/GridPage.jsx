import { useState } from "react";
import DynamicGrid from "../components/DynamicGrid";

export default function GridPage() {
    const [cards, setCards] = useState([
        { image: "/imgs/img1.jpg", title: "Card 1", description: "This is card 1" },
        { image: "/imgs/img2.jpg", title: "Card 2", description: "This is card 2" },
        { image: "/imgs/img3.jpg", title: "Card 3", description: "This is card 3" },
    ]);

    const addCard = () => {
        const newCard = {
            image: "/imgs/img4.jpg",
            title: `Card ${cards.length + 1}`,
            description: `This is card ${cards.length + 1}`,
        };
        setCards([...cards, newCard]);
    };

    return (
        <div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg m-6"
                onClick={addCard}
            >
                Add Card
            </button>
            <DynamicGrid cards={cards} />
        </div>
    );
}
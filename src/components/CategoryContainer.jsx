import { FaTruck, FaCar } from "react-icons/fa";
import { CarIcon, SUVIcon, PickupIcon, MinivanIcon } from "../assets/carIcon";

function CategoryItem() {
    return (
        <div className="flex flex-col justify-center items-center gap-2 text-slate-50 bg-gray-400 rounded-2xl p-6 px-10 cursor-pointer transform transition duration-200 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
            <CarIcon size={60} />
            <h2 className="text-2xl font-bold text-gray-600 w-full text-center">Sedan</h2>
        </div>
    );
}

export default function CategoryContainer() {
    return (
        <div className="flex justify-center flex-wrap gap-4 h-auto w-full">
            <div className=" w-[200px] flex flex-col justify-center items-center gap-2 text-gray-600 bg-gray-400 rounded-2xl p-6 px-10 cursor-pointer transform transition duration-200 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
                <CarIcon size={60} />
                <h2 className=" text-2xl font-bold text-gray-600 w-full text-center">Sedan</h2>
            </div>
            <div className="w-[200px] flex flex-col justify-center items-center gap-2 text-gray-600 bg-gray-400 rounded-2xl p-6 px-10 cursor-pointer transform transition duration-200 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
                <SUVIcon size={60} />
                <h2 className="text-2xl font-bold text-gray-600 w-full text-center">SUV's</h2>
            </div>
            <div className="w-[200px] flex flex-col justify-center items-center gap-2 text-gray-600 bg-gray-400 rounded-2xl p-6 px-10 cursor-pointer transform transition duration-200 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
                <PickupIcon size={60} />
                <h2 className="text-2xl font-bold text-gray-600 w-full text-center">Pickups</h2>
            </div>
            <div className="w-[200px] flex flex-col justify-center items-center gap-2 text-gray-600 bg-gray-400 rounded-2xl p-6 px-10 cursor-pointer transform transition duration-200 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
                <MinivanIcon size={60} />
                <h2 className="text-2xl font-bold text-gray-600 w-full text-center">Minivans</h2>
            </div>
        </div>
    );
}
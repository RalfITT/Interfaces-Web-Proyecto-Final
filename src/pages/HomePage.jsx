import Layout from "../layout";
//import { Image } from "@nextui-org/react";
import Carousel from "../components/Carousel";
import Carousel2 from "../components/Carousel2";
import MyDetailBar from "../components/MyDetailBar";
import CategoryContainer from "../components/CategoryContainer";

function HomePage() {
    return (
        <Layout>
            <MyDetailBar />
            <div className="flex flex-col self-center items-center h-[1600px] xl:w-full w-full bg-slate-50">
                <div className="w-full">
                    <Carousel />
                </div>

                <div className="w-[90%] xl:w-[1250px] pt-8">
                    <Carousel2 />
                </div>

                <div className="flex justify-center bg-gray-600 h-auto w-full mt-6 pt-4 pb-6">
                    <div className="flex flex-col gap-4 justify-center w-[90%] xl:w-[1250px]">
                        <h2 className="text-4xl font-bold text-slate-50 w-full text-center">Categorías</h2>
                        <CategoryContainer />
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default HomePage
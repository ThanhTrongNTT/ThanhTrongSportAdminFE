import ImageCustom from "@/components/image/ImageCustom";
import { Product } from "@/data/Interface";
import { Slide } from "react-slideshow-image";

type ProductCardProps = {
    // Props here
    isDelModal: boolean;
    onCloseDel: () => void;
    onDelete?: () => void;
    product?: Product;
    onEdit?: () => void;
    isEditModal?: boolean;
    onCloseEdit?: () => void;
};
const ProductCard = (props: ProductCardProps) => {
    const slideImages = [
        {
            url: "https://hd-book-store.vercel.app/images/db_bg.jpeg",
            caption: "Slide 1",
        },
        {
            url: "https://hd-book-store.vercel.app/images/db_bg.jpeg",
            caption: "Slide 2",
        },
        {
            url: "https://hd-book-store.vercel.app/images/db_bg.jpeg",
            caption: "Slide 3",
        },
    ];
    const colors = ["#ffff", "#000"];
    return (
        <div className="bg-white border-sm shadow-lg h-[400px] w-1/5 p-5 m-4 rounded-md">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <ImageCustom alt={"Test"} src={slideImage.url} />
                    </div>
                ))}
            </Slide>
            <div className="flex flex-col">
                <h1>Product Name: </h1>
                <span>Description: </span>
                <span>Price: </span>
                <span>Quantity: </span>
                <span className="flex font-bold">
                    Colors:{" "}
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            style={{ backgroundColor: color }}
                            className="w-5 h-5 inline-block mx-2 border-2"
                            title={color} // Để biết được mã màu khi di chuột vào
                        ></div>
                    ))}
                </span>
                <span>Category: </span>
            </div>
            <div className="flex justify-between font-bold p-5">
                <button className="p-1 bg-blue-300  rounded-md hover:bg-blue-500">
                    Edit
                </button>
                <button
                    className="p-1 bg-red-300  rounded-md hover:bg-red-500"
                    onClick={props.onCloseDel}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ProductCard;

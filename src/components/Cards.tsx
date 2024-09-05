import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import productData from "@/data/product_data.json";
import Link from "next/link";

const Cards = () => {
    const products = productData.products;
    const discount = (originalPrice: number, discountedPrice: number) => {
        const discount = originalPrice - discountedPrice;
        const discountPercentage = (discount / originalPrice) * 100;
        return discountPercentage.toFixed(2);
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14 px-5 md:px-0">
            {products.map((products) => (
                <div key={products.id}>
                    <Link href={`/product/${products.slug}`}>
                        <Card className="hover:scale-105 duration-300">
                            <CardHeader>
                                <CardContent className="max-w-full">
                                    <Image
                                        src={products.image}
                                        alt={products.title}
                                        width={500}
                                        height={500}
                                        className="rounded"
                                    />
                                </CardContent>
                                <CardTitle>{products.title}</CardTitle>
                            </CardHeader>
                            <CardFooter className="justify-between text-xs md:text-base">
                                <p>Rs. {products.price}</p>
                                <p className="line-through md:pr-20 pr-10 md:text-sm">
                                    Rs. {products.ogPrice}
                                </p>
                                <p>
                                    {discount(products.ogPrice, products.price)}
                                    % off
                                </p>
                            </CardFooter>
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Cards;

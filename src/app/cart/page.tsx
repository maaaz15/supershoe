import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Cart = () => {
    const cartItems = [];
    return (
        <div className="w-full mb-16">
            <div>
                {cartItems.length < 1 && (
                    <div className="flex flex-col justify-center items-center">
                        <div className="mt-10">
                            <Image
                                src="/empty-cart.webp"
                                alt="empty"
                                width={300}
                                height={300}
                                className="w-64 h-64 sm:w-80 sm:h-80"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold tracking-wide mt-10">
                                Your cart is empty
                            </h2>
                            <p className="mt-8 md:mt-4 text-xs md:text-base">
                                Looks like you have not added anything in your
                                cart.
                            </p>
                            <p className="mt-1 text-xs md:text-base">
                                Go ahead and explore top categories
                            </p>
                        </div>
                        <div className="mt-8 md:mt-10">
                            <Button asChild>
                                <Link href="/">Continue Shopping</Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;

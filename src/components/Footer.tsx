import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Github } from "lucide-react";

const Footer = () => {
    return (
        <footer className="text-gray-400 py-12 px-6">
            <div className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="dark:text-white text-black font-medium text-sm cursor-pointer">
                            Find a Store
                        </div>
                        <div className="dark:text-white text-black font-medium text-sm cursor-pointer">
                            Become a Partner
                        </div>
                        <div className="dark:text-white text-black font-medium text-sm cursor-pointer">
                            Sign Up For Email
                        </div>
                        <div className="dark:text-white text-black font-medium text-sm cursor-pointer">
                            Send Us Feedback
                        </div>
                        <div className="dark:text-white text-black font-medium text-sm cursor-pointer">
                            Student Discount
                        </div>
                    </div>
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        <div className="flex flex-col gap-3">
                            <div className="dark:text-white text-black font-semibold text-lg">
                                Get Help
                            </div>
                            <div className="text-sm dark:hover:text-white hover:text-black transition-colors duration-300 cursor-pointer">
                                Order Status
                            </div>
                            <div className="text-sm dark:hover:text-white hover:text-black transition-colors duration-300 cursor-pointer">
                                Delivery
                            </div>
                            <div className="text-sm dark:hover:text-white hover:text-black transition-colors duration-300 cursor-pointer">
                                Returns
                            </div>
                            <div className="text-sm dark:hover:text-white hover:text-black transition-colors duration-300 cursor-pointer">
                                Payment Options
                            </div>
                            <div className="text-sm dark:hover:text-white hover:text-black transition-colors duration-300 cursor-pointer">
                                Contact Us
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="dark:text-white text-black font-semibold text-lg">
                                About
                            </div>
                            <div className="text-sm dark:hover:text-white hover:text-black transition-colors duration-300 cursor-pointer">
                                News
                            </div>
                            <div className="text-sm dark:hover:text-white hover:text-black transition-colors duration-300 cursor-pointer">
                                Careers
                            </div>
                            <div className="text-sm dark:hover:text-white hover:text-black transition-colors duration-300 cursor-pointer">
                                Investors
                            </div>
                            <div className="text-sm dark:hover:text-white hover:text-black transition-colors duration-300 cursor-pointer">
                                Sustainability
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 justify-center md:justify-start">
                    <a
                        href="https://www.linkedin.com/in/maaaz15/"
                        target="_blank"
                        className="w-10 h-10 rounded-full dark:bg-white bg-black flex items-center justify-center dark:text-black text-white dark:hover:bg-white/[0.5] hover:bg-black/[0.5] duration-300 cursor-pointer"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://www.x.com/informalmaaz/"
                        target="_blank"
                        className="w-10 h-10 rounded-full dark:bg-white bg-black flex items-center justify-center dark:text-black text-white dark:hover:bg-white/[0.5] hover:bg-black/[0.5] duration-300 cursor-pointer"
                    >
                        <Twitter size={20} />
                    </a>
                    <a
                        href="https://www.github.com/maaaz15/"
                        target="_blank"
                        className="w-10 h-10 rounded-full dark:bg-white bg-black flex items-center justify-center dark:text-black text-white dark:hover:bg-white/[0.5] hover:bg-black/[0.5] duration-300 cursor-pointer"
                    >
                        <Github size={20} />
                    </a>
                </div>
            </div>
            <div className="flex justify-center mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                <div className="flex items-center space-x-2 justify-center sm:text-base text-sm">
                    <span>©</span>
                    <span> {new Date().getFullYear()} SuperShoe, Inc.</span>
                    <span>All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

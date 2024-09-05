"use client";
import React, { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted: ", { email, message });
    };

    return (
        <div className="py-12 relative">
            <div className="max-w-2xl mx-auto p-4 relative z-10">
                <h1 className="text-lg md:text-4xl text-center font-bold mb-8 text-white">
                    Contact Us
                </h1>
                <p className="mt-8 text-xs md:text-lg leading-8 font-medium text-center">
                    We are here to help with any questions about our products,
                    sales, or discounts. Reach out and let us know how we can
                    assist you in your shopping journey.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4 mt-12">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email Address"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message"
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        rows={7}
                        required
                    ></textarea>
                    <Button type="submit">Send Message</Button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

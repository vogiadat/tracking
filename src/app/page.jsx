import SearchInput from "@/components/SearchInput";
import React from "react";

const Page = async () => {
    return (
        <>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Tracking Your Delivery</h1>
                    <SearchInput />
                </div>
            </div>
        </>
    );
};

export default Page;
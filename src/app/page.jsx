import SearchInput from "@/components/SearchInput";
import Link from "next/link";

const Page = async () => {
    return (
        <>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Tracking Your Delivery</h1>
                    <Link href="/admin">Test</Link>
                    <SearchInput />
                </div>
            </div>
        </>
    );
};

export default Page;

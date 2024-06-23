import Navbar from "@/components/Navbar";

export default function TrackingLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="pt-20 hero min-h-screen bg-base-100">{children}</div>
    </>
  );
}

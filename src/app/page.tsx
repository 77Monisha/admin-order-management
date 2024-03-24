import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-wrap">
        <section>
          <Sidebar />
        </section>
        <section>
          <Header />
        </section>
      </div>
    </>
  );
}

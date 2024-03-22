import Header from "@/components/Header";
import Search from "@/components/Search";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-wrap">
      <section>
        <Sidebar />
      </section>
      <section>
        <Header />
      </section>
      <section>
        <Search />
      </section>
    </div>
  );
}

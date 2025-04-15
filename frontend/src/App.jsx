import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

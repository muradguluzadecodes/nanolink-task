import { Link, Route, Routes } from "react-router-dom";
import Live from "./pages/Live";
import Results from "./pages/Results";
import Tab from "./widgets/Tab";
import { Menu } from "@/icons/Menu";
import { ArrowLeft } from "@/icons/ArrowLeft";

function App() {
  return (
    <>
      <div className="relative 2xl:px-[200px] xl:px-[150px] l:px-[100px] md:px-[60px] sm:px-[30px] px-[20px] py-[100px]">
        <button className="p-2 sm:display-none flex-centered rounded-sm fixed right-[30px] top-[50px] bg-background z-100 ">
          <Menu />
        </button>

        <main className="">
          <div className="flex gap-10">
            <div className="mt-[10px]">
              <ArrowLeft />
            </div>
            <div>
              <h1>FIG ARTISTIC GYMNASTICS WORLD CUP</h1>
              <div className="flex gap-4 items-baseline mt-2 text-[20px]">
                <p>Doha, Qatar</p>
                <p className="border-l border-white pl-6 ml-4">
                  12/03/2023 - 13/02/2023
                </p>
              </div>
            </div>
          </div>
          <Tab />
        </main>
        <Routes>
          <Route path="/live" element={<Live />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

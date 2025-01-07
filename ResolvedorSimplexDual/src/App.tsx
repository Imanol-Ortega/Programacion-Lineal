import { Route, Routes } from "react-router-dom";
import Simplex from "./components/Simplex";
import Resolver from "./components/Resolver";

function App() {
    return (
        <>
            <div className="w-screen h-screen">
                <div className="h-full p-10 mx-auto overflow-x-hidden rounded max-w-7xl dark:bg-gray-900 dark:text-white scroll-smooth">
                    <Routes>
                        <Route path="/" element={<Simplex />} />
                        <Route path="/simplex" element={<Resolver />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;

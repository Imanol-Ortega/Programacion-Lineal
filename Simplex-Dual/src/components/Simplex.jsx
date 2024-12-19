import { useState } from "react";
import Inecuaciones from "./Inecuaciones";
import { AddPlus, RemoveMinus } from "@/icons/Actions";

function Simplex() {
    const [input, setInput] = useState(["", ""]);
    const [funcionObjetivo, setFuncionObjetivo] = useState({
        x1: 0,
        x2: 0,
        objetivo: "max",
    });
    const [inecuaciones, setInecuaciones] = useState([]);

    const handdleSubmit = (e) => {
        e.preventDefault();
        setFuncionObjetivo({
            x1: Number(e.target.x1.value),
            x2: Number(e.target.x2.value),
            objetivo: String(e.target.objetivo.value),
        });
    };

    return (
        <div className="w-full h-full m-auto font-semibold">
            <div className="flex flex-col justify-between align-middle items-center text-sm">
                <p className="text-2xl m-10">Resolvedor de Simplex</p>
                <form
                    className="flex flex-col justify-start"
                    onSubmit={handdleSubmit}
                >
                    <span className="p-2 m-auto flex flex-row justify-center items-center">
                        <p className="text-lg">
                            ¿Cúal es el objetivo de la función?
                        </p>
                        <select
                            className="rounded borde text-black m-2 p-1"
                            name="objetivo"
                        >
                            <option value="max">Maximizar</option>
                            <option value="min">Minimizar</option>
                        </select>
                    </span>
                    <span className="p-2 m-auto flex flex-row justify-center items-center">
                        <p className="p-2">Z = </p>
                        <input
                            type="text"
                            className="w-20 rounded-sm text-gray-900 text-xs p-1 bg-gray-300 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            name="x1"
                        />
                        <label className="p-2"> X1 +</label>
                        <input
                            type="text"
                            className="w-20 rounded-sm text-gray-900 text-xs p-1 bg-gray-300 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            name="x2"
                        />
                        <label className="p-2">X2</label>
                    </span>

                    <span>
                        <button
                            className=" text-emerald-400 hover:text-emerald-700 font-bold"
                            onClick={() => setInput([...input, ""])}
                        >
                            <AddPlus className="w-7 h-7" />
                        </button>
                    </span>

                    <div>
                        {input.map((_, index) => (
                            <div key={index} className="flex flex-row">
                                <Inecuaciones
                                    index={index}
                                    setInecuaciones={setInecuaciones}
                                    inecuaciones={inecuaciones}
                                />
                                <button
                                    className="hover:text-pink-400 text-pink-700 font-bold py-2 px-4 rounded"
                                    onClick={() =>
                                        setInput(
                                            input.filter((_, i) => i !== index)
                                        )
                                    }
                                >
                                    <RemoveMinus className="w-6 h-6" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <button className="bg-slate-500 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded w-24 mt-3">
                        Resolver
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Simplex;

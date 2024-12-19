import React, { useState } from "react";
import Inecuaciones from "./Inecuaciones";
import { AddPlus, RemoveMinus } from "@/icons/Actions";
import useSimplexStore from "@/store/simplexStore";

function Simplex() {
    const [input, setInput] = useState<string[]>(["", ""]);
    const setFuncionObjetivo = useSimplexStore(
        (state) => state.setFuncionObjetivo
    );
    const funcionObjetivo = useSimplexStore((state) => state.funcionObjetivo);
    const setInecuaciones = useSimplexStore((state) => state.setInecuaciones);
    const inecuaciones = useSimplexStore((state) => state.inecuaciones);

    const handdleChangeInput = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFuncionObjetivo({
            ...funcionObjetivo,
            [e.target.name]: Number(e.target.value),
        });
    };

    const handdleSubmit = () => {
        console.log(funcionObjetivo, inecuaciones);
    };

    return (
        <div className="w-full h-full m-auto font-semibold">
            <div className="flex flex-col justify-between align-middle items-center text-sm">
                <p className="text-2xl m-10">Resolvedor de Simplex</p>
                <span className="p-2 m-auto flex flex-row justify-center items-center">
                    <p className="text-lg">
                        ¿Cúal es el objetivo de la función?
                    </p>
                    <select
                        className="rounded borde text-black m-2 p-1"
                        name="objetivo"
                        onChange={handdleChangeInput}
                    >
                        <option value="1">Maximizar</option>
                        <option value="2">Minimizar</option>
                    </select>
                </span>
                <span className="p-2 m-auto flex flex-row justify-center items-center">
                    <p className="p-2">Z = </p>
                    <input
                        type="text"
                        className="w-20 rounded-sm text-gray-900 text-xs p-1 bg-gray-300 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                        name="x1"
                        onChange={handdleChangeInput}
                        required
                    />
                    <label className="p-2"> X1 +</label>
                    <input
                        type="text"
                        className="w-20 rounded-sm text-gray-900 text-xs p-1 bg-gray-300 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                        name="x2"
                        onChange={handdleChangeInput}
                        required
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
                            <Inecuaciones index={index} />
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
                <button
                    className="bg-slate-500 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded w-24 mt-3"
                    onClick={handdleSubmit}
                >
                    Resolver
                </button>
            </div>
        </div>
    );
}

export default Simplex;

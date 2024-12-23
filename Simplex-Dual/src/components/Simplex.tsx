import React, { useState } from "react";
import Inecuaciones from "./Inecuaciones";
import { AddPlus, RemoveMinus } from "@/icons/Actions";
import useSimplexStore from "@/store/simplexStore";
import Input from "./Input";

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

    const handdleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inecuaciones.length < 2) {
            alert("Debe haber al menos dos inecuaciones");
            return;
        }
    };

    return (
        <div className="w-full h-full m-auto font-semibold">
            <div className="flex flex-col justify-between align-middle items-center text-sm">
                <p className="text-2xl m-10">Resolvedor de Simplex</p>
                <form onSubmit={handdleSubmit}>
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
                        <Input
                            type="text"
                            name="x1"
                            onChange={handdleChangeInput}
                            required={true}
                        />
                        <label className="p-2"> X1 +</label>
                        <Input
                            type="text"
                            name="x2"
                            onChange={handdleChangeInput}
                            required={true}
                        />
                        <label className="p-2">X2</label>
                    </span>

                    <div>
                        <span>
                            <button
                                className=" text-emerald-400 hover:text-emerald-700 font-bold"
                                aria-label="Agregar"
                                onClick={() => setInput([...input, ""])}
                            >
                                <AddPlus className="w-7 h-7" />
                            </button>
                        </span>
                        {input.map((_, index) => (
                            <div key={index} className="flex flex-row">
                                <Inecuaciones index={index} />
                                <button
                                    className="hover:text-pink-400 text-pink-700 font-bold py-2 px-4 rounded"
                                    aria-label="Eliminar"
                                    onClick={() => {
                                        setInput(
                                            input.filter((_, i) => i !== index)
                                        );
                                        setInecuaciones(
                                            inecuaciones.filter(
                                                (_, i) => i !== index
                                            )
                                        );
                                    }}
                                >
                                    <RemoveMinus className="w-6 h-6" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        className="bg-slate-500 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded w-24 mt-3"
                        aria-label="Resolver"
                    >
                        Resolver
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Simplex;

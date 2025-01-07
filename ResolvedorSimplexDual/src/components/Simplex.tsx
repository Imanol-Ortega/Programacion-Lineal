import React, { useState } from "react";
import Inecuaciones from "./Inecuacion";
import { AddPlus, RemoveMinus } from "../icons/Actions";
import useSimplexStore from "../store/simplexStore";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

function Simplex() {
    const [input, setInput] = useState<string[]>(["", ""]);
    const setFuncionObjetivo = useSimplexStore(
        (state) => state.setFuncionObjetivo
    );
    const funcionObjetivo = useSimplexStore((state) => state.funcionObjetivo);
    const setInecuaciones = useSimplexStore((state) => state.setInecuaciones);
    const inecuaciones = useSimplexStore((state) => state.inecuaciones);
    const navigate = useNavigate();

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
        navigate("/simplex");
    };

    return (
        <div className="w-full h-full m-auto font-semibold">
            <div className="flex flex-col items-center justify-between text-sm align-middle">
                <p className="m-10 text-2xl">Resolvedor de Simplex</p>
                <form onSubmit={handdleSubmit}>
                    <span className="flex flex-row items-center justify-center p-2 m-auto">
                        <p className="text-lg">
                            ¿Cúal es el objetivo de la función?
                        </p>
                        <select
                            className="p-1 m-2 text-black rounded borde"
                            name="objetivo"
                            onChange={handdleChangeInput}
                        >
                            <option value="1">Maximizar</option>
                            <option value="2">Minimizar</option>
                        </select>
                    </span>
                    <span className="flex flex-row items-center justify-center p-2 m-auto">
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
                                className="font-bold text-emerald-400 hover:text-emerald-700"
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
                                    className="px-4 py-2 font-bold text-pink-700 rounded hover:text-pink-400"
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
                        className="w-24 px-4 py-2 mt-3 font-semibold text-white rounded bg-slate-500 hover:bg-slate-700"
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

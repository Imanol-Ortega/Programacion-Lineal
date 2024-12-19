import useSimplexStore from "@/store/simplexStore";
import React, { useEffect, useState, type ChangeEvent } from "react";

interface Inecuacion {
    x1: number;
    x2: number;
    restriccion: number;
    valres: number;
}

interface InecuacionProps {
    index: number;
}

const Inecuaciones: React.FC<InecuacionProps> = ({ index }) => {
    const [inecuacionSimple, setInecuacionSimple] = useState<Inecuacion>({
        x1: 0,
        x2: 0,
        restriccion: 1,
        valres: 0,
    });
    const inecuaciones = useSimplexStore((state) => state.inecuaciones);
    const setInecuaciones = useSimplexStore((state) => state.setInecuaciones);

    useEffect(() => {
        const inn = [...inecuaciones];
        inn[index] = inecuacionSimple;
        setInecuaciones(inn);
    }, [inecuacionSimple]);
    const handdleChangeInput = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setInecuacionSimple({
            ...inecuacionSimple,
            [e.target.name]: Number(e.target.value),
        });
    };

    return (
        <div>
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
            <select
                className="rounded borde text-black m-2 p-1"
                name="restriccion"
                onChange={handdleChangeInput}
                required
            >
                <option value="1">{"<="}</option>
                <option value="2">{">="}</option>
            </select>
            <input
                type="text"
                className="w-20 rounded-sm text-gray-900 text-xs p-1 bg-gray-300 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none m-2"
                name="valres"
                onChange={handdleChangeInput}
                required
            />
        </div>
    );
};

export default Inecuaciones;

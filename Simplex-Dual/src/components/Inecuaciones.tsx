import useSimplexStore from "@/store/simplexStore";
import React, { useEffect, useState, type ChangeEvent } from "react";
import Input from "./Input";

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
            <Input
                type="text"
                name="x1"
                onChange={handdleChangeInput}
                required={true}
            />
            <label className="p-2">X1 +</label>
            <Input
                type="text"
                name="x2"
                onChange={handdleChangeInput}
                required={true}
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
            <Input
                type="text"
                name="valres"
                onChange={handdleChangeInput}
                required={true}
            />
        </div>
    );
};

export default Inecuaciones;

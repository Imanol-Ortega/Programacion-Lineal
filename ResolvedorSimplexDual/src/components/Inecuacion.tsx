import useSimplexStore from "../store/simplexStore";
import React, { useEffect, useState, type ChangeEvent } from "react";
import Input from "./Input";
import { type Inecuacion } from "../interfaces/interfaceSimplex";

interface InecuacionProps {
    index: number;
}

const Inecuaciones: React.FC<InecuacionProps> = ({ index }) => {
    const [inecuacionSimple, setInecuacionSimple] = useState<Inecuacion>({
        x1: 0,
        x2: 0,
        restriccion: 0,
        valres: 0,
    });
    const inecuaciones = useSimplexStore((state) => state.inecuaciones);
    const setInecuaciones = useSimplexStore((state) => state.setInecuaciones);
    const handdleChangeInput = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setInecuacionSimple({
            ...inecuacionSimple,
            [e.target.name]: Number(e.target.value),
        });
    };
    useEffect(() => {
        const inn = [...inecuaciones];
        inn[index] = inecuacionSimple;
        setInecuaciones(inn);
    }, [inecuacionSimple]);

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
                className="p-1 m-2 text-black rounded borde"
                name="restriccion"
                onChange={handdleChangeInput}
                required
            >
                <option value="0">{"<="}</option>
                <option value="1">{">="}</option>
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

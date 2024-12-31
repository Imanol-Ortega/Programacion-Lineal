import useSimplexStore from "@/store/simplexStore";
import React, { useEffect, useState } from "react";
import {
    convertirFO,
    convertirInecuacionesAEcuaciones,
} from "./agregarFicticias";

//

function Resolver() {
    const inecuaciones = useSimplexStore((state) => state.inecuaciones);
    const funcionObjetivo = useSimplexStore((state) => state.funcionObjetivo);
    const [resolver, setResolver] = useState({
        ecuaciones: [],
        cj: [],
        filaPivote: [],
        columnaPivote: [],
        zj: [],
        zj_cj: [],
        CK: [],
        XK: [],
        BK: [],
        pita: [],
    });
    const resolvedor = () => {
        console.log(inecuaciones);
        console.log(convertirInecuacionesAEcuaciones(inecuaciones));
        console.log(convertirFO(inecuaciones, funcionObjetivo));
    };

    useEffect(() => {
        resolvedor();
    }, []);

    return <div>Resolver</div>;
}

export default Resolver;

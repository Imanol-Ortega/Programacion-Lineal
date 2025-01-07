import useSimplexStore from "../store/simplexStore";
import { useEffect, useState } from "react";
import {
    convertirFO,
    convertirInecuacionesAEcuaciones,
} from "./agregarFicticias";

//

function Resolver() {
    const inecuaciones = useSimplexStore((state) => state.inecuaciones);
    const funcionObjetivo = useSimplexStore((state) => state.funcionObjetivo);
    const [resolver, setResolver] = useState({
        ecuaciones: convertirInecuacionesAEcuaciones(inecuaciones),
        cj: convertirFO(inecuaciones, funcionObjetivo),
        filaPivote: [],
        columnaPivote: [],
        zj: [],
        zj_cj: [],
        CK: [],
        XK: [],
        BK: [],
        pita: [],
    });
    const [iteracion, setIteracion] = useState(0);

    useEffect(() => {}, []);

    return <div>Resolver</div>;
}

export default Resolver;

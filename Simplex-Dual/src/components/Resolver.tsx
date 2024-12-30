import useSimplexStore from "@/store/simplexStore";
import React, { useEffect, useState } from "react";

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
    const resolvedor = () => {};

    useEffect(() => {
        resolvedor();
    }, []);

    return <div>Resolver</div>;
}

export default Resolver;

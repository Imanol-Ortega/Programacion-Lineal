import type {
    FuncionObjetivo,
    Inecuacion,
} from "../interfaces/interfaceSimplex";

type Ecuacion = number[];

export const convertirInecuacionesAEcuaciones = (
    inecuaciones: Inecuacion[]
): Ecuacion[] => {
    let ficticiaCounter = 3;
    let totalFicticias = 0;

    inecuaciones.forEach((inecua) => {
        if (inecua.restriccion === 0) {
            totalFicticias += 1;
        } else if (inecua.restriccion === 1) {
            totalFicticias += 2;
        }
    });
    const nuevasEcuaciones = inecuaciones.map((inecua) => {
        const ecuacionPlano: Ecuacion = [inecua.x1, inecua.x2];
        for (let i = 3; i < 3 + totalFicticias; i++) {
            ecuacionPlano.push(0);
        }
        if (inecua.restriccion === 0) {
            ecuacionPlano[ficticiaCounter - 1] = 1;
            ficticiaCounter++;
        } else if (inecua.restriccion === 1) {
            ecuacionPlano[ficticiaCounter - 1] = 1;
            ficticiaCounter++;
            ecuacionPlano[ficticiaCounter - 1] = -1;
            ficticiaCounter++;
        }
        return ecuacionPlano;
    });
    return nuevasEcuaciones;
};

export const convertirFO = (
    inecuaciones: Inecuacion[],
    funcionObjetivo: FuncionObjetivo
): Ecuacion => {
    const funcionObjetivoWithFicticias = [
        funcionObjetivo.x1,
        funcionObjetivo.x2,
    ];
    inecuaciones.forEach((inecua) => {
        if (inecua.restriccion === 0) {
            funcionObjetivoWithFicticias.push(0);
        } else if (inecua.restriccion === 1) {
            funcionObjetivoWithFicticias.push(0);
            funcionObjetivoWithFicticias.push(-1);
        }
    });

    return funcionObjetivoWithFicticias;
};

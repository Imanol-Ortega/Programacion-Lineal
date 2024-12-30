import { type Inecuacion } from "@/interfaces/interfaceSimplex";

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

    // Ahora, generamos las ecuaciones
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

import { create } from "zustand";
import {
    type Inecuacion,
    type FuncionObjetivo,
} from "@/interfaces/interfaceSimplex";
interface SimplexStoreState {
    funcionObjetivo: FuncionObjetivo;
    inecuaciones: Inecuacion[];
    setFuncionObjetivo: (funcionObjetivo: FuncionObjetivo) => void;
    setInecuaciones: (inecuaciones: Inecuacion[]) => void;
}

const useSimplexStore = create<SimplexStoreState>((set) => ({
    funcionObjetivo: { x1: 0, x2: 0, objetivo: 1 },
    inecuaciones: [],
    setFuncionObjetivo: (funcionObjetivo) => set({ funcionObjetivo }),
    setInecuaciones: (inecuaciones) => set({ inecuaciones }),
}));

export default useSimplexStore;

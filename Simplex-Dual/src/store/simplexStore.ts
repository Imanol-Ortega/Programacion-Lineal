import {create} from 'zustand';

interface FuncionObjetivo {
    x1: number;
    x2: number;
    objetivo: number;
}

interface Inecuacion {
    x1: number;
    x2: number;
    restriccion: number;
    valres: number;
}

interface SimplexStoreState {
    funcionObjetivo: FuncionObjetivo;
    inecuaciones: Inecuacion[];
    setFuncionObjetivo: (funcionObjetivo: FuncionObjetivo) => void;
    setInecuaciones: (inecuaciones: Inecuacion[]) => void;
}


export const useSimplexStore = create<SimplexStoreState>((set) => ({
    funcionObjetivo: { x1: 0, x2: 0, objetivo: 1 },
    inecuaciones: [],
    setFuncionObjetivo: (funcionObjetivo) => set({ funcionObjetivo }),
    setInecuaciones: (inecuaciones) => set({ inecuaciones }),
}));


export default useSimplexStore;
import { create } from "zustand";

interface BikeState {
    height: number;
    inseam: number;
    setHeight: (height: number) => void;
    setInseam: (inseam: number) => void;
    selectedBike: string;
    setSelectedBike: (bike: string) => void;}

export const useBikeStore = create<BikeState>((set)=>({
    height: 175,
    inseam: 80,
    selectedBike: "duke-390-2024",

    setHeight: (h:number) => set({height: h}),
    setInseam: (i:number) => set({inseam: i}),
    setSelectedBike: (id:string) => set({selectedBike: id}),
}));
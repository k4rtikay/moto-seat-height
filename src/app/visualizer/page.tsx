"use client";

import { useEffect } from "react";
import { Controls } from "@/components/visualizer/controls";
import { useSearchParams } from "next/navigation";
import { useBikeStore } from "@/store/useBikeStore";
import { Stage } from "@/components/visualizer/stage";

export default function VisualizerPage() {

    const searchParams = useSearchParams();
    const heightParams = searchParams.get("height");
    const inseamParams = searchParams.get("inseam");
    const height = useBikeStore((state) => state.height);
    const inseam = useBikeStore((state) => state.inseam);
    const setHeight = useBikeStore((state) => state.setHeight);
    const setInseam = useBikeStore((state) => state.setInseam);


    const parseParams = (val: string | null, fallback: number) => {
        const parsed = parseInt(val || "");
        return isNaN(parsed) ? fallback : parsed;
    };

    const heightValue = parseParams(heightParams, 175);
    const inseamValue = parseParams(inseamParams, 80);

    useEffect(() => {
        setHeight(heightValue);
        setInseam(inseamValue);
    }, [heightValue, inseamValue, setHeight, setInseam]);

    return (
        <div className="flex gap-4 h-screen">
            <aside>
                <Controls
                    className="bg-neutral-300 h-full p-4"
                />
            </aside>
            <main className="flex-1 p-4 overflow-y-auto">
                <h1 className="text-xl font-semibold">Visualizer Page</h1>
                <Stage></Stage>
            </main>
        </div>
    )
}
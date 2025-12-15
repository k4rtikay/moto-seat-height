"use client";

import { Controls } from "@/components/visualizer/controls";
import { useSearchParams } from "next/navigation";

export default function VisualizerPage() {

    const searchParams = useSearchParams();
    const height = searchParams.get("height");
    const inseam = searchParams.get("inseam");

    const parseParams = (val: string | null, fallback: number) =>{
        const parsed = parseInt(val || "");
        return isNaN(parsed) ? fallback : parsed;
    }

    const heightValue = parseParams(height, 175);
    const inseamValue = parseParams(inseam, 80);

    return (
        <div className="flex gap-4 h-screen">
            <aside>
                <Controls
                height={heightValue} inseam={inseamValue}
                className="bg-neutral-300 h-full p-4"
                />
            </aside>
            <h1 className="text-xl font-semibold">Visualizer Page</h1>
        </div>
    )
}
import { bikes } from "@/config/bikes";
import { useBikeStore } from "@/store/useBikeStore";
import { useMemo } from "react";
import Image from "next/image";

export function Stage() {

    const selectedBike = useBikeStore((state) => state.selectedBike);
    const setSelectedBike = useBikeStore((state) => state.setSelectedBike);

    const bike = useMemo(() => {
        return bikes.find((b) => b.id === selectedBike  || bikes[0].id);
    },[selectedBike]);

    if(!bike) { return <div>Loading....</div>; }

    return (
        <div className="flex flex-col w-full items-center">
            <h2>Stage Component</h2>
            <p>Selected Bike: {bike?.name}</p>
            <div className="w-full max-w-xl aspect-[1.4] relative">
                <Image
                src={bike?.image}
                alt={bike?.name}
                fill={true}
                />
            </div>
        </div>
    );
}
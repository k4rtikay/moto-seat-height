import { MeasurementSlider } from "./measurementSlider";
import { useBikeStore } from "@/store/useBikeStore";

interface ControlsProps {
    className?: string;
}

export const Controls: React.FC<ControlsProps> = (props) => {

    const height = useBikeStore((state) => state.height);
    const inseam = useBikeStore((state) => state.inseam);
    const setHeight = useBikeStore((state) => state.setHeight);
    const setInseam = useBikeStore((state) => state.setInseam);

    return (
        <div className={props.className}>
            Controls Component
            <div>Height: {height} cm</div>
            <MeasurementSlider min={120} max={250} step={1} value={[height]} setValue={(values)=> setHeight(values[0])} />
            <div>Inseam: {inseam} cm</div>
            <MeasurementSlider min={50} max={120} step={1} value={[inseam]} setValue={(values)=> setInseam(values[0])} />
        </div>
    );
};
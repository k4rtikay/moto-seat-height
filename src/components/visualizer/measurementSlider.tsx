import { Slider } from "@/components/ui/slider"

interface MeasurementSliderProps {
    min: number;
    max: number;
    step: number;
    value: number[];
    setValue: (val: number[]) => void;
}

export function MeasurementSlider({ min, max, step, value, setValue }: MeasurementSliderProps) {
    return (
        <div>
            <Slider max={max} step={step} min={min} value={value} onValueChange={setValue} />
        </div>
    );
}
import { Slider } from "@/components/ui/slider"

interface MeasurementSliderProps {
    min: number;
    max: number;
    step: number;
    defaultValue: number[];
    value: number[];
    setValue: (val: number[]) => void;
}

export function MeasurementSlider({ min, max, step, defaultValue, value, setValue }: MeasurementSliderProps) {
    return (
        <div>
            <Slider defaultValue={defaultValue} max={max} step={step} min={min} value={value} onValueChange={setValue} />
        </div>
    );
}
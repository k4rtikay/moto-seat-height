interface ControlsProps {
    height: number;
    inseam: number;
    className?: string;
}

export const Controls: React.FC<ControlsProps> = (props) => {
    return (
        <div className={props.className}>
            Controls Component
            <div>Height: {props.height} cm</div>
            <div>Inseam: {props.inseam} cm</div>
        </div>
    );
};
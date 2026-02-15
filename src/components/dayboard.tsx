import { forwardRef } from "react";

export default function Dayboard() {

}

const DayboardGrid = forwardRef<HTMLDivElement>(
    function DayboardGrid(props, ref) {
        return (
            <div ref={ref} className="dayboard-grid">
                <div>A</div>
                <div>B</div>
                <div>C</div>
            </div>
        );
    }
);
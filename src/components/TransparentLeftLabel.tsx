import { useEffect, useState } from "react";
import "./TransparentLeftLabel.scss";

export interface Props {
    activeDraggble: boolean;
}

const TransparentLeftLabel: React.FC<Props> = (props) => {

    const [transparentCalc, setTransparentCalc] = useState("transparentCalc")
    
    useEffect(() => {
        if (!props.activeDraggble) {
            setTransparentCalc("transparentCalc hide")
        } else {
            setTransparentCalc("transparentCalc")
        }
    }, [props.activeDraggble]);
   

    return (
        <div className={transparentCalc}>
            <div className="input-label-t">
                <div className="calculator-screen-t" ></div>
            </div>

            <div className="signs-t">
                <button className="btn-t">/</button>
                <button className="btn-t">x</button>
                <button className="btn-t">-</button>
                <button className="btn-t">+</button>
            </div>
            <div className="numbers-t">
                <button className="btn-t">7</button>
                <button className="btn-t">8</button>
                <button className="btn-t">9</button>

                <button className="btn-t">4</button>
                <button className="btn-t">5</button>
                <button className="btn-t">6</button>

                <button className="btn-t">1</button>
                <button className="btn-t">2</button>
                <button className="btn-t">3</button>

                <button className="null-t">0</button>
                <button className="btn-t">,</button>
            </div>
            <div className="equal-t">
                <button className="sign-equal-t">=</button>
            </div>
        </div>
    )
}

export default TransparentLeftLabel;
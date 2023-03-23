import LeftLabel from "./LeftLabel";
import RightLabel from "./RightLabel";
import "./Wrapper.scss";
import { useState } from "react";


const Wrapper = () => {

    const [activeDraggble, setActiveDraggble] = useState(false);

    function changeDraggble() {
        setActiveDraggble(activeDraggble ? false : true);
    }
    let runtimeBtnClass = activeDraggble
        ? "passive"
        : "active";

    let ctorBtnClass = activeDraggble
        ? "active"
        : "passive";

    return (
        <div className="container">
            <div className="buttons">
                <button className={runtimeBtnClass} onClick={changeDraggble}>
                    <div className="img-btn">
                        <img src="/imgs/eye.svg" />
                    </div>
                    Runtime</button>
                <button className={ctorBtnClass} onClick={changeDraggble}>
                    <div className="img-btn">
                        <img src="/imgs/selector.svg" />
                    </div>
                    Constructor</button>
            </div>
            <div className="label-left">
                <LeftLabel activeDraggble={activeDraggble} />
            </div>
            <div className="label-right">
                <RightLabel activeDraggble={activeDraggble}/>
            </div>
        </div >
    )
}
export default Wrapper;
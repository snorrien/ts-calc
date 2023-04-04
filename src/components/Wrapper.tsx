import LeftLabel from "./LeftLabel";
import RightLabel from "./RightLabel";
import TransparentLeftLabel from "./TransparentLeftLabel";
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
                <div className="Transparent">
                    <TransparentLeftLabel activeDraggble={activeDraggble}/>
                    <div className="Original">
                        <LeftLabel activeDraggble={activeDraggble} />
                    </div>
                </div>

            </div>
            <div className="label-right">
                <RightLabel activeDraggble={activeDraggble} />
            </div>
        </div >
    )
}
export default Wrapper;
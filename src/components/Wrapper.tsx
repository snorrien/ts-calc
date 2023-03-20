import LeftLabel from "./LeftLabel";
import RightLabel from "./RightLabel";
import "./Wrapper.scss";


const Wrapper = () => {
    return (
        <div className="container">
            <div className="buttons">
                <button className="runtime">
                    <div className="img-btn">
                        <img src="/imgs/eye.svg" />
                    </div>
                    Runtime</button>
                <button className="constructor">
                    <div className="img-btn">
                        <img src="/imgs/selector.svg" />
                    </div>
                    Constructor</button>
            </div>
            <div className="label-left">
                <LeftLabel />
            </div>
            <div className="label-right">
                <RightLabel />
            </div>
        </div >
    )
}
export default Wrapper;
import "./LeftLabel.scss";

const LeftLabel = () => {
    return (
        <div className="calculate-maket">
            <div className="input-label">
                <input type="text" className="calculator-screen" value="0"></input>
            </div>
            <div className="signs">
                <button className="btn">/</button>
                <button className="btn">x</button>
                <button className="btn">-</button>
                <button className="btn">+</button>
            </div>
            <div className="numbers">
                <button className="btn">7</button>
                <button className="btn">8</button>
                <button className="btn">9</button>

                <button className="btn">4</button>
                <button className="btn">5</button>
                <button className="btn">6</button>

                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn">3</button>

                <button className="null">0</button>
                <button className="btn">,</button>
            </div>
            <div className="equal">
                <button className="sign-equal">=</button>
            </div>

        </div>
    )
}
export default LeftLabel;
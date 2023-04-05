import React, { useEffect } from "react";
import "./LeftLabel.scss";
import { useAppDispatch, useAppSelector } from "../hooks";
import { add, equal, multiplication, separation, subtraction, update } from "../features/calculator/calculatorSlice";

export interface Props {
    activeDraggble: boolean;
}

const LeftLabel: React.FC<Props> = (props) => {
    useEffect(() => {
        window.addEventListener('dragstart', (event: any) => {
            event.dataTransfer.setData("text/plain", event.target.id);

            event.target.style.opacity = "0.4"; 
        });
    });

    const dispatch = useAppDispatch()
    const display = useAppSelector((state) =>  state.calculator.display);


    const doAction = (action: any) => {
        if (!props.activeDraggble) {
            action();
        }
    }

    return (
        <div className="calculate-maket">
            <div className="input-label"
                id="input-label"
                draggable={props.activeDraggble}>
                <div className="calculator-screen" id="input">{display}</div>
            </div>
            
            <div className="signs"
                 id="signs"
            draggable={props.activeDraggble}>
                <button className="btn"  onClick={() => doAction(() => dispatch(separation()))}>/</button>
                <button className="btn" onClick={() => doAction(() => dispatch(multiplication()))}>x</button>
                <button className="btn" onClick={() => doAction(() => dispatch(subtraction()))}>-</button>
                <button className="btn" onClick={() => doAction(() => dispatch(add()))}>+</button>
            </div>
            <div className="numbers"
                id="numbers"
            draggable={props.activeDraggble}>
                <button className="btn" onClick={() => doAction(() => dispatch(update("7")))}>7</button>
                <button className="btn" onClick={() => doAction(() => dispatch(update("8")))}>8</button>
                <button className="btn" onClick={() => doAction(() => dispatch(update("9")))}>9</button>

                <button className="btn" onClick={() => doAction(() => dispatch(update("4")))}>4</button>
                <button className="btn" onClick={() => doAction(() => dispatch(update("5")))}>5</button>
                <button className="btn" onClick={() => doAction(() => dispatch(update("6")))}>6</button>

                <button className="btn" onClick={() => doAction(() => dispatch(update("1")))}>1</button>
                <button className="btn" onClick={() => doAction(() => dispatch(update("2")))}>2</button>
                <button className="btn" onClick={() => doAction(() => dispatch(update("3")))}>3</button>

                <button className="null" onClick={() => doAction(() => dispatch(update("0")))}>0</button>
                <button className="btn" onClick={() => doAction(() => dispatch(update(".")))}>.</button>
            </div>
            <div className="equal"
                id="equal"
            draggable={props.activeDraggble}>
                <button className="sign-equal" onClick={() => doAction(() => dispatch(equal()))} >=</button>
            </div>
        </div>
    )
}
export default LeftLabel;
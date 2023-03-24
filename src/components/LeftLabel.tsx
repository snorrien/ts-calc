import React, { useEffect, useState } from "react";
import "./LeftLabel.scss";

export interface Props {
    activeDraggble: boolean;
}

const LeftLabel: React.FC<Props> = (props) => {

    useEffect(() => {
        window.addEventListener('dragstart', (event: any) => {
            event.dataTransfer.setData("text/plain", event.target.id);

            event.target.style.opacity = "0.5"; 
        });
    });


    return (
        <div className="calculate-maket">
            <div className="input-label"
                id="input-labe"
                draggable={props.activeDraggble}>
                <input type="text" className="calculator-screen"></input>
            </div>
            
            <div className="signs"
                 id="signs"
            draggable={props.activeDraggble}>
                <button className="btn">/</button>
                <button className="btn">x</button>
                <button className="btn">-</button>
                <button className="btn">+</button>
            </div>
            <div className="numbers"
                id="numbers"
            draggable={props.activeDraggble}>
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
            <div className="equal"
                id="equal"
            draggable={props.activeDraggble}>
                <button className="sign-equal" >=</button>
            </div>
        </div>
    )
}
export default LeftLabel;
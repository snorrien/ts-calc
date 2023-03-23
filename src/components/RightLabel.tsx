import "./RightLabel.scss";
import React, { useState, useEffect } from "react";

export interface Props {
    activeDraggble: boolean;
}

const RightLabel: React.FC<Props> = (props) => {

    const [maketClass, setMaketClass] = useState("maketClass")
    
    useEffect(() => {
        const element = document.getElementById('maket');
        if (element !=null)
        element.addEventListener('dragenter', (event) => {
            console.log('enter')
            setMaketClass("maketClass activeMaket");
        });
    });

    const dragOver = function (event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
    }
    
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        console.log('element dropped')
    }

    return (
        <div id="maket" className={maketClass}
            onDrop={handleDrop}>
            <div className="empty-maket-content" >
                <img src="/imgs/img-add.svg"></img>
                <p className="phrase-move">Перетащите сюда</p>
                <p className="phrase-move-any">любой элемент из левой панели</p>
            </div>
        </div>
    )
}
export default RightLabel;

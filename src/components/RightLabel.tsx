import "./RightLabel.scss";
import React, { useState, useEffect } from "react";

export interface Props {
    activeDraggble: boolean;
}

const RightLabel: React.FC<Props> = (props) => {

    const [maketClass, setMaketClass] = useState("maketClass")
    
    useEffect(() => {
        const element = document.getElementById('maket');
        if (!element) {
            return;
        }
        element.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        element.addEventListener('dragenter', (event) => {
            console.log('dragenter')
            setMaketClass("maketClass activeMaket");
        });

        element.addEventListener('dragleave', (event) => {
            console.log('dragleave')
            setMaketClass("maketClass");
        });

        element.addEventListener('drop', (event: any) => {
            event.preventDefault();
            const sourceId = event.dataTransfer.getData("text/plain");
            const component = document.getElementById(sourceId);

            
            setMaketClass("maketClass");
            if (component) {
                element.append(component);
                component.style.opacity = "1"; // set opacity to 100%
            }
        });
    });

    return (
        <div  id="maket" className={maketClass}
            >
            <div className="empty-maket-content" >
                <img src="/imgs/img-add.svg"></img>
                <p className="phrase-move">Перетащите сюда</p>
                <p className="phrase-move-any">любой элемент из левой панели</p>
            </div>
        </div>
    )
}
export default RightLabel;

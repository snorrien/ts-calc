import "./RightLabel.scss";

const RightLabel = () => {
    return (
        <div className="empty-maket">
            <div className="empty-maket-content">
                <img src="/imgs/img-add.svg"></img>
                <p className="phrase-move">Перетащите сюда</p>
                <p className="phrase-move-any">любой элемент из левой панели</p>
            </div>
        </div>
    )
}
export default RightLabel;
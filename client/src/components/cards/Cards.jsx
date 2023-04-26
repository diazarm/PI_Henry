import Card from "../card/Card";
import style from "../cards/Cards.module.css"

function Cards(){
    return(
        <div className={`${style.card_list}`}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};

export default Cards;
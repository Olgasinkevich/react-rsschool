import React from 'react';
import TOYS, {ToyType} from "./data";
import Card from "./Card";


export default function Cards({cards}: {cards: ToyType[]}): JSX.Element {
      return (
        <div className="cards-wrapper">
            <>
                {cards.map((item) => <Card data={item}/>)};
            </>
        </div>
    )
}

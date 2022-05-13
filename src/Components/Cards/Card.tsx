import React from 'react';
import Frame from "./Frame/Frame";
import {ToyType} from "./data";


type CardType = { [key: string]: string };
const TOY_INFO_TITLE: CardType = {
    num: '',
    name: '',
    count: 'Количество: ',
    year: 'Год покупки: ',
    shape: 'Форма: ',
    color: 'Цвет: ',
    size: 'Размер: ',
    favorite: 'Любимая: ',
};

type PropsType = { data: ToyType; children?: JSX.Element }

export default function Card(props: PropsType): JSX.Element {

    const list = Object.entries(props.data).map(([key, value]) => {
            switch(key) {
                case 'name':
                    return (<p className='toy-card-title'>{value}</p>)

                case 'num':
                    return (<img className='toy-card-image' src={`./assets/toys/${value}.png`}/>)

                case 'favorite':
                    return (<p className='toy-card-text'>
                        {TOY_INFO_TITLE[key] + (value ? 'да' : 'нет')}
                    </p>)

                default:
                    return (<p className='toy-card-text'>
                        {TOY_INFO_TITLE[key] + value}
                    </p>)
            }
        }
    );

    return (
        <Frame className='card'>
            <>{list}</>
        </Frame>
    );
};

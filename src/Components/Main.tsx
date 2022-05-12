import React, {useMemo, useState} from 'react';
import Cards from "./Cards/Cards";
import Select from "./UI/Select";
import SearchForm from "./UI/SearchForm";
import TOYS, {ToyType} from "./Cards/data";

const Main = (): JSX.Element => {
    const [items, setItems] = useState(TOYS);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    function getSortedCards () {
        console.log('working');
        if(selectedSort) {
            return [...items].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return items;
    }
    const sortedCards = useMemo(()=>{

    }, [selectedSort, items]);

    const sortCards = (sort: 'name' | 'year'): void => {
        setSelectedSort(sort);
        console.log(sort);
        setItems([...items].sort((a, b) => a[sort].localeCompare(b[sort])));

    }
    return (
        <main className="main">
            <div className='container' style={{justifyContent: 'space-around'}}>

                <div className="header__form-wrapper">
                    <input value={searchQuery} onChange={event => setSearchQuery(event.target.value)}
                           type="search" className="search border-home-page" placeholder='Search' autoComplete="off"/>
                </div>

                <Select
                    value={selectedSort}
                    onChange={sortCards}
                    defaultValue={'Sorting'}
                    options={[
                        {value: 'name', name: 'in name'},
                        {value: 'year', name: 'in year'}

                    ]}/>
            </div>
            <div className="container container-toys-page">
                <Cards cards={items}/>
            </div>
        </main>
    );
}
export default Main;
import React, {useMemo, useState, useEffect, useCallback} from 'react';
//components
import Cards from "./Cards/Cards";
import Select, {SortType} from "./UI/Select";
import SearchForm from "./UI/SearchForm";
import Modal from "./UI/Modal/Modal";
//data
import TOYS, {ToyType} from "./Cards/data";


const Main = (): JSX.Element => {
    const [items, setItems] = useState<ToyType[]>(TOYS);
    const [selectedSort, setSelectedSort] = useState<SortType>();
    const [searchQuery, setSearchQuery] = useState('');
    const [modal, setModal] = useState(false);

    const sortedCards = useMemo(()=>{
        console.log('working!!!');
        if(selectedSort) {
            return [...items].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return items;

    }, [selectedSort, items]);

    const sortAndSearchCards = useMemo(()=>{
return sortedCards.filter(items => items.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedCards])

    useEffect(() => {
        if(!sortAndSearchCards.length) {
          setModal(true);
        }
    }, [sortAndSearchCards, setModal]);

    const sortCards = (sort: SortType): void => {
        setSelectedSort(sort);
       /* setItems([...items].sort((a, b) => a[sort].localeCompare(b[sort])));*/
            }
    const onModalPress= useCallback(()=> {
        setModal(false);
        setSearchQuery('');
    }, [setModal, setSearchQuery])
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
                {!modal ?
                           <Cards cards={sortAndSearchCards}/>
                :
                <Modal visible={modal} onPress={ onModalPress}>
                    <h1 className={'textTitle'}>No cards!</h1>
                </Modal>}
            </div>
        </main>
    );
}
export default Main;
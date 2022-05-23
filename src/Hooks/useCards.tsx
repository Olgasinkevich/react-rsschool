import {useMemo, useState} from "react";
import {ToyType} from "../Components/Cards/data";
import {SortType} from "../Components/UI/Select";

export const useSortedCards = (items:ToyType[], selectedSort?:SortType):ToyType[] => {
       const sortedCards = useMemo(()=>{
        console.log('working!!!');
        if(selectedSort) {
            return [...items].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return items;

    }, [selectedSort, items]);
  return sortedCards;
}

type useCardsType = (items:ToyType[], searchQuery:string, selectedSort?:SortType)=>ToyType[];
export const useCards: useCardsType = (items, searchQuery, selectedSort)=>{
    const sortedCards= useSortedCards(items, selectedSort);
    const sortAndSearchCards = useMemo(()=>{
        return sortedCards.filter(items => items.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedCards])
    return sortAndSearchCards;
}
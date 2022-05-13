import React, {useState} from 'react';

const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div className="header__form-wrapper">

            <input value={searchQuery} onChange={event => setSearchQuery(event.target.value)} type="search" className="search border-home-page" placeholder='Search' autoComplete="off"/>

        </div>
    );
};

export default SearchForm;
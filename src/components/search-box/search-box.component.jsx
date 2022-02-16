import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => { // to make it dynamic, may want to search sth else
    <input 
        className='search' // css
        type='search' 
        placeholder={placeholder}
        onChange={ handleChange} 
    />
};
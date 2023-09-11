import React, { ReactEventHandler, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './homesearch.scss';
import { textChange } from '../features/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

function HomeSearch() {
    const [currSearch, setCurrSearch] = useState('');
    const dispatch = useDispatch();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log('Val-->', e.target.value);
        setCurrSearch(e.target.value);
    }

    const handleSearchClick = (): void => {
        console.log('handleSearchClick-->', currSearch);
        //Search Validations Here
        dispatch(textChange(currSearch));
    }

    return (
        <section className='container-home-search'>
            <div className='wrapper-search'>
                <TextField id="standard-basic" label="Search" placeholder='Search here...' variant="outlined" color="secondary" className={'textField'} onChange={handleSearchChange} value={currSearch} />
                <Button variant="outlined" onClick={handleSearchClick}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-pink-500" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
                </Button>
            </div>
        </section>
    )
}

export default HomeSearch;
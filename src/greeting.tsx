import React, { useState } from 'react';
import './main.css';
const testImage = require('./test.png')


export function GreetPerson({ name }: { name?: string }) {
    return <h1>{`Hello Again ${name || 'stranger'}!`}</h1>;
}

export function SearchPerson() {
    const [search, setSearch] = useState('');

    return <>
        <input
            className={'search'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={'Search...'}
        />
        <button
            onClick={() => console.log({ search })}
        >{'search'}</button>
    </>
}


export function TestImage() {
    return <>
        <p>{'Test image'}</p>
        <img src={testImage} />
    </>
}
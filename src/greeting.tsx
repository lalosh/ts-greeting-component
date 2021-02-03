import React, { useState } from 'react';
import './main.css';
import * as LablebSDK from '@lableb/javascript-sdk';
const testImage = require('./test.png')



export function GreetPerson({ name }: { name?: string }) {
    return <h1>{`Hello Again ${name || 'stranger'}!`}</h1>;
}

export function SearchPerson({ options }: { options?: any }) {
    const [search, setSearch] = useState('');

    let client = LablebSDK.init(options);

    return <>
        <input
            className={'search'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={'Search...'}
        />
        <button
            onClick={() => {
                try {
                    console.log({ search })
                    client.search({
                        query: search
                    });
                } catch (error) {
                    console.error(error)
                }
            }}
        >{'search'}</button>
    </>
}


export function TestImage() {
    return <>
        <p>{'Test image'}</p>
        <img src={testImage} />
    </>
}
import React, { useState } from 'react';

export function GreetPerson({ name }: { name?: string }) {
    return <h1>{`Hello Again ${name || 'stranger'}!`}</h1>;
}

export function SearchPerson() {
    const [search, setSearch] = useState('');

    return <>
        <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={'Search...'}
        />
        <button
            onClick={() => console.log({ search })}
        >{'search'}</button>
    </>
}
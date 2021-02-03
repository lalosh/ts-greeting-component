import React from 'react';

export function GreetPerson({ name }: { name?: string }) {
    return <h1>{`Hello ${name || 'stranger'}!`}</h1>;
}
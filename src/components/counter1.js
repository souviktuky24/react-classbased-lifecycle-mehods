import React, { useEffect } from 'react';

function Counter1({props}) {

    useEffect(() => {
        console.log("Fuctional component : Updating..");

        return () => {
            console.log("Fuctional component : Removed");
        }
    });

    return (
        <div>
            <h1>{props}</h1>
        </div>
    );
}

export default Counter1;
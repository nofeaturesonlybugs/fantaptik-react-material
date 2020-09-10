import React from 'react';

const Hide = ( { when, children } ) => {
    return (<>
        {when ? null : children}
    </>);
}

export default Hide;
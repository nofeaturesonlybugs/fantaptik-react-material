import React from 'react';

const Show = ( { when, children } ) => {
    return (<>
        {when ? children : null}
    </>);
};

export default Show;
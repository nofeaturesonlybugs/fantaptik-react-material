import React from 'react';
import PropTypes from 'prop-types';

const Swap = ( { children, when } ) => {
    let [ first, second ] = Array.isArray( children ) ? children : [ children ];
    first = first || null;
    second = second || null;
    return (<>
        {when ? [ second, first ] : [ first, second ]}
    </>);
};

Swap.propTypes = {
    /** When true the children are swapped. */
    when : PropTypes.bool.isRequired,
};

export default Swap;
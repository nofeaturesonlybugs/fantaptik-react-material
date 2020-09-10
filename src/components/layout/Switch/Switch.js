import React from 'react';
import PropTypes from 'prop-types';

import SwitchCase from './SwitchCase';

const Switch = ( { children, value } ) => {
    children = children || [];
    // coerce single child into an array.
    children = Array.isArray( children ) ? children : [ children ];
    // only children of type SwitchCase with value === value
    // TODO Update to use React.Children API.
    children = children.filter( child => child.type && child.type === SwitchCase && child.props.value === value );
    return (<>
        {children.length > 0 ? children : null}
    </>);
}

Switch.Case = SwitchCase;

Switch.propTypes = {
    /** The value to test for; all children with matching value are rendered. */
    value : PropTypes.any.isRequired,
}

export default Switch;
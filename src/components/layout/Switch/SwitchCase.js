import React from 'react';
import PropTypes from 'prop-types';

const SwitchCase = ( { children } ) => {
    return <>{children}</>;
}

SwitchCase.propTypes = {
    /** The value to switch on. */
    value : PropTypes.any.isRequired,
}

export default SwitchCase;
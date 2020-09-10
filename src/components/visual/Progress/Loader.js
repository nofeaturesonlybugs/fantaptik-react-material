import React from 'react';
import PropTypes from 'prop-types';

import { merge } from '../common';
import hocs from '../hocs';

const Loader = ( { className, ...props } ) => {
    className = merge`${className} progress`;
    return (
        <div {...props} className={className}>
            <div className="indeterminate"></div>
        </div>
    );
}

Loader.propTypes = {
    className : PropTypes.string,
    
    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,

};

export default hocs.Show( hocs.Hide( Loader ) );
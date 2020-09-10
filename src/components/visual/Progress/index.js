import React from 'react';
import PropTypes from 'prop-types';

import { merge } from '../../common';
import hocs from '../../hocs';

const Progress = ( { className, value, ...props } ) => {
    value = typeof value === "number" ? value : (typeof value === "string" ? parseInt( value, 10 ) : 0);
    value = value !== NaN ? value : 0;
    const style = {
        width : value + "%",
    };
    className = merge`${className} progress`;
    return (
        <div className={className}>
            <div className="determinate" style={style} />
        </div>
    );
}

Progress.propTypes = {
    className : PropTypes.string,
    
    /** Value from [0, 100] inclusive. */
    value : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,

    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,

};

Progress.defaultProps = {
    value : "0",
};

export default hocs.Show( hocs.Hide( Progress ) );
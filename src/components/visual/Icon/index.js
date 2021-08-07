import React from 'react';
import PropTypes from 'prop-types';

import { merge } from '../../common';
import hocs from '../../hocs';

const Icon = ( { className, children, large, medium, small, tiny, ...props } ) => {
    const classes = [ "material-icons" ];
    large === true && classes.push( "large" );
    medium === true && classes.push( "medium" );
    small === true && classes.push( "small" );
    tiny === true && classes.push( "tiny" );
    //
    className = merge`${className} ${classes}`;
    //
    return (
        <i className={className} {...props}>{children}</i>
    )
};

Icon.propTypes = {
    /** Only a single child is allowed; should be one of the strings defined by Material+Icons. */
    children : PropTypes.string.isRequired,

    className : PropTypes.string,

    /** Makes the icon tiny sized. */
    tiny : PropTypes.bool,

    /** Makes the icon small sized.  */
    small : PropTypes.bool,

    /** Makes the icon medium sized. */
    medium : PropTypes.bool,
    
    /** Makes the icon large sized. */
    large : PropTypes.bool,

    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,

};

Icon.defaultProps = {
    children : "ac_unit",
}

export default hocs.Show( hocs.Hide( Icon ) );
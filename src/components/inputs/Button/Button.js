import React from 'react';
import PropTypes from 'prop-types';

import hocs from '../../hocs';
import { merge } from '../../common';

import './Button.css';

const Button = ( { children, className, large, round, small, ...props } ) => {
    let addClasses = [ "btn" ];
    if( round === true ) {
        addClasses = [ "btn-floating" ];
    }
    if( small === true ) {
        addClasses.push( "btn-small" );
    }
    if( large === true ) {
        addClasses.push( "btn-large" );
    }

    addClasses.push( "waves-effect", "waves-light" );
    className = merge`${addClasses} ${className}`
    return (
        <button {...props} className={className}>{children}</button>
    );
}

Button.propTypes = {
    /** Setting to `true` will disable the button. */
    disabled : PropTypes.bool,

    /** Create a large button by setting this to true. */
    large : PropTypes.bool,

    /** Event handler for button being clicked. */
    onClick : PropTypes.func,

    /** Setting to `true` will make the button display as round. */
    round : PropTypes.bool,

    /** Create a small button by setting this to true. */
    small : PropTypes.bool,

    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,

}

export default hocs.Show( hocs.Hide( Button ) );
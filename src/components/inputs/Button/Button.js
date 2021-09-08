import React from 'react';
import PropTypes from 'prop-types';

import hocs from '../../hocs';
import { merge } from '../../common';

import Icon from '../../visual/Icon';

import './Button.css';

const Button = ( { children, className, icon, iconProps = {}, label = "", large, round, small, ...props } ) => {
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
    //
    if( typeof icon === "string" ) {
        icon = <Icon {...iconProps}>{icon}</Icon>
    }
    //
    addClasses.push( "waves-effect", "waves-light" );
    className = merge`${addClasses} ${className}`
    return (
        <button {...props} className={className}>{icon}{label}{children}</button>
    );
}

Button.propTypes = {
    /**
     * `children` are rendered last after `icon` and `label`.
     * 
     * For constistent behavior it's probably best to add icon+label via props OR children but not
     * a combination of both.
     */
    children : PropTypes.node,

    /** Setting to `true` will disable the button. */
    disabled : PropTypes.bool,

    /** `icon` is a shorter way to add an `<Icon />` to a button. */
    icon : PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.node,
    ] ),

    /**
     * If `icon` is a string then `iconProps` are the props to spread onto the created `<Icon />`.  `iconProps`
     * is ignored if `icon` is an instance of `<Icon />`.
     */
    iconProps : PropTypes.object,

    /** `label` is a shorter way to add a text label than with children. */
    label : PropTypes.string,

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
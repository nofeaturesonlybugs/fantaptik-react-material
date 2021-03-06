import React from 'react';
import PropTypes from 'prop-types';

import { merge } from '../../common';

const SlideMenuItem = ( { children, className, onClick, selected, value, ...props } ) => {
    const addClass = [ "slide-menu-item" ];
    if( selected ) {
        addClass.push( "selected" );
    }
    className = merge`${addClass} ${className}`;
    return (
        <div {...props} className={className} onClick={() => onClick( value )}>
            {children}
        </div>
    );
}

SlideMenuItem.displayName = 'SlideMenu.Item';

SlideMenuItem.propTypes = {
    /** Each item within a `SlideMenu` should have a unique `value`. */
    value : PropTypes.string.isRequired,

    /**
     * Called when the item is clicked; `value => console.log( value + ' was clicked.' );`
     * 
     * @ignore For styleguidist
     */
    onClick : PropTypes.func,

    /** 
     * When `true` indicates the selected item in the `SlideMenu`.
     * 
     * @ignore For styleguidist
     */
    selected : PropTypes.bool,
}

export default SlideMenuItem;
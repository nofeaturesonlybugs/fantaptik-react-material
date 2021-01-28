import React, { Component } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';

import hocs from '../../hocs';
import { merge } from '../../common';

import Button from '../../inputs/Button/Button';
import Icon from '../../visual/Icon';

import './Fab.css';

const FabItem = ( { icon, ...props } ) => {
    return (
        <li>
            <Button {...props}>
                <Icon show={icon}>{icon}</Icon>
            </Button>
        </li>
    );
}

const FabItems = ( { children, className, round = true, ...props } ) => {
    let { large, small } = props;
    large = large ? "large" : "";
    small = small ? "small" : "";
    return (
        <ul className={merge`${large} ${small}`}>
        { React.Children.map( children, child => {
            const { className : childClassName, ...childProps } = child.props;
            const newProps = {
                round,
                ...props,
                ...childProps,
                className : merge`${className} ${childClassName}`,
            }
            return React.cloneElement( child, newProps );
        } ) }
        </ul>
    );
}

const Fab = ( { children, className, icon, large, small, open, ...props } ) => {
    let fabLarge = large ? "large" : "";
    let fabSmall = small ? "small" : "";
    const getElem = () => document.querySelector( 'div.fixed-action-btn' );
    const init = () => {
        return M.FloatingActionButton.init( getElem() );
    }
    React.useEffect( () => {
        const elem = init();
        if( open === true ) {
            elem.open();
        } else {
            // elem.close(); // Material docs indicate this should work but it does not appear to.
            getElem().classList.remove( "active" );
        }
        return () => {
            elem.destroy();
        };
    }, [open] );
    className = merge`${className} fixed-action-btn ${fabLarge} ${fabSmall}`;
    return (
        <div className={className} {...props}>
            <Button round large={large} small={small}>
                <Icon show={icon} large={large} small={small}>{icon}</Icon>
            </Button>
            {children}
        </div>
    );
}

Fab.Items = hocs.Show( hocs.Hide( FabItems ) );
Fab.Item = hocs.Show( hocs.Hide( FabItem ) );

Fab.propTypes = {
    /** Create a large button by setting this to true. */
    large : PropTypes.bool,

    /** Create a small button by setting this to true. */
    small : PropTypes.bool,

    /** If `true` then the `Fab` will render open. */
    open : PropTypes.bool,
}

export default hocs.Show( hocs.Hide( Fab ) );
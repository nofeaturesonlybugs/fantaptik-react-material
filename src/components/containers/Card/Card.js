import React from 'react';
import PropTypes from 'prop-types';

import { merge } from '../../common';

import hocs from '../../hocs';

import CardActions from './CardActions';
import CardTitle from './CardTitle';

// TODO Card.Image, Card.Reveal, Card.Fab, Card.Horizontal
const Card = ( { children, className, ...props } ) => {
    let title = null;
    let actions = null;
    //
    children = React.Children.map( children, child => {
        if( child.type === CardActions ) {
            actions = child;
        } else if( child.type === CardTitle ) {
            title = child;
        } else {
            return child;
        }
        return null;
    } );
    //
    className = merge`card ${className}`;
    //
    return (
        <div {...props} className={className}>
            <div className="card-content">
                {title}
                {children}
            </div>
            {actions}
        </div>
    );
};

Card.Actions = CardActions;
Card.Title = CardTitle;

Card.propTypes = {
    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,
};

export default hocs.Show( hocs.Hide( Card ) );
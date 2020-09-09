import React from 'react';
import PropTypes from 'prop-types';

import hocs from '../../hocs';
import { merge } from '../../common';

import ListItem from './ListItem';

const ListGroup = ( { children, className, title, ...props } ) => {
    className = merge`list-group collection-header ${className}`;
    children = React.Children.map( children, child => {
        if ( React.isValidElement( child ) ) {
            let { props : { className : childClassName } } = child;
            childClassName = merge`list-item collection-item ${childClassName}`;
            return React.cloneElement( child, { className : childClassName } );
        } else {
            return (
                <ListItem>{child}</ListItem>
            );
        }
    } );
    return (
        <>
            <div {...props} className={className}>
                {title}
            </div>
            {children}
        </>
    );
}

ListGroup.displayName = 'List.Group';

ListGroup.propTypes = {
    /** Specifies `title` of the group. */
    title : PropTypes.string,
}

ListGroup.defaultProps = {
    title : '',
}

// TODO Update properties for Show, Hide
export default hocs.Show( hocs.Hide( ListGroup ) );
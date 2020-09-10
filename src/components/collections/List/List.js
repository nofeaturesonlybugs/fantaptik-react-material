import React from 'react';
import PropTypes from 'prop-types';

import hocs from '../../hocs';
import { merge } from '../../common';

import ListGroup from './ListGroup';
import ListItem from './ListItem';

const List = ( { children, className, ...props } ) => {
    className = merge`list collection ${className}`;
    let withGroup = false;
    children = React.Children.map( children, child => {
        if( child.type === ListGroup ) {
            withGroup = true;
            return child;
        } else if ( child.type === ListItem ) {
            return child;
        } else if ( React.isValidElement( child ) ) {
            let { props : { className : childClassName } } = child;
            childClassName = merge`list-item collection-item ${childClassName}`;
            return React.cloneElement( child, { className : childClassName } );
        } else {
            return (
                <ListItem>{child}</ListItem>
            );
        }
    } );
    if( withGroup ) {
        className = merge`with-group with-header ${className}`;
    }
    return children.length > 0 ? (
        <div {...props} className={className}>{children}</div>
    ) : null;
};

List.Group = ListGroup;
List.Item = ListItem;

List.propTypes = {
    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,
}

export default hocs.Show( hocs.Hide( List ) );
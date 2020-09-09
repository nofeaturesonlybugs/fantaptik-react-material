import React from 'react';
import PropTypes from 'prop-types';

import hocs from '../../hocs';
import { merge } from '../../common';

import { sizeToClassName } from './common';
import GridItem from './GridItem';

const Grid = ( { auto, children, className, size, ...props } ) => {
    auto = auto || [12];
    const autoClassName = sizeToClassName( auto );
    className = merge`grid row ${sizeToClassName( size )} ${className}`;
    children = React.Children.map( children, child => {
        if( child.type === Grid || child.type === GridItem ) {
            let { props : { size : childSize } } = child;
            if( childSize === undefined ) {
                return React.cloneElement( child, { size : auto } );
            } else {
                return child;
            }
        } else if( React.isValidElement( child ) ) {
            let { props : { className : childClassName, grid : childGrid } } = child;
            if( childGrid === undefined ) {
                childClassName = merge`${autoClassName} ${childClassName}`;
                return React.cloneElement( child, { className : childClassName } );
            } else {
                childClassName = merge`${sizeToClassName( childGrid )} ${childClassName}`;
                return React.cloneElement( child, { className : childClassName });
            }
        } else {
            return (
                <GridItem size={auto}>{child}</GridItem>
            );
        }
    } );
    return (
        <div {...props} className={className}>{children}</div>
    );
}

Grid.Item = GridItem;


Grid.propTypes = {
    /** Specifies `size` for children that are not `Grid` or `Grid.Item` elements; see *Understanding Size Properties*. */
    auto : PropTypes.arrayOf( PropTypes.number ),

    /** Specifies `size` when a child of `Grid`; see *Understanding Size Properties*. */
    size : PropTypes.arrayOf( PropTypes.number ),

    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,
}

Grid.defaultProps = {
    auto : [12],
}

export default hocs.Show( hocs.Hide( Grid ) );

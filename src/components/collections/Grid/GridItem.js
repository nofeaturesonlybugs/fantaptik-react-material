import React from 'react';
import PropTypes from 'prop-types';

import hocs from '../../hocs';
import { merge } from '../../common';

import { sizeToClassName } from './common';

const GridItem = ( { children, className, size, ...props } ) => {
    className = merge`${sizeToClassName( size )} ${className}`;
    return (
        <div {...props} className={className}>{children}</div>
    );
}

GridItem.displayName = 'Grid.Item';

GridItem.propTypes = {
    /** See *Understanding Size Properties* under **Grid**.  */
    size : PropTypes.arrayOf( PropTypes.number ),
}

GridItem.defaultProps = {
    size : [12],
}

// TODO Document properties for Show, Hide
export default hocs.Show( hocs.Hide( GridItem ) );
import React from 'react';
import PropTypes from 'prop-types';

import hocs from '../../hocs';
import { merge } from '../../common';

const ListItem = ( { active, children, className, ...props } ) => {
    const addClasses = [ 'list-item', 'collection-item' ];
    if( active === true ) {
        addClasses.push( 'active' );
    }
    className = merge`${addClasses} ${className}`;
    return <div {...props} className={className}>{children}</div>
};

ListItem.displayName = 'List.Item';

ListItem.propTypes = {
    /** Indicates item is active or highlighted. */
    active : PropTypes.bool,
}

ListItem.defaultProps = {
    active : false,
}

// TODO Update properties for Show, Hide
export default hocs.Show( hocs.Hide( ListItem ) );
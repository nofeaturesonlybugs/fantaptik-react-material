import React from 'react';
import PropTypes from 'prop-types';

import hocs from '../../hocs';
import { merge } from '../../common';

const CollapsibleItem = ( { children, className, style, title, ...props } ) => {
    className = merge`collapsible-item ${className}`;
    return (
        <li className={className} style={style}>
            <div className="collapsible-header">{title}</div>
            <div className="collapsible-body">{children}</div>
        </li>
    );
}

CollapsibleItem.displayName = 'Collapsible.Item';
CollapsibleItem.propTypes = {
    /** The content to render as the `title`. */
    title : PropTypes.node,

    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,
}
CollapsibleItem.defaultProps = {
}

export default hocs.Show( hocs.Hide( CollapsibleItem ) );

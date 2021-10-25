import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';

import hocs from '../../hocs';
import { merge } from '../../common';

import CollapsibleItem from './CollapsibleItem';

const Collapsible = ( { accordion, children, className, style, ...props } ) => {
    const ref = React.useRef( null );
    React.useEffect( () => {
        let options = { accordion };
        let instances = M.Collapsible.init( ref.current, options );
        return () => {
            instances.destroy();
        };
    }, [accordion] );
    className = merge`collapsible ${className}`;
    return (
        <ul ref={ref} className={className} style={style}>
            {children}
        </ul>
    );
}

Collapsible.Item = CollapsibleItem;

Collapsible.propTypes = {
    /** Set to `true` to only allow a single child to expand at a time. */
    accordion : PropTypes.bool,

    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,
}
Collapsible.defaultProps = {
    accordion : true,
}

export default hocs.Show( hocs.Hide( Collapsible ) );

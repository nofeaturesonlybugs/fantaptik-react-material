import React from 'react';

import hocs from '../../hocs';
import { merge } from '../../common';

export const CardTitle = ( { children, className, ...props } ) => {
    className = merge`card-title ${className}`;
    return React.Children.count( children ) > 0  ? (
        <div {...props} className={className}>{children}</div>
    ) : null;
};

CardTitle.displayName = 'Card.Title';

// TODO Update propTypes for Show, Hide
export default hocs.Show( hocs.Hide( CardTitle ) );
import React from 'react';

import hocs from '../../hocs';
import { merge } from '../../common';

const CardActions = ( { children, className, ...props } ) => {
    className = merge`card-action ${className}`;
    return React.Children.count( children ) > 0 ? (
        <div {...props} className={className}>{children}</div>
    ) : null;
};

CardActions.displayName = 'Card.Actions';

// TODO Update propTypes for Show, Hide
export default hocs.Show( hocs.Hide( CardActions ) );
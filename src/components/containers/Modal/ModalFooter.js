import React from 'react';

import { merge } from '../../common';

const ModalFooter = ( { children, className, ...props } ) => {
    className = merge`modal-footer ${className}`;
    return (
        <div {...props} className={className}>
            {children}
        </div>
    );
}

ModalFooter.displayName = 'Modal.Footer';

export default ModalFooter;
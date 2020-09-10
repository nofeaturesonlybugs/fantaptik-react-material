import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';

import hocs from '../../hocs';
import { merge } from '../../common';

import Icon from '../../visual/Icon';

import ModalFooter from './ModalFooter';
import { Hoc as ModalHoc } from './ModalHoc';

import './Modal.css';

const Modal = ( { children, className, dismissible, hasClose, onDismissed, ...props } ) => {
    className = merge`modal ${className}`;
    //
    let footer = null;
    children = React.Children.map( children, child => {
        if( child.type === ModalFooter ) {
            footer = child;
            return null;
        }
        return child;
    })
    //
    const ref = React.useRef();
    React.useEffect( () => {
        const saveRef = ref;
        if( saveRef && saveRef.current ) {
            const elems = M.Modal.init( saveRef.current, { dismissible, onCloseEnd : () => onDismissed && onDismissed() } );
            elems.open();
        }
        return () => {
            if( saveRef && saveRef.current ) {
                M.Modal.getInstance( saveRef.current ).close();
                M.Modal.getInstance( saveRef.current ).destroy();
            }
        };
    } );
    //
    const closeButton = hasClose === true ? (<Icon className="modal-close">close</Icon>) : null;
    //
    return (
        <div {...props} ref={ref} className={className}>
            {closeButton}
            <div className="modal-content">
                {children}
            </div>
            {footer}
        </div>
    );
}

Modal.Hoc = ModalHoc;
Modal.Footer = ModalFooter;

Modal.propTypes = {
    /** When `true` clicking outside the modal will dismiss it. */
    dismissible : PropTypes.bool,

    /** When `true` includes a close button. */
    hasClose : PropTypes.bool,

    /** Event handler that is fired when the modal is dismissed. */
    onDismissed : PropTypes.func,
}

Modal.defaultProps = {
    dismissible : true,
    hasClose : true,
}

export default hocs.Show( hocs.Hide( Modal ) );
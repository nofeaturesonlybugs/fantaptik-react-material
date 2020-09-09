import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';
import hoistStatics from 'hoist-non-react-statics';

import { merge } from '../../common';

export const Hoc = Source => {
    const Component = class extends React.Component {
        constructor( props ) {
            super( props );
            this.ref = React.createRef();
        }
    
        componentDidMount() {
            const { dismissible, modal } = this.props;
            if( this.ref && this.ref.current && modal ) {
                const elems = M.Modal.init( this.ref.current, { dismissible, onCloseEnd : this.close }  );
                elems.open();
            }
        }
    
        componentWillUnmount() {
            const { modal } = this.props;
            if( this.ref && this.ref.current && modal ) {
                M.Modal.getInstance( this.ref.current ).close();
                M.Modal.getInstance( this.ref.current ).destroy();
            }
        }
    
        // close is passed when creating the modal and passes the close event to the owner
        // of the modal.
        close = () => {
            const { onDismissed } = this.props;
            onDismissed && onDismissed();
        }
    
        render() {
            let { className, dismissible, onDismissed, modal, ...props } = this.props;
            return modal ? (
                <div ref={this.ref} className={merge`modal ${className}`}>
                    <Source {...props} className={className} />
                </div>
            ) : (
                <Source {...props} className={className} />
            );
        }
    }
    return hoistStatics( Component, Source );
}

const ModalHoc = ( { children, className, ...props } ) => {
    className = merge`modal-hoc ${className}`;
    return (
        <div {...props} className={className}>
            {children}
        </div>
    );
}

ModalHoc.displayName = 'Modal.Hoc';

ModalHoc.propTypes = {
    /** When `true` clicking outside the modal will dismiss it. */
    dismissible : PropTypes.bool,

    /** When `true` the wrapped component becomes a modal. */
    modal : PropTypes.bool,

    /** Event handler that is fired when the modal is dismissed. */
    onDismissed : PropTypes.func,
}

export default ModalHoc;
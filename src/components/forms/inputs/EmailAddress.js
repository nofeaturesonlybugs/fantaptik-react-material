import React, { Component } from 'react';
import PropTypes from 'prop-types';

import hocs from '../../hocs';

import Text from '../../inputs/Text/Text';

class EmailAddress extends Component {
    constructor( props ) {
        super( props );
        const { address : { address, name } } = props;
        this.state = {
            address : address,
            name : name,
        };
    }

    componentDidUpdate( { address : { address : oldAddress, name : oldName } } ) {
        const { address : { address, name } } = this.props;
        //
        if( address !== oldAddress || name !== oldName ) {
            this.setState( { address, name }, this.update );
        }
    }

    /*
    constructor( props ) {
        super( props );
        const item = props.address || { address : "", name : "" };
        const { address, name } = item;
        this.state = {
            address : address,
            name : name,
        };
    }

    componentDidUpdate( { address : oldItem } ) {
        oldItem = oldItem || { address : "", name : "" };
        const { address : oldAddress, name : oldName } = oldItem;
        //
        const item = this.props.address || { address : "", name : "" };
        const { address, name } = item;
        //
        if( address !== oldAddress || name !== oldName ) {
            this.setState( { address, name }, this.update );
        }
    }
    */

    update = () => {
        const { address, name } = this.state;
        const { onChange } = this.props;
        onChange && onChange( { address, name } );
    }

    render() {
        const handlers = {
            address : ( address ) => this.setState( { address }, this.update ),
            name : ( name ) => this.setState( { name }, this.update ),
        };
        const { address, name } = this.state;
        const { className, layout } = this.props;
        const horizontal = () => (
            <div className={className}>
                <Text grid={[6]} label="E-mail Address" value={address} type="email" validate onChange={handlers.address} />
                <Text grid={[6]} label="Name" value={name} onChange={handlers.name} />
            </div>
        );
        const vertical = () => (
            <div className={className}>
                <Text grid={[12]} label="E-mail Address" value={address} type="email" validate onChange={handlers.address} />
                <Text grid={[12]} label="Name" value={name} onChange={handlers.name} />
            </div>
        );
        return layout === "horizontal" ? horizontal() : vertical();
    }
}

EmailAddress.propTypes = {
    /** Specifies the e-mail address and name. */
    address : PropTypes.shape( {
        address : PropTypes.string,
        name : PropTypes.string,
    } ),

    className : PropTypes.string, 

    /** Specify layout. */
    layout : PropTypes.oneOf( [ "horizontal", "vertical" ] ),

    /** ( address ) => console.log( "address is " + address ) */
    onChange : PropTypes.func,
};

EmailAddress.defaultProps = {
    address : { address : "", name : "" },
    layout : "horizontal",
}

export default EmailAddress;
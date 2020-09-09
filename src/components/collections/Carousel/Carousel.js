import React, { Component } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';

import hocs from '../../hocs';
import { merge } from '../../common';

// TODO Convert Carousel to functional component with hooks.
class Carousel extends Component {
    constructor( props ) {
        super( props );
        this.ref = React.createRef();
    }

    componentDidMount() {
        if( this.ref && this.ref.current ) {
            M.Carousel.init( this.ref.current, { numVisible : this.props.width, noWrap : ! this.props.wrap } );
        }
    }

    componentDidUpdate() {
        if( this.ref && this.ref.current ) {
            M.Carousel.init( this.ref.current, { numVisible : this.props.width, noWrap : ! this.props.wrap } );
        }
    }

    componentWillUnmount() {
        if( this.ref && this.ref.current ) {
            M.Carousel.getInstance( this.ref.current ).destroy();
        }
    }

    render() {
        // N.B: wrap is unused here but we extract it to avoid passing it into the returned div.
        let { children, className, wrap, ...props } = this.props;
        //
        className = merge`${className} carousel`;
        //
        if( React.Children.count( children ) > 0 ) {
            children = React.Children.map( children, child => {
                let { props : { className : childClass } } = child;
                childClass = merge`carousel-item ${childClass}`;
                return React.cloneElement( child, { ...child.props, className : childClass } );
            });
            return (
                <div ref={this.ref} {...props} className={className}>{children}</div>
            );
        } else {
            return (
                <div {...props} className={className} />
            );
        }
        //
    }
};

Carousel.propTypes = {
    /** Specifies number of visible items in carousel. */
    width : PropTypes.number,

    /** When true elements in the carousel will wrap in a loop. */
    wrap : PropTypes.bool,

    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,
};

Carousel.defaultProps = {
    width : 3,
    wrap : true,
};

export default hocs.Show( hocs.Hide( Carousel ) );
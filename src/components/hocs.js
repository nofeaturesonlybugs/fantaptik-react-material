import React from 'react';
import M from 'materialize-css';
import hoistStatics from 'hoist-non-react-statics';

import { merge } from './common';

const hocs = {
    // TODO RM
    // Carousel wraps the given component and enables usage of a `carousel` property; when set to
    // `true` the `carousel` property allows the component to be used within a `Carousel`.
    Carousel : Component => props => {
        let { carousel, className, ...rest } = props;
        let addClasses = [];
        carousel === true && addClasses.push( "" );
        className = merge`${className} ${addClasses}`
        return (
            <Component {...rest} className={className} />
        );
    },

    // TODO RM
    // Carousel wraps the given component and enables usage of a `carousel` property; when set to
    // `true` the `carousel` property allows the component to be used within a `Carousel`.
    Carousel_OLD : Component => props => {
        let { carousel, className, ...rest } = props;
        let addClasses = [];
        carousel === true && addClasses.push( "carousel-item" );
        className = merge`${className} ${addClasses}`
        return (
            <Component {...rest} className={className} />
        );
    },

    // TODO RM
    // Grid wraps the given component and enables usage of a `grid` property; used as a boolean
    // this property turns the component into a grid container; used as an array this property
    // specifies the `s`, `m`, `l`, and `xl` grid sizes respective to the array elements.
    // Grid_NO : Component => props => {
    //     let { grid, className, ...rest } = props;
    //     let addClasses = [];
    //     if( grid === true ) {
    //         addClasses.push( "" );
    //     } else if( Array.isArray( grid ) ) {
    //         const [ s, m, l, xl ] = grid;
    //         addClasses.push( "" );
    //         s !== undefined && addClasses.push( "" );
    //         m !== undefined && addClasses.push( "" );
    //         l !== undefined && addClasses.push( "" );
    //         xl !== undefined && addClasses.push( "" );
    //         s === undefined && m === undefined && l === undefined && xl === undefined && addClasses.push( "" );
    //     }
    //     className = merge`${className} ${addClasses}`
    //     return (
    //         <Component {...rest} className={className} />
    //     );
    // },

    // TODO RM
    // Grid wraps the given component and enables usage of a `grid` property; used as a boolean
    // this property turns the component into a grid container; used as an array this property
    // specifies the `s`, `m`, `l`, and `xl` grid sizes respective to the array elements.
    // Grid_OLD : Component => props => {
    //     let { grid, className, ...rest } = props;
    //     let addClasses = [];
    //     if( grid === true ) {
    //         addClasses.push( "row" );
    //     } else if( Array.isArray( grid ) ) {
    //         const [ s, m, l, xl ] = grid;
    //         addClasses.push( "col" );
    //         s !== undefined && addClasses.push( "s" + s );
    //         m !== undefined && addClasses.push( "m" + m );
    //         l !== undefined && addClasses.push( "l" + l );
    //         xl !== undefined && addClasses.push( "xl" + xl );
    //         s === undefined && m === undefined && l === undefined && xl === undefined && addClasses.push( "s12" );
    //     }
    //     className = merge`${className} ${addClasses}`
    //     return (
    //         <Component {...rest} className={className} />
    //     );
    // },

    // Hide wraps the given component and enables a `hide` property; when `hide !== true` the
    // component renders.  Consider this a shortcut to the `<Hide>` component.
    Hide : Source => {
        const Component = props => {
            let { hide, ...rest } = props;
            return hide && hide !== undefined ? null : <Source {...rest} />;
        };
        return hoistStatics( Component, Source );
    },

    // List wraps the given component and enables usage of a `list` property; when set to `true`
    // the `list` property allows the component to be used within a `List`.
    List : Component => props => {
        let { list, className, ...rest } = props;
        let addClasses = [];
        list === true && addClasses.push( 'collection-item' );
        className = merge`${className} ${addClasses}`;
        return (
            <Component {...rest} className={className} />
        );
    },

    // Modal allows the componet to be used as a modal.  When `modal` is `true` the component is
    // rendered as a modal.  To close the modal the component should be unmounted.
    Modal_OLD : Component => class extends React.Component {
        constructor( props ) {
            super( props );
            this.ref = React.createRef();
        }

        componentDidMount() {
            const { dismissible, modal } = this.props;
            if( this.ref && this.ref.current && modal ) {
                console.log("hocs.Modal.didMount",this.ref,this.ref.current);//TODO RM
                const elems = M.Modal.init( this.ref.current, { dismissible, onCloseEnd : this.close }  );
                elems.open();//TODO
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
            let { modal, className, ...rest } = this.props;
            return modal ? (
                <div ref={this.ref} className={merge`${className} modal`}>
                    <Component {...rest}/>
                </div>
            ) : (
                <Component className={merge`${className}`} {...rest} />
            );
        }
    },

    // Show wraps the given component and enables a `show` property; when `show !== true` the
    // component does not render.  Consider this a shortcut to the `<Show>` component.
    Show : Source => {
        const Component = props => {
            let { show, ...rest } = props;
            return props.hasOwnProperty( "show" ) === false || show ? <Source {...rest} /> : null;
        };
        return hoistStatics( Component, Source );
    },
};

export default hocs;
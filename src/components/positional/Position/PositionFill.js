import React from 'react';
import PropTypes from 'prop-types';

import { findNode } from '../../../js';
import useBoxFill from '../../../hooks/useBoxFill';

// TODO Possibly reinstate this.
// useObserveBoxes creates a ResizeObserver on targets and returns an array of their boxes obtained from getBox() for each target.
// const useObserveBoxes = ( targets ) => {
//     const [boxes, setBoxes] = React.useState( [] );
//     const nodes = useFindAllNodes( targets );
//     const update = () => {
//         const newBoxes = [];
//         nodes.map( e => newBoxes.push( getBox( e ) ) );
//         setBoxes( newBoxes );
//     }
//     //
//     React.useEffect( () => {
//         const resizeObserver = new ResizeObserver( update );
//         nodes.map( e => resizeObserver.observe( e ) );
//         return () => {
//             resizeObserver.disconnect();
//         };
//     }, [nodes] );
//     //
//     return boxes;
// }

const PositionFill = ( { apply, container, children, heightWatches, widthWatches, heightTargets, widthTargets } ) => {
    const { width, height } = useBoxFill( container, widthWatches, heightWatches );
    heightTargets.map( findNode ).filter( t => t !== false ).map( n => {
        n.style.height = height + "px";
    })
    widthTargets.map( findNode ).filter( t => t !== false ).map( n => {
        n.style.width = width + "px";
    })
    //
    children = React.Children.map( children, child => { 
        if( apply === "styles" ) {
            let style = { ...(child.props.style || {}) };
            if( widthWatches.length > 0 ) {
                style.width = width + "px";
            }
            if( heightWatches.length > 0 ) {
                style.height = height + "px";
            }
            return React.cloneElement( child, { ...child.props, style } );
        }
        return React.cloneElement( child, { ...child.props, width, height } );
    } );
    return (
        <>
            {children}
        </>
    );
}

PositionFill.displayName = "Position.Fill";
PositionFill.propTypes = {
    /**
     * `apply` specifies how the fill calculations are applied.  `"styles"` merges style
     * information for CSS width and height.  `"props"` sets properties width and height.
     */
    apply : PropTypes.oneOf( [ "props", "styles" ] ),

    /**
     * `container` specifies the bounding container; width and height calculations will 
     * be bounded by the dimensions of `container`.  If `container` is null then the browser
     * viewport is used.
     */
    container : PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.instanceOf( Element ),
        ] ),

    /**
     * `heightWatches` is a list of HTML elements or CSS selectors whose heights are removed
     * when calculating our own height.
     */
     heightWatches : PropTypes.arrayOf(
        PropTypes.oneOfType( [ 
            PropTypes.string,
            PropTypes.instanceOf( Element)
        ] ) ),

    /**
     * `heightTargets` is a list of HTML elements or CSS selectors whose CSS height properties
     * will be adjusted in response to size changes of elements specified by the `heightWatches`
     * property.
     */
     heightTargets : PropTypes.arrayOf(
        PropTypes.oneOfType( [ 
            PropTypes.string,
            PropTypes.instanceOf( Element)
        ] ) ),

    /**
     * `widthWatches` is a list of HTML elements or CSS selectors whose widths are removed
     * when calculating our own width.
     */
     widthWatches : PropTypes.arrayOf(
        PropTypes.oneOfType( [ 
            PropTypes.string,
            PropTypes.instanceOf( Element)
        ] ) ),

    /**
     * `widthTargets` is a list of HTML elements or CSS selectors whose CSS width properties
     * will be adjusted in response to size changes of elements specified by the `widthWatches`
     * property.
     */
     widthTargets : PropTypes.arrayOf(
        PropTypes.oneOfType( [ 
            PropTypes.string,
            PropTypes.instanceOf( Element)
        ] ) ),

}
PositionFill.defaultProps = {
    apply : "styles",
    container : null,
    heightWatches : [],
    widthWatches : [],
    heightTargets : [],
    widthTargets : [],
}

export default PositionFill;
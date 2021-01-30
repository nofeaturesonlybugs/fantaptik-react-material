import React from 'react';
import PropTypes from 'prop-types';

import { getBox } from 'css-box-model';

import { merge } from '../../common';

import './Position.css';

/**
 * `getBoxPoint` accepts a box and returns the point specified by `at`.
 * 
 * @param {Object} box A bounding box with x, y, left, right, top, bottom, width, and height;
 * @param {string} at A string description: top, bottom, left, right, top-left top-right, bottom-left, bottom-right, center
 * @returns {Object} Object with x,y values.
 */
const getBoxPoint = ( box, at ) => {
    const { top : y, bottom, left : x, right, width, height,  } = box;
    const [halfX, halfY] = [Math.floor( width / 2 ), Math.floor( height / 2)];
    switch( at ) {
        case "top":
            return { x : x + halfX, y };
        case "top-left":
            return { x, y }
        case "top-right":
            return { x : right, y };
        case "bottom":
            return { x : x + halfX, y : bottom };
        case "bottom-left":
            return { x, y : bottom };
        case "bottom-right":
            return { x : right, y : bottom };
        case "left":
            return { x, y : y + halfY };
        case "right":
            return { x : right, y : y + halfY };
        case "center":
            return { x : x + halfX, y : y + halfY };
        default:
            return { x : 0, y : 0 };
    }
}

/**
 * `calcStyles` creates a style object containing the necessary styles to position `target`
 * relative to `reference` according to any given `options`.
 * 
 * @param {HTMLElement} targetNode The page element to calculate styles for.
 * @param {HTMLElement} referenceNode The page element to use as a reference point.
 * @param {Object} options A configuration object.
 * @param {boolean} options.sameHeight `true` if target's height should match the reference node's height.
 * @param {boolean} options.sameWidth `true` if target's width should match the reference node's width.
 * @param {string} options.targetAt Specify the reference point on target; see `at` argument for `getBoxPoint`
 * @param {string} options.referenceAt Specify the reference point on reference; see `at` argument for `getBoxPoint`
 * @returns {Object} CSS styles that can be applied to `target`.
 */
const calcStyles = ( targetNode, referenceNode, { referenceAt, sameHeight, sameWidth, targetAt, } ) => {
    const styles = {};
    if( targetNode && referenceNode ) {
        styles.position = "fixed";
        //
        const { borderBox : target } = getBox( targetNode );
        const { borderBox : reference } = getBox( referenceNode );
        //
        if( sameHeight ) {
            target.height = reference.height;
            styles.height = reference.height + "px";
        }
        if( sameWidth ) {
            target.width = reference.width;
            styles.width = reference.width + "px";
        }
        //
        const put = getBoxPoint( target, targetAt );
        const at = getBoxPoint( reference, referenceAt );
        [ put.x, put.y ] = [ put.x - target.x, put.y - target.y ];
        styles.left = ( at.x - put.x ) + "px";
        styles.top = ( at.y - put.y ) + "px";
    }
return styles;
}

/**
 * `PositionDemoChild` is a small rect that can be used to help demo the `Position` component.
 */
const PositionDemoChild = ( { className = "", style : styleProp = {}, width = 20 } ) => {
    const style = { 
        height : width + "px", 
        width : width + "px"
    };
    return <div className={className} style={ { ...styleProp, ...style } } />;
}

/**
 * `PositionDemoTarget` is a larger rect that can be used to help demo the `Position` component.
 */
const PositionDemoTarget = ( { className = "", style : styleProp = {}, width = 200 } ) => {
    const style = { 
        width : width + "px", 
        height : width + "px", 
    };
    return <div className={className} style={ { ...styleProp, ...style } } />;
}

/**
 * `PositionMnemonic` is component to create a text description of the current values for `at`
 * and `put`.
 */
const PositionMnemonic = ( { at, put } ) => {
    const preStyle = { display : "inline-block", backgroundColor : "#eeeeee", };
    return (
        <div>
            <pre style={preStyle}>put</pre> <i>child</i>'s <pre style={preStyle}>{put}</pre> on <i>target</i>'s <pre style={preStyle}>{at}</pre>
        </div>
    );
}

const Position = ( { children, className, at, put, sameHeight, sameWidth, target, ...props } ) => {
    const [styles, setStyles] = React.useState( {} );
    const [container, setContainer] = React.useState( null );
    const [targetState, setTarget] = React.useState( { node : null, body : false } );
    const ref = React.useCallback( node => {
        setContainer( node );
    }, [] );
    //
    // findTarget locates the target node or defaults to body.
    const findTarget = t => {
        t = Array.isArray( t ) ? t : [ t ];
        let node;
        let body = false;
        for( let k = 0; ! node && k < t.length; k++ ) {
            node = document.querySelector( t[ k ] );
        }
        if( ! node ) {
            node = document.querySelector( "body" );
            body = true;
        }
        setTarget( { node, body } );
    }
    //
    // On first load and any time target changes we must update targetNode.
    React.useEffect( () => {
        findTarget( target );
    }, [] );
    React.useEffect( () => {
        findTarget( target );
    }, [target] );
    //
    // Anytime our nodes or positional strings change we update styles.
    React.useEffect( () => {
        let rv = () => null;
        if( container && targetState.node ) {
            //
            if( targetState.body ) {
                [put, at] = ["center", "center"];
            }
            put = put || "center";
            at = at || "center";
            //
            const update = () => setStyles(
                calcStyles( container, targetState.node, {
                    sameHeight, sameWidth, targetAt : put, referenceAt : at,
                } )
            );
            const resizeObserver = new ResizeObserver( entries => {
                update();
            } );
            resizeObserver.observe( container );
            resizeObserver.observe( targetState.node );
            //
            document.addEventListener( 'scroll', update );
            //
            rv = () => {
                resizeObserver.disconnect();
                document.removeEventListener( "scroll", update );
            }
        }
        return rv;
    }, [container, targetState, at, put, sameHeight, sameWidth] );
    const containerClass = targetState.body ? "used-body" : "";
    className = merge`position-container ${className} ${containerClass}`;
    return (
        <div ref={ref} className={className} style={styles}>
            {children}
        </div>
    );
}

Position.DemoChild = PositionDemoChild;
Position.DemoTarget = PositionDemoTarget;
Position.Mnemonic = PositionMnemonic;

Position.propTypes = {
    /** Specifies the point-of-reference on `target`. */
    at : PropTypes.oneOf( [
        "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "right", "center",
    ] ),

    /** Specifies the point-of-reference on the child. */
    put : PropTypes.oneOf( [
        "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "right", "center",
    ] ),

    /** If `true` then the container will become the same height as the target. */
    sameHeight : PropTypes.bool,

    /** If `true` then the container will become the same width as the target. */
    sameWidth : PropTypes.bool,

    /** A CSS selector to locate the target element; if an array is given then the first match is used. */
    target : PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.arrayOf( PropTypes.string ),
    ] ),
}

export default Position;
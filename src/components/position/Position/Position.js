import React from 'react';
import PropTypes from 'prop-types';

import { getBox } from 'css-box-model';

import { merge } from '../../common';

import './Position.css';

// TODO Does not work if page is afterwards scrolled or `target` changes position.

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
            at = { x : 0, y : 0 };
            break;
    }
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
    const containerRef = React.useRef();
    const [mergeStyle, updateMergeStyle] = React.useState( { position : "fixed", } );
    const [containerClass, updateContainerClass] = React.useState( "" );
    React.useEffect( () => {
        target = Array.isArray( target ) ? target : [ target ];
        let node;
        for( let k = 0; ! node && k < target.length; k++ ) {
            node = document.querySelector( target[ k ] );
        }
        if( ! node ) {
            // If target was not found then put in center of body.
            node = document.querySelector( "body" );
            [ put, at ] = [ "center", "center" ];
            updateContainerClass( "used-body" );
        } else {
            updateContainerClass( "" );
        }
        if( node && containerRef.current && containerRef.current.firstChild ) {
            // Eliminate any positional properties.
            delete mergeStyle.top;
            delete mergeStyle.bottom;
            delete mergeStyle.left;
            delete mergeStyle.right;
            const box = getBox( node );
            const { borderBox : container } = getBox( containerRef.current.firstChild );
            const { borderBox : reference } = getBox( node );
            //
            if( sameHeight ) {
                container.height = reference.height;
                mergeStyle.height = reference.height + "px";
            }
            if( sameWidth ) {
                container.width = reference.width;
                mergeStyle.width = reference.width + "px";
            }
            //
            at = getBoxPoint( reference, at );
            put = getBoxPoint( container, put );
            [ put.x, put.y ] = [put.x - container.x, put.y - container.y];
            // console.log("at vs put",at,put); //TODO RM
            mergeStyle.left = ( at.x - put.x ) + "px";
            mergeStyle.top = ( at.y - put.y )+ "px";
            // console.log("updateMergeStyle",mergeStyle); // TODO RM
            updateMergeStyle( { ...mergeStyle } );
        }
    }, [target, at, put] );
    className = merge`position-container ${className} ${containerClass}`;
    return (
        <div ref={containerRef} className={className} style={ { ...mergeStyle } }>
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
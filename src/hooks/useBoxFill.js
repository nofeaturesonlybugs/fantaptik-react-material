import React from 'react';

import { getBox } from 'css-box-model';

import { findNode } from '../js';

/**
 * The result type for the `useBoxFill` hook.
 * 
 * @typedef hooks.useBoxFillResult
 * @type {Object}
 * @property {number} width The calcualted width in pixels.
 * @property {number} height The calcualted height in pixels.
 */

/**
 * `useBoxFill` calculates a bounding box `{ width, height }` as  
 * > `width = container.width - sum( widthWatches.width )`  
 * > `height = container.height - sum( heightWatches.height )`  
 * 
 * `ResizeObserver` is required for this hook to function; consider using a polyfill for older browsers.  
 * 
 * @name hooks.useBoxFill
 * @static
 * @function
 * 
 * @param {Element|string} [container=Document] A bounding container; if null then document is used.
 * @param {Element[]|string[]} [widthTargets=[]] A list of elements whose widths are subtracted from the bounding width.
 * @param {Element[]|string[]} [heightTargets=[]] A list of elements whose heights are subtracted from the bounding height.
 * @example
 * // Fullscreen
 * const widthWatches = [ "#leftbar", "#rightbar" ];
 * const heightWatches = [ "#header", "#footer" ];
 * const { width, height } = useBoxFill( null, widthWatches, heightWatches );
 * @example
 * // Bound within a specific parent container.
 * const widthWatches = [ "#leftbar", "#rightbar" ];
 * const heightWatches = [ "#header", "#footer" ];
 * const { width, height } = useBoxFill( "#myparent", widthWatches, heightWatches );
 * @example
 * // Fullscreen heights only.
 * const heightWatches = [ "#header", "#footer" ];
 * const { width, height } = useBoxFill( null, null, heightWatches );
 * @returns {hooks.useBoxFillResult}
 */
const useBoxFill = ( container, widthTargets, heightTargets ) => {
    widthTargets = Array.isArray( widthTargets ) ? widthTargets : [];
    heightTargets = Array.isArray( heightTargets ) ? heightTargets : [];
    //
    const [box, setBox] = React.useState( { width : 0, height : 0 } );
    //
    const widthNodes = widthTargets.map( findNode ).filter( t => t !== false );
    const heightNodes = heightTargets.map( findNode ).filter( t => t !== false );
    //
    const update = () => {
        let { width = 0, height = 0 } = {};
        widthNodes.map( e => {
            const { marginBox : { width : w } } = getBox( e );
            width = width + w;
        } );
        heightNodes.map( e => {
            const { marginBox : { height : h } } = getBox( e );
            height += h;
        } );
        // Bounding box is initially the browser.
        let boundHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let boundWidth = document.documentElement.clientWidth || document.body.clientWidth;
        // But can be specified by container.
        const containerNode = findNode( container );
        if( containerNode ) {
            const { contentBox : box } = getBox( containerNode );
            boundHeight = box.height;
            boundWidth = box.width;
        } else {
            // TODO Without this additional -1 sometimes a vertical scrollbar appears.  Would like to fix.
            boundHeight = boundHeight - 1;
        }
        height = boundHeight - height;
        width = boundWidth - width;
        //
        // To avoid repeated renders only call setBox() if the values are changing from the last calculation.
        if( height !== box.height || width !== box.width ) {
            setBox( { width, height } );
        }
    }
    //
    React.useEffect( () => {
        const observer = new ResizeObserver( update );
        widthNodes.map( e => observer.observe( e ) );
        heightNodes.map( e => observer.observe( e ) );
        //
        const containerNode = findNode( container );
        if( containerNode ) {
            observer.observe( containerNode );
        }
        //
        window.addEventListener( "resize" , update );
        //
        return () => {
            observer.disconnect();
            window.removeEventListener( "resize" , update );
        }
    }, [ container, widthNodes, heightNodes ] );
    return box;
}

export default useBoxFill;
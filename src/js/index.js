/**
 * `findNode` accepts an Element or CSS selector and returns Element.  In the case that `e` is
 * already an Element this function just returns the argument.
 * 
 * @function
 * @param {Element|string} e The Element or CSS selector to return.
 * @example
 * import js from '@fantaptik/react-material';
 * const container = js.findNode( "#container" );
 * @example
 * import { findNode } from '@fantaptik/react-material/js';
 * const container = findNode( "#container" ); // Returns Element if exists on page.
 * const c2 = findNode( container ) // Just returns container.
 * const notFound = findNode( "#lsjdfljsldkfjlsdfjlsf" ); // Probably doesn't exist so notFound is false.
 * @returns {Element|false}
 */
export const findNode = e => {
    if( e instanceof Element ) {
        return e;
    }
    let n = document.querySelector( e );
    if( n ) {
        return n;
    }
    return false;
}

export default { findNode };
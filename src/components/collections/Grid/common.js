import { merge } from '../../common';

/**
 * sizeToClassName accepts an array of numbers and returns a className
 * corresponding to a Materialize CSS grid item.
 */
export const sizeToClassName = size => {
    const str = ( n, s ) => typeof n === "number" && n > 0 && n < 13 ? s + n : "";
    if( Array.isArray( size ) ) {
        const [ s, m, l, xl ] = size;
        const addClasses = [ 
            "grid-item",
            "col",
            str( s, "s" ),
            str( m, "m" ),
            str( l, "l" ),
            str( xl, "xl" ),
        ];
        return merge`${addClasses}`
    }
    return null;
}
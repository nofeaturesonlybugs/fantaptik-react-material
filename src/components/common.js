export const merge = ( strings, ...values ) => {
    values = values.map( value => Array.isArray( value ) ? value.join( " " ) : value );
    const parts = [ ...strings, ...values ].filter( item => {
        return item && item.length > 0;
    } );
    return parts.join( " " ).replace( / +/g, ' ' ).replace( /^ *([^ ]+) *$/g, "$1" );
}


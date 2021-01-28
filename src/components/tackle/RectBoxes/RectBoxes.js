import React from 'react';
import PropTypes from 'prop-types';

const RectBoxes = ( { inner, outer, rect, onClick, style, ...props } ) => {
    style = style || {};
    const [ innerMid, rectMid ] = [ Math.floor( inner / 2 ), Math.floor( rect / 2 ) ];
    const styles = {
        outer : {
            height : outer + "px",
            width : outer + "px",
            position : "relative",
        },
        inner : {
            height : inner + "px",
            width : inner + "px",
            position : "absolute",
            left : Math.floor( (outer - inner) / 2 ) + "px",
            top : Math.floor( (outer - inner) / 2 ) + "px",
        },
        rect : {
            height : rect + "px",
            width : rect + "px",
            maxWidth : rect + "px",
            maxHeight : rect + "px",
            padding : "0px",
            position : "absolute",
        },
    }
    let cols = [ -rectMid, innerMid - rectMid, inner - rectMid ];
    let rows = [ -rectMid, innerMid - rectMid, inner - rectMid ];
    cols = cols.map( c => c + "px" );
    rows = rows.map( r => r + "px" );
    const buttons = {
        tl  : { ...styles.rect, top : rows[ 0 ], left : cols[ 0 ] },
        t   : { ...styles.rect, top : rows[ 0 ], left : cols[ 1 ] },
        tr  : { ...styles.rect, top : rows[ 0 ], left : cols[ 2 ] },
        l   : { ...styles.rect, top : rows[ 1 ], left : cols[ 0 ] },
        c   : { ...styles.rect, top : rows[ 1 ], left : cols[ 1 ] },
        r   : { ...styles.rect, top : rows[ 1 ], left : cols[ 2 ] },
        bl  : { ...styles.rect, top : rows[ 2 ], left : cols[ 0 ] },
        b   : { ...styles.rect, top : rows[ 2 ], left : cols[ 1 ] },
        br  : { ...styles.rect, top : rows[ 2 ], left : cols[ 2 ] },
    }
    const buttonsClassName = "orange darken-4";
    //
    onClick = onClick ? onClick : () => null;
    return (
        <div style={ {...style, ...styles.outer } } className="yellow lighten-3">
            <div style={styles.inner} className="cyan darken-4">
                <Button className={buttonsClassName} style={buttons.tl} onClick={ () => onClick( "top-left" ) } />
                <Button className={buttonsClassName} style={buttons.t}  onClick={ () => onClick( "top" ) } />
                <Button className={buttonsClassName} style={buttons.tr} onClick={ () => onClick( "top-right" ) } />

                <Button className={buttonsClassName} style={buttons.l}  onClick={ () => onClick( "left" ) } />
                <Button className={buttonsClassName} style={buttons.c}  onClick={ () => onClick( "center" ) } />
                <Button className={buttonsClassName} style={buttons.r}  onClick={ () => onClick( "right" ) } />

                <Button className={buttonsClassName} style={buttons.bl} onClick={ () => onClick( "bottom-left" ) } />
                <Button className={buttonsClassName} style={buttons.b}  onClick={ () => onClick( "bottom" ) } />
                <Button className={buttonsClassName} style={buttons.br} onClick={ () => onClick( "bottom-right" ) } />
            </div>
        </div>
    );
}

RectBoxes.propTypes = {
    /** The size of the inner box in pixels. */
    inner : PropTypes.number,

    /** Called when any of the buttons are clicked; a single argument specifies which button was cliecked. */
    onClick : PropTypes.func,

    /** The size of the outer box in pixels. */
    outer : PropTypes.number,

    /** The size of each rect in pixels. */
    rect : PropTypes.number,
}

RectBoxes.defaultProps = {
    inner : 120,
    outer : 200,
    rect : 30,
}

export default RectBoxes;
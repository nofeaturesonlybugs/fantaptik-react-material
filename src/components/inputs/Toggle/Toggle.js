import React from 'react';
import PropTypes from 'prop-types';

import hocs from '../../hocs';
import { merge } from '../../common';

const Toggle = ( { checked, className, disabled, off, on, onClick : onClickOrig } ) => {
    const onClick = ev => {
        onClickOrig && onClickOrig( ev.target.checked );
    }
    return (
        <div className={merge`toggle switch ${className}`}>
            <label>
                <span className="toggle-label-off">{off}</span>
                <input className="toggle-input" type="checkbox" checked={checked} disabled={disabled} onClick={onClick} onChange={() => null} />
                <span className="toggle-lever lever"></span>
                <span className="toggle-label-on">{on}</span>
            </label>
        </div>                    
    );
}

Toggle.propTypes = {
    /** Will be set to checked or on if true. */
    checked : PropTypes.bool, 

    /** Will be disabled if true. */
    disabled : PropTypes.bool,

    /** The label for the off or unchecked setting. */
    off : PropTypes.string,

    /** The label for the on or checked setting. */
    on : PropTypes.string,

    /** Event handler for user clicking on the toggle. */
    onClick : PropTypes.func,

    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,

}

Toggle.propDefaults = {
    off : "Off",
    on : "On",
}

export default hocs.Show( hocs.Hide( Toggle ) );
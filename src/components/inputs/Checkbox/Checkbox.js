import React from 'react';
import PropTypes from 'prop-types';

import hocs from '../../hocs';
import { merge } from '../../common';

const Checkbox = ( { className, label, unchecked, ...props } ) => {
    const { checked } = props;
    if( checked !== true && unchecked ) {
        label = unchecked;
    }
    return (
        <label className={merge`checkbox ${className}`}>
            <input className="checkbox-input" type="checkbox" onChange={()=>null} {...props} />
            <span className="checkbox-label">{label}</span>
        </label>
    );
}

Checkbox.propTypes = {
    /** When `true` the box is checked. */
    checked : PropTypes.bool,

    /** When `true` disables the input. */
    disabled : PropTypes.bool,

    /** Checkbox label; use `unchecked` to provide an alternate label when unchecked. */
    label : PropTypes.string,

    /** When provided the label will change when `checked !== true` */
    unchecked : PropTypes.string,

    /** Event handler when checkbox is clicked; `() => console.log('clicked!')` */
    onClick : PropTypes.func,

    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,

};

export default hocs.Show( hocs.Hide( Checkbox ) );
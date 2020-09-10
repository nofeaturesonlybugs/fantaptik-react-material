import React from 'react';
import PropTypes from 'prop-types';

import { merge } from '../../common';
import hocs from '../../hocs';

const Tristate = ( { className, checked, indeterminate, label, unchecked, onChange, ...props } ) => {
    // next returns the next value of the control: true -> null -> false -> true
    const next = checked => checked === true ? null : (checked === false ? true : false);
    // onClick is the event handler
    const onClick = () => onChange && onChange( next( checked ) );
    //
    const ref = React.useRef();
    React.useEffect( () => {
        if( ref && ref.current ) {
            ref.current.indeterminate = checked === null;
        }
    } );
    //
    label = checked === null && indeterminate ? indeterminate : 
    (checked !== true && unchecked ? unchecked : label);
    return (
        <label className={merge`tristate ${className}`}>
            <input ref={ref} className="tristate-input" type="checkbox" {...props} onChange={()=>null} checked={checked === true} onClick={onClick} />
            <span className="tristate-label">{label}</span>
        </label>
    );
}

Tristate.propTypes = {
    className : PropTypes.string,

    /** true | false | null */
    checked : PropTypes.oneOfType( [
        PropTypes.bool,
        PropTypes.any,
    ] ),

    disabled : PropTypes.bool,

    /** When provided the label will change when `checked === null` */
    indeterminate : PropTypes.string,

    /** Checkbox label; use `indeterminate` or `unchecked` to provide alternate labels.  */
    label : PropTypes.string,

    /** When provided the label will change when `checked !== true` */
    unchecked : PropTypes.string,

    /** ( state ) => console.log("checked is:", state); // null, false, true */
    onChange : PropTypes.func,

    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,

};

export default hocs.Show( hocs.Hide( Tristate ) );
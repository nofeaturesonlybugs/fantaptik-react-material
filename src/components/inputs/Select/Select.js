import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';

import hocs from '../../hocs';
import { merge } from '../../common';

import SelectData from './SelectData';
import SelectOption from './SelectOption';

// TODO Select.Group, Select.Multiple
const Select = ( { className, children, label, onChange : onChangeOrig, ...props } ) => {
    const onChange = ev => onChangeOrig && onChangeOrig( ev.target.value );
    //
    const ref = React.useRef();
    React.useEffect( () => {
        const myref = ref;
        if( myref && myref.current ) {
            M.FormSelect.init( myref.current );
        }
        return () => {
            M.FormSelect.getInstance( myref.current ).destroy();
        };
    } );
    //
    return (
        <div className={merge`select input-field ${className}`}>
            <select ref={ref} className="select-input" {...props} onChange={onChange}>
                {React.Children.count( children ) > 0 ? children : null}
            </select>
            <label className="select-label">{label}</label>
        </div>
    );
}

Select.Data = SelectData;
Select.Option = SelectOption;

Select.propTypes = {
    /** When `true` the select is disabled. */
    disabled : PropTypes.bool,

    /** Specifies the label for the select. */
    label : PropTypes.string,

    /** Sets the selected option. */
    value : PropTypes.any,

    /** Event handler for when selection changes; `( value ) => console.log( "Item with value " + value + " selected." );` */
    onChange : PropTypes.func,

    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,

};

export default hocs.Show( hocs.Hide( Select ) );
import React from 'react';
import PropTypes from 'prop-types';

import hocs from '../../hocs';
import { merge } from '../../common';

const TextLabel = ( { className, id, label, ...props } ) => {
    if( id && id.length > 0 ) {
        props.htmlFor = id;
    }
    return (
        <label className={merge`text-label ${className}`} {...props}>{label}</label>
    );
}

// TODO Text.Inline, Text.Helper
const Text = ( { className, label, onChange : onChangeOrig, validate, ...props } ) => {
    //
    // If placeholder or value are non-empty then add 'active' class to label.
    const { id, placeholder, value } = props;
    const labelClassName = (value && value.length > 0) || (placeholder && placeholder.length > 0) ? "active" : "";
    //
    if( onChangeOrig ) {
        props.onChange = ( ev ) => {
            onChangeOrig( ev.target.value, ev );
        }
    }
    if( validate === true ) {
        props.className = 'validate';
    }
    //
    return (
        <div className={merge`text input-field ${className}`}>
            <input className="text-input" {...props} />
            <TextLabel { ...{ id, label, className : labelClassName } } />
        </div>
    );
}

Text.Password = hocs.Show( hocs.Hide( ( { type, ...props } ) => (<Text type="password" {...props} />) ) );

Text.propTypes = {
    className : PropTypes.string, 

    /** Sets the input to disabled if true. */
    disabled : PropTypes.bool,

    /** Provides a text label to the input. */
    label : PropTypes.string,

    /** Provides a placeholder or hint text before the user types. */
    placeholder : PropTypes.string,

    /** Sets the input to required. */
    required : PropTypes.bool,

    /** Sets the type on the input field. */
    type : PropTypes.string,

    /** Provides the value to display in the input field. */
    value : PropTypes.string,

    /** When true adds a 'validate' class to the input. */
    validate : PropTypes.bool, 

    /** ( value, event ) => console.log( "Value is " + value, "Full event: ", event ) */
    onChange : PropTypes.func,

    /** Set to `false` to hide the component. */
    show : PropTypes.bool,

    /** Set to `true` to hide the component. */
    hide : PropTypes.bool,

};

Text.propDefaults = {
    type : "text",
}


export default hocs.Show( hocs.Hide( Text ) );
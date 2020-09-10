import React from 'react';
import PropTypes from 'prop-types';

const SelectOption = ( { label, ...props } ) => {
    return (
        <option {...props}>{label}</option>
    );
}

SelectOption.displayName = 'Select.Option';

SelectOption.propTypes = {
    /** The text label. */
    label : PropTypes.string.isRequired,

    /** The option value. */
    value : PropTypes.oneOfType( [
        PropTypes.number,
        PropTypes.string,
    ] ).isRequired,
}

export default SelectOption;
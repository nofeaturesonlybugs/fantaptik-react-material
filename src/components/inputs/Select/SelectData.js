import React from 'react';
import PropTypes from 'prop-types';

import SelectOption from './SelectOption';

const SelectData = ( { data, label : labelStr, value : valueStr } ) => {
    const items = data.map( item => {
        const { [labelStr] : label, [valueStr] : value } = item;
        return (
            <SelectOption label={label} value={value} key={value} />
        );
    } );
    return <>{items}</>;
}

SelectData.displayName = 'Select.Data';

SelectData.propTypes = {
    /** Array of data items. */
    data : PropTypes.array.isRequired,

    /** The data key to use as the `label` for options. */
    label : PropTypes.string.isRequired,

    /** The data key to use as the `value` for options. */
    value : PropTypes.string.isRequired,
}

export default SelectData;
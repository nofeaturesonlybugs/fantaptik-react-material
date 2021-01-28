import React from 'react';
import hoistStatics from 'hoist-non-react-statics';

const hocs = {
    // Hide wraps the given component and enables a `hide` property; when `hide !== true` the
    // component renders.  Consider this a shortcut to the `<Hide>` component.
    Hide : Source => {
        const Component = props => {
            let { hide, ...rest } = props;
            return hide && hide !== undefined ? null : <Source {...rest} />;
        };
        return hoistStatics( Component, Source );
    },

    // Show wraps the given component and enables a `show` property; when `show !== true` the
    // component does not render.  Consider this a shortcut to the `<Show>` component.
    Show : Source => {
        const Component = props => {
            let { show, ...rest } = props;
            return props.hasOwnProperty( "show" ) === false || show ? <Source {...rest} /> : null;
        };
        return hoistStatics( Component, Source );
    },
};

export default hocs;
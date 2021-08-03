/**
 * @namespace hooks
 * 
 * @example
 * // Keeping hooks namespace.
 * import hooks from '@fantaptik/react-material';
 * 
 * const fill = hooks.useBoxFill( "#container", ["#w1", "#w2"], ["#h1", "#h2"] );
 * @example
 * // Ignoring hooks namespace.
 * import { useBoxFill } from '@fantaptik/react-material';
 * 
 * const fill = useBoxFill( "#container", ["#w1", "#w2"], ["#h1", "#h2"] );
 */

export { default as useBoxFill } from './useBoxFill';

import useBoxFill from './useBoxFill';

export default { useBoxFill };
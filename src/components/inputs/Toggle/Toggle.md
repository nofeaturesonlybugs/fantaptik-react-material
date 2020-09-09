##### CSS targets
```css 
div.toggle {}                       /* Container div. */
div.toggle .toggle-label-off {}     /* Off label. */
div.toggle .toggle-label-on {}      /* On label. */
div.toggle .toggle-input {}         /* Input element. */
div.toggle .toggle-lever {}         /* Lever element. */
```

A simple toggle.
```jsx
const [ value, update ] = React.useState(false);
<Toggle on="On" off="Off" checked={value} onClick={ () => update( ! value ) } />
```

Toggled on.
```jsx
const [ value, update ] = React.useState(true);
<Toggle on="On" off="Off" checked={value} onClick={ () => update( ! value ) } />
```

Disabled.
```jsx
const [ value, update ] = React.useState(true);
<Toggle on="On" off="Off" disabled checked={value} onClick={ () => update( ! value ) } />
```

Displays as `block`.

```jsx
const [ valueA, updateA ] = React.useState(false);
const [ valueB, updateB ] = React.useState(true);
<>
    <Toggle on="On" off="Off" checked={valueA} onClick={ () => updateA( ! valueA ) } />
    <Toggle on="On" off="Off" checked={valueB} onClick={ () => updateB( ! valueB ) } />
</>
```

Works in `Grid`.
```jsx
const [ valueA, updateA ] = React.useState(false);
const [ valueB, updateB ] = React.useState(true);
<Grid auto={[6]}>
    <Toggle on="On" off="Off" checked={valueA} onClick={ () => updateA( ! valueA ) } />
    <Toggle on="On" off="Off" checked={valueB} onClick={ () => updateB( ! valueB ) } />
</Grid>
```

The `show` attribute.
```jsx
const [ value, updateTgl ] = React.useState(false);
const [ show, update ] = React.useState(true);
<Grid auto={[6]}>
    <Checkbox checked={show} label="`show` is `true`" unchecked="`show` is `false`" 
            onClick={ () => update( !show ) } />
    <Toggle show={show} on="On" off="Off" checked={value} onClick={ () => updateTgl( ! value ) } />
</Grid>
```

The `hide` attribute.
```jsx
const [ value, updateTgl ] = React.useState(false);
const [ hide, update ] = React.useState(false);
<Grid auto={[6]}>
    <Checkbox checked={hide} label="`hide` is `true`" unchecked="`hide` is `false`" 
            onClick={ () => update( !hide ) } />
    <Toggle hide={hide} on="On" off="Off" checked={value} onClick={ () => updateTgl( ! value ) } />
</Grid>
```

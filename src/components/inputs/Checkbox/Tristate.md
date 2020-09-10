A `Tristate` is a checkbox with three states where the third state is considered `indeterminate`.

##### CSS targets
```css 
label.tristate {}                   /* Label container. */
label.tristate .tristate-input {}   /* The input[type="checkbox"]. */
label.tristate .tristate-label {}   /* Internal label span. */
```

With constant label.
```jsx
let [ checked, update ] = React.useState( false );
<Tristate label="Item filter." checked={checked} onChange={ ( state ) => update( state )} />
```

With changing label.
```jsx
let [ checked, update ] = React.useState( false );
<Tristate label="Enabled" unchecked="Disabled" indeterminate="Enabled & Disabled"
         checked={checked} onChange={ ( state ) => update( state )} />
```

Setting the `indeterminate` state.
```jsx
let [ checked, update ] = React.useState( null );
<Tristate label="Enabled" unchecked="Disabled" indeterminate="Enabled & Disabled"
         checked={checked} onChange={ ( state ) => update( state )} />
```

Works with `Grid`.
```jsx
const [ valueA, updateA ] = React.useState(false);
const [ valueB, updateB ] = React.useState(null);
<Grid>
    <Tristate grid={[5]} 
            checked={valueA} label="Enabled" unchecked="Disabled" indeterminate="Enabled & Disabled"
            onChange={ ( state ) => updateA( state )} />
    <Tristate grid={[5]} 
            checked={valueB} label="Enabled" unchecked="Disabled" indeterminate="Enabled & Disabled"
            onChange={ ( state ) => updateB( state )} />
</Grid>
```

The `show` attribute.
```jsx
const [ show, update ] = React.useState(true);
const [ checked, updateTri ] = React.useState( false );
<Grid auto={[6]}>
    <Checkbox checked={show} label="`show` is `true`" unchecked="`show` is `false`" 
            onClick={ () => update( !show ) } />
    <Tristate show={show} 
                label="Item filter." checked={checked} onChange={ ( state ) => updateTri( state )} />
</Grid>
```

The `hide` attribute.
```jsx
const [ hide, update ] = React.useState(false);
const [ checked, updateTri ] = React.useState( false );
<Grid auto={[6]}>
    <Checkbox checked={hide} label="`hide` is `true`" unchecked="`hide` is `false`" 
            onClick={ () => update( !hide ) } />
    <Tristate hide={hide}
                label="Item filter." checked={checked} onChange={ ( state ) => updateTri( state )} />
</Grid>
```

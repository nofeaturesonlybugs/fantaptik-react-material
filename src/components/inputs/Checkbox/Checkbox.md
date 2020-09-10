##### CSS targets
```css
label.checkbox {}                   /* Label container. */
label.checkbox .checkbox-input {}   /* The input[type="checkbox"]. */
label.checkbox .checkbox-label {}   /* Internal label span. */
```

With constant label.
```jsx
<Checkbox label="Check me!" />
```

With changing label.
```jsx
const [ checked, update ] = React.useState( false );
<Checkbox label="Check me!" unchecked="Not checked." checked={checked} onClick={ () => update(!checked) } />
```

Disabled.
```jsx
<Checkbox label="Check me!" disabled />
```

Pre-checked.
```jsx
const [ checked, update ] = React.useState( true );
<Checkbox label="Check me!" checked={checked} onClick={ () => update( !checked ) } />
```

Works with `Grid`.
```jsx
const [ valueA, updateA ] = React.useState( false );
const [ valueB, updateB ] = React.useState( null );
<Grid auto={[5]}>
    <Checkbox label="Check me!" checked={valueA} onClick={ () => updateA( ! valueA ) } />
    <Checkbox label="Check me!" checked={valueB} onClick={ () => updateB( ! valueB ) } />
</Grid>
```

The `show` attribute.
```jsx
const [ show, update ] = React.useState( true );
<Grid auto={[4]}>
    <Checkbox checked={show} label="`show` is `true`" unchecked="`show` is `false`" 
            onClick={ () => update( !show ) } />
    <Checkbox show={show} label="Check me!" />
</Grid>
```

The `hide` attribute.
```jsx
const [ hide, update ] = React.useState( false );
<Grid auto={[4]}>
    <Checkbox checked={hide} label="`hide` is `true`" unchecked="`hide` is `false`" 
            onClick={ () => update( !hide ) } />
    <Checkbox hide={hide} label="Check me!" />
</Grid>
```

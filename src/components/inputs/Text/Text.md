##### CSS targets
```css 
div.text.input-field {}                 /* Container div. */
div.text.input-field .text-input {}     /* Item div. */
div.text.input-field .text-label{}      /* Selected item divs */
```

Input example.
```jsx
const [ value, update ] = React.useState('');
<Text label="Greeting!" value={value} onChange={ value => update( value ) } />
```

With value.
```jsx
const [ value, update ] = React.useState('Hello, World!');
<Text label="Greeting!" value={value} onChange={ value => update( value ) } />
```

Placeholder example.
```jsx
const [ value, update ] = React.useState('');
<Text label="Greeting!" placeholder="Say something here..." value={value} onChange={ value => update( value ) } />
```

Disabled input.
```jsx
const [ value, update ] = React.useState('');
<Text disabled label="Greeting!" placeholder="Say something here..." value={value} onChange={ value => update( value ) } />
```

Required and validated.
```jsx
const [ value, update ] = React.useState('');
<Text required validate label="Greeting!" value={value} onChange={ value => update( value ) } />
```

Works with `Grid`.
```jsx
const [ valueA, updateA ] = React.useState('');
const [ valueB, updateB ] = React.useState('');
<Grid auto={[5]}>
    <Text required validate label="Greeting!" value={valueA} onChange={ value => updateA( value ) } />
    <Text required validate label="Greeting!" value={valueB} onChange={ value => updateB( value ) } />
</Grid>
```

The `show` attribute.
```jsx
const [ value, updateTxt ] = React.useState('');
const [ show, update ] = React.useState(true);
<Grid auto={[6]}>
    <Checkbox checked={show} label="`show` is `true`" unchecked="`show` is `false`" 
            onClick={ () => update( !show ) } />
    <Text show={show} label="Greeting!" value={value} onChange={ value => updateTxt( value ) } />
</Grid>
```

The `hide` attribute.
```jsx
const [ value, updateTxt ] = React.useState('');
const [ hide, update ] = React.useState(false);
<Grid auto={[6]}>
    <Checkbox checked={hide} label="`hide` is `true`" unchecked="`hide` is `false`" 
            onClick={ () => update( !hide ) } />
    <Text hide={hide} label="Greeting!" value={value} onChange={ value => updateTxt( value ) } />
</Grid>
```

## `Text.Password`
`Text.Password` with empty password.
```jsx
const [value,update] = React.useState('');
<Text.Password label="Password" value={value} onChange={value => update( value )} />
```

`Text.Password` with pre-filled password.
```jsx
const [value,update] = React.useState('s3cr3t');
<Text.Password label="Password" value={value} onChange={value => update( value )} />
```

`Text.Password` with `placeholder`.
```jsx
const [value,update] = React.useState('');
<Text.Password label="Password" placeholder="Don't share it!" value={value} onChange={value => update( value )} />
```

##### CSS targets
```css 
div.select.input-field {}                   /* Container div. */
div.select.input-field .select-input {}     /* Item div. */
div.select.input-field .select-label {}     /* Selected item divs */
```

A select.
```jsx
<Select>
    <Select.Option value="greeting" label="Hello" />
    <Select.Option value="farewell" label="Goodbye" />
    <Select.Option value="idle" label="..." />
</Select>
```

Pre-selected.
```jsx
<Select value="idle">
    <Select.Option value="greeting" label="Hello" />
    <Select.Option value="farewell" label="Goodbye" />
    <Select.Option value="idle" label="..." />
</Select>
```

With a label.
```jsx
<Select label="Pick a saying...">
    <Select.Option value="greeting" label="Hello" />
    <Select.Option value="farewell" label="Goodbye" />
    <Select.Option value="idle" label="..." />
</Select>
```

Disabled.
```jsx
<Select label="Pick a saying..." disabled>
    <Select.Option value="greeting" label="Hello" />
    <Select.Option value="farewell" label="Goodbye" />
    <Select.Option value="idle" label="..." />
</Select>
```

Works with `Grid`.
```jsx
const [ valueA, updateA ] = React.useState('');
const [ valueB, updateB ] = React.useState('');
<Grid auto={[6]}>
    <Select label="Pick a saying..." value={valueA} onChange={(value)=>updateA(value)}>
        <Select.Option value="greeting" label="Hello" />
        <Select.Option value="farewell" label="Goodbye" />
        <Select.Option value="idle" label="..." />
    </Select>

    <Select label="Pick a saying..." value={valueB} onChange={(value)=>updateB(value)}>
        <Select.Option value="greeting" label="Hello" />
        <Select.Option value="farewell" label="Goodbye" />
        <Select.Option value="idle" label="..." />
    </Select>
</Grid>
```

The `show` attribute.
```jsx
const [ show, update ] = React.useState(true);
<Grid auto={[6]}>
    <Checkbox checked={show} label="`show` is `true`" unchecked="`show` is `false`" 
            onClick={ () => update( !show ) } />
    <Select show={show} label="Pick a saying...">
        <Select.Option value="greeting" label="Hello" />
        <Select.Option value="farewell" label="Goodbye" />
        <Select.Option value="idle" label="..." />
    </Select>
</Grid>
```

The `hide` attribute.
```jsx
const [ hide, update ] = React.useState(false);
<Grid auto={[6]}>
    <Checkbox checked={hide} label="`hide` is `true`" unchecked="`hide` is `false`" 
            onClick={ () => update( !hide ) } />
    <Select hide={hide} label="Pick a saying...">
        <Select.Option value="greeting" label="Hello" />
        <Select.Option value="farewell" label="Goodbye" />
        <Select.Option value="idle" label="..." />
    </Select>
</Grid>
```

Using `Select.Data`.
```jsx
let data = [
    { id : 1, username : "Larry" },
    { id : 2, username : "Curly" },
    { id : 3, username : "Moe" },
];
<Select label="Stooge">
    <Select.Data data={data} label="username" value="id" />
</Select>
```

Combining `Select.Data` and  `Select.Option`.
```jsx
let data = [
    { id : 1, username : "Larry" },
    { id : 2, username : "Curly" },
    { id : 3, username : "Moe" },
];
<Select label="Stooge">
    <Select.Option value="-1" label="Select a stooge..." />
    <Select.Data data={data} label="username" value="id" />
</Select>
```

Empty `Select`.
```jsx
<Select label="Empty" />
```
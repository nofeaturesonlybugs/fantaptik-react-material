An indeterminate loader.

```jsx
<Loader />
```

Within a `Grid`.
```jsx
<Grid>
    <Loader grid={[6]} />
    <Loader grid={[3]} />
    <Loader grid={[3]} />
</Grid>
```

The `show` attribute.
```jsx
const [ show, update ] = React.useState(true);
<>
    <Checkbox checked={show} label="`show` is `true`" unchecked="`show` is `false`" 
            onClick={ () => update( !show ) } />
    <br />
    <Loader show={show} />
</>
```

The `hide` attribute.
```jsx
const [ hide, update ] = React.useState(false);
<>
    <Checkbox checked={hide} label="`hide` is `true`" unchecked="`hide` is `false`" 
            onClick={ () => update( !hide ) } />
    <br />
    <Loader hide={hide} />
</>
```

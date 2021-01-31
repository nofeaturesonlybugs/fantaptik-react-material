`Button` implements Materialize CSS's *Button* component.

##### CSS targets
```css 
button.btn {}                       /* Rectangular button. */
button.btn-floating {}              /* Round button. */
button.btn-small {}                 /* Small button. */
button.btn-large {}                 /* Large button. */
```

```jsx
<>
    <Button>Click me!</Button>
    <Button><Icon />With Icon</Button>
</>
```

Round button with an icon.
```jsx
<Button round><Icon /></Button>
```

Disabled buttons.
```jsx
<>
    <Button disabled>Click me!</Button>
    <Button disabled round><Icon /></Button>
</>
```

Handling clicks.
```jsx
const [ count, update ] = React.useState(0);
<>
    <Button onClick={() => update( count + 1 )}>Click me!</Button>
    <span>Clicked {count} time(s)!</span>
</>
```

Works with `Grid`.
```jsx
<Grid>
    <Button grid={[1]}>Click me!</Button>
    <Button grid={[6]}>Click me!</Button>
    <Button grid={[2]}>Click me!</Button>
    <Button grid={[3]}>Click me!</Button>
</Grid>
```

The `show` attribute.
```jsx
const [ show, update ] = React.useState(true);
<Grid auto={[4]}>
    <Checkbox checked={show} label="`show` is `true`" unchecked="`show` is `false`" 
            onClick={ () => update( !show ) } />
    <Button show={show}>Click me!</Button>
</Grid>
```

The `hide` attribute.
```jsx
const [ hide, update ] = React.useState(false);
<Grid auto={[4]}>
    <Checkbox checked={hide} label="`hide` is `true`" unchecked="`hide` is `false`" 
            onClick={ () => update( !hide ) } />
    <Button hide={hide}>Click me!</Button>
</Grid>
```

```jsx
const [clicked, update] = React.useState( "" );
<>
    <RectBoxes onClick={ clicked => update( clicked ) } />
    <pre>clicked= {clicked}</pre>
</>
```
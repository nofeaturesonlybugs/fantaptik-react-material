A `List` is a Materialize CSS *Collections*.

##### CSS targets
Due to how Materialize CSS works there will be additional CSS classes: `collection`, `collection-header`, `collection-item`, & `with-header`.
```css 
div.list {}                     /* List div. */
div.list.with-group {}         /* List div with List.Group children. */
div.list-group {}               /* Group div. */
div.list-item {}                /* Item div. */
```

```jsx
<List>
    <List.Item>Red</List.Item>
    <List.Item active>Blue</List.Item>
    <List.Item active={false}>Yellow</List.Item>
    <List.Item active={true}>Indigo</List.Item>
</List>
```

With `Card` as the items.
```jsx
<List>
    <Card>
        <Card.Title>First</Card.Title>
        <p>Check me out!</p>
        <p>Read this too...</p>
    </Card>
    <Card>
        <Card.Title>Second</Card.Title>
        <p>Check me out!</p>
        <p>Read this too...</p>
    </Card>
    <Card>
        <Card.Title>Third</Card.Title>
        <p>Check me out!</p>
        <p>Read this too...</p>
    </Card>
</List>
```

With `List.Group`.
```jsx
const style = {
    fontSize : "32px",
};

<List>
    <List.Group className="teal lighten-4" title="Colors" style={style}>
        <List.Item>Red</List.Item>
        <List.Item>Blue</List.Item>
        <List.Item>Yellow</List.Item>
        <List.Item>Indigo</List.Item>
    </List.Group>
    <List.Group className="blue lighten-4" title="People" style={style}>
        <Card>
            <Card.Title>Ralph</Card.Title>
            <p>Check me out!</p>
            <p>Read this too...</p>
        </Card>
        <Card>
            <Card.Title>Mandy</Card.Title>
            <p>Check me out!</p>
            <p>Read this too...</p>
        </Card>
        <Card>
            <Card.Title>Burt</Card.Title>
            <p>Check me out!</p>
            <p>Read this too...</p>
        </Card>
    </List.Group>
</List>
```

The `show` attribute.
```jsx
const [ show, update ] = React.useState(true);
<>
    <Checkbox checked={show} label="`show` is `true`" unchecked="`show` is `false`" 
            onClick={ () => update( !show ) } />
    <List show={show}>
        <List.Item>Red</List.Item>
        <List.Item>Blue</List.Item>
        <List.Item>Yellow</List.Item>
        <List.Item>Indigo</List.Item>
    </List>
</>
```

The `hide` attribute.
```jsx
const [ hide, update ] = React.useState(false);
<>
    <Checkbox checked={hide} label="`hide` is `true`" unchecked="`hide` is `false`" 
            onClick={ () => update( !hide ) } />
    <List hide={hide}>
        <List.Item>Red</List.Item>
        <List.Item>Blue</List.Item>
        <List.Item>Yellow</List.Item>
        <List.Item>Indigo</List.Item>
    </List>
</>
```

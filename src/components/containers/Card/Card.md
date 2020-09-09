Use `Card.Title` and `Card.Actions` to fill in designated areas of the card; all other children
are placed into the content area.

##### CSS targets
```css 
div.card {}                 /* Card div. */
div.card-title {}           /* Title div. */
div.card-action {}          /* Action div. */
```

Sample card.

```jsx
<Card>
    <Card.Title>My sample card!</Card.Title>
    <p>Check me out!</p>
    <p>Read this too...</p>
    <Card.Actions>
        <Button>One</Button>
        <Button>Two</Button>
    </Card.Actions>
</Card>
```

Without actions.
```jsx
<Card>
    <Card.Title>My sample card!</Card.Title>
    <p>Check me out!</p>
    <p>Read this too...</p>
</Card>
```

Without title.
```jsx
<Card>
    <p>Check me out!</p>
    <p>Read this too...</p>
    <Card.Actions>
        <Button>One</Button>
        <Button>Two</Button>
    </Card.Actions>
</Card>
```

Works with `Carousel`.
```jsx
<Carousel>
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
</Carousel>
```

Works with `Grid`.
```jsx
<Grid auto={[3]}>
    <Card>
        <Card.Title>3 Wide</Card.Title>
        <p>Check me out!</p>
        <p>Read this too...</p>
    </Card>
    <Card grid={[6]}>
        <Card.Title>6 Wide!</Card.Title>
        <p>Check me out!</p>
        <p>Read this too...</p>
    </Card>
    <Card grid={[12]}>
        <Card.Title>12 Wide!</Card.Title>
        <p>Check me out!</p>
        <p>Read this too...</p>
    </Card>
</Grid>
```

Works with `List`.
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

The `show` attribute.
```jsx
const [ show, update ] = React.useState(true);
<>
    <Checkbox checked={show} label="`show` is `true`" unchecked="`show` is `false`" 
            onClick={ () => update( !show ) } />
    <Card show={show}>
        <p>Check me out!</p>
        <p>Read this too...</p>
        <Card.Actions>
            <Button>One</Button>
            <Button>Two</Button>
        </Card.Actions>
    </Card>
</>
```

The `hide` attribute.
```jsx
const [ hide, update ] = React.useState(false);
<>
    <Checkbox checked={hide} label="`hide` is `true`" unchecked="`hide` is `false`" 
            onClick={ () => update( !hide ) } />
    <Card hide={hide}>
        <p>Check me out!</p>
        <p>Read this too...</p>
        <Card.Actions>
            <Button>One</Button>
            <Button>Two</Button>
        </Card.Actions>
    </Card>
</>
```

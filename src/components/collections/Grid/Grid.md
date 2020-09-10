`Grid` and `Grid.Item` implement Materalize CSS's grid system.

##### Understanding Size Properties
Small, medium, large, and extra large screen sizes are recognized by ordinal position in an array:
```json
    [ 'small', 'medium', 'large', 'extra-large' ]
```

Columns are 1 to 12 units wide on the respective screen size:
```json
    [ 12, 6, 4, 3 ]
    // 12 units wide on small
    // 6 units wide on medium
    // 4 units wide on large
    // 3 units wide on extra large
```

Unspecified widths are inherited from the smaller specified size:
```json
    [ 12, , 4 ]         // => 12 units on small and medium, 4 units on large and extra large
```

##### CSS targets
Due to how Materialize CSS works there will be additional CSS classes: `row`, `col`, `s*`, `m*`, `l*`, & `xl*` where
`*` is a number between 1 and 12 inclusive.
```css 
div.grid {}                     /* Grid div. */
div.grid-item {}                /* Item div. */
```

```jsx
<Grid>
    <Grid.Item size={[12,4]} className="blue">Blue</Grid.Item>
    <Grid.Item size={[4, ,6]} className="red">Red</Grid.Item>
    <Grid.Item size={[4, ,6]} className="grey">Grey</Grid.Item>
    <Grid.Item size={[4, ,6]} className="yellow">Yellow</Grid.Item>
</Grid>
```

Automatic sizing with `auto`.
```jsx
const styles = {
    width: "200px",
    height: "200px",
    lineHeight: "200px",
};

const [ toggle, updateToggle ] = React.useState( true );
<>
    <Toggle on="Card" off="Carousel" checked={toggle} onClick={() => updateToggle( ! toggle )} />
    <Grid auto={[6,3]} show={toggle === true}>
        Hello
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
    </Grid>
    <Grid auto={[12,6]} show={toggle === false}>
        <Carousel>
            <div style={styles} className="red" />
            <div style={styles} className="yellow" />
            <div style={styles} className="green" />
            <div style={styles} className="blue" />
            <div style={styles} className="grey" />
            <div style={styles} className="indigo" />
        </Carousel>
        <Carousel>
            <div style={styles} className="red" />
            <div style={styles} className="yellow" />
            <div style={styles} className="green" />
            <div style={styles} className="blue" />
            <div style={styles} className="grey" />
            <div style={styles} className="indigo" />
        </Carousel>
    </Grid>
</>
```

The `show` attribute.
```jsx
const [ show, update ] = React.useState(true);
<>
    <Checkbox checked={show} label="`show` is `true`" unchecked="`show` is `false`" 
            onClick={ () => update( !show ) } />
    <Grid show={show}>
        <Grid.Item size={[12,4]} className="blue">Blue</Grid.Item>
        <Grid.Item size={[4, ,6]} className="red">Red</Grid.Item>
        <Grid.Item size={[4, ,6]} className="grey">Grey</Grid.Item>
        <Grid.Item size={[4, ,6]} className="yellow">Yellow</Grid.Item>
    </Grid>
</>
```

The `hide` attribute.
```jsx
const [ hide, update ] = React.useState(false);
<>
    <Checkbox checked={hide} label="`hide` is `true`" unchecked="`hide` is `false`" 
            onClick={ () => update( !hide ) } />
    <Grid hide={hide}>
        <Grid.Item size={[12,4]} className="blue">Blue</Grid.Item>
        <Grid.Item size={[4, ,6]} className="red">Red</Grid.Item>
        <Grid.Item size={[4, ,6]} className="grey">Grey</Grid.Item>
        <Grid.Item size={[4, ,6]} className="yellow">Yellow</Grid.Item>
    </Grid>
</>
```

Nested grids.
```jsx
<Grid auto={[6,3]}>
    <Grid>
        <Grid.Item size={[4, ,6]} className="blue">Blue</Grid.Item>
        <Grid.Item size={[4, ,6]} className="red">Red</Grid.Item>
        <Grid.Item size={[4, ,6]} className="grey">Grey</Grid.Item>
        <Grid.Item size={[4, ,6]} className="yellow">Yellow</Grid.Item>
    </Grid>
    <Grid>
        <Grid.Item size={[4, ,6]} className="blue">Blue</Grid.Item>
        <Grid.Item size={[4, ,6]} className="red">Red</Grid.Item>
        <Grid.Item size={[4, ,6]} className="grey">Grey</Grid.Item>
        <Grid.Item size={[4, ,6]} className="yellow">Yellow</Grid.Item>
    </Grid>
    <Grid size={[12,6,4]}>
        <Grid.Item size={[4, ,6]} className="blue">Blue</Grid.Item>
        <Grid.Item size={[4, ,6]} className="red">Red</Grid.Item>
        <Grid.Item size={[4, ,6]} className="grey">Grey</Grid.Item>
        <Grid.Item size={[4, ,6]} className="yellow">Yellow</Grid.Item>
    </Grid>
</Grid>
```

An empty `Grid`.
```jsx
<Grid />
```

`Grid` inspects non-`Grid.Item` children for a `grid` property.
```jsx
<Grid auto={[6]}>
    <Text id="street" label="Street" placeholder="Street..." />
    <Text id="street2" label="Street 2" placeholder="Street 2..." />
    <Text grid={[6]} id="city" label="City" placeholder="City..." />
    <Text grid={[2]} id="state" label="State" placeholder="State..." />
    <Text grid={[4]} id="zip" label="Zip" placeholder="Zip..." />
</Grid>
```
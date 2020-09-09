`Carousel` implements Materialize CSS's carousel component.

##### CSS targets
```css 
div.carousel {}                     /* Carousel div. */
div.carousel-item {}                /* Item div. */
```

A sample carousel.

```jsx
const styles = {
    width: "200px",
    height: "200px",
    lineHeight: "200px",
};
<Carousel>
    <div style={styles} className="red" />
    <div style={styles} className="yellow" />
    <div style={styles} className="green" />
</Carousel>
```

Wrapping disabled.
```jsx
const styles = {
    width: "200px",
    height: "200px",
    lineHeight: "200px",
};
<Carousel wrap={false}>
    <div style={styles} className="red" />
    <div style={styles} className="yellow" />
    <div style={styles} className="green" />
    <div style={styles} className="blue" />
    <div style={styles} className="grey" />
    <div style={styles} className="indigo" />
</Carousel>
```

Using `Card` as children.
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

The `show` attribute.
```jsx
const styles = {
    width: "200px",
    height: "200px",
    lineHeight: "200px",
};
const [ show, update ] = React.useState(true);
<>
    <Checkbox checked={show} label="`show` is `true`" unchecked="`show` is `false`" 
            onClick={ () => update( !show ) } />
    <Carousel show={show} >
        <div style={styles} className="red" />
        <div style={styles} className="yellow" />
        <div style={styles} className="green" />
    </Carousel>
</>
```

The `hide` attribute.
```jsx
const styles = {
    width: "200px",
    height: "200px",
    lineHeight: "200px",
};
const [ hide, update ] = React.useState(false);
<>
    <Checkbox checked={hide} label="`hide` is `true`" unchecked="`hide` is `false`" 
            onClick={ () => update( !hide ) } />
    <Carousel hide={hide} >
        <div style={styles} className="red" />
        <div style={styles} className="yellow" />
        <div style={styles} className="green" />
    </Carousel>
</>
```

An empty `Carousel`.
```jsx
<Carousel wrap />
```
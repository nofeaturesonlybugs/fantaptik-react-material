`Position.Fill` stretches to fill available space.

This example shows three center columns that adjust their height according to the container.
```jsx
let styles = {
    container : {
        position : "relative",
        width : "600px",
    },
    header : {
        height : "80px",
        backgroundColor : "#bbdefb ",
    },
    footer : {
        height : "20px",
        backgroundColor : "#bbdefb ",
    },
    fillContainer : {
        padding : "0px",
    },
    left : {
        float : "left",
        width : "120px",
        backgroundColor : "#ffcdd2",
    },
    right : {
        float : "left",
        width : "80px",
        backgroundColor : "#ffcdd2",
    },
    fill : {
        float : "left",
        width : "400px",
        backgroundColor : "#ffeb3b",
    },
};
const [height, setHeight] = React.useState( 600 );
styles.container.height = height + "px";
<div style={styles.container} id="example_fill_heights">
    <p className="range-field">
        Adjust the vertical height between the header and footer:
        <input value={height} type="range" min="300" max="900" onChange={ e => setHeight( e.target.value ) } />
    </p>
    <Grid>
        <Grid.Item size={[12]} style={styles.header} id="header_heights">
            Page Header
        </Grid.Item>
        <Grid.Item size={[12]} style={styles.fillContainer}>
            <Position.Fill apply="styles"
                container="#example_fill_heights"
                heightWatches={["#header_heights","#footer_heights"]}>
                <div style={styles.left}>
                    Left Column
                </div>
                <div style={styles.fill} />
                <div style={styles.right}>
                    Right Column
                </div>
            </Position.Fill>
            <div style={{clear:"both"}} />
        </Grid.Item>
        <Grid.Item size={[12]} style={styles.footer} id="footer_heights">
            Page Footer
        </Grid.Item>
    </Grid>
</div>
```

The yellow center is adjusted as the sliders are changed.
```jsx
let styles = {
    container : {
        position : "relative",
    },
    header : {
        height : "80px",
        backgroundColor : "#bbdefb ",
    },
    footer : {
        height : "20px",
        backgroundColor : "#bbdefb ",
    },
    fillContainer : {
        padding : "0px",
    },
    left : {
        float : "left",
        height : "300px",
        backgroundColor : "#ffcdd2",
    },
    right : {
        float : "left",
        height : "300px",
        backgroundColor : "#ffcdd2",
    },
    fill : {
        float : "left",
        height : "300px",
        backgroundColor : "#ffeb3b",
    },
};
const { left, right } = { left : 120, right : 80 };
const [width, setWidth] = React.useState( 100 );
const [mult, setMult] = React.useState( 100 );
//
styles.container.width = width + "%";
styles.left.width = Math.floor((mult / 100) * left) + "px";
styles.right.width = Math.floor((mult / 100) * right) + "px";
//
<div style={styles.container} id="example_fill_widths">
    <p className="range-field">
        Adjust the container width:
        <input value={width} type="range" min="25" max="100" onChange={ e => setWidth( e.target.value ) } />
    </p>
    <p className="range-field">
        Scale left and right by {mult}%:
        <input value={mult} type="range" min="50" max="200" onChange={ e => setMult( e.target.value ) } />
    </p>
    <Grid>
        <Grid.Item size={[12]} style={styles.header} id="header_widths">
            Page Header
        </Grid.Item>
        <Grid.Item size={[12]} style={styles.fillContainer}>
            <div style={styles.left} id="left_widths">
                Left Column
            </div>
            <Position.Fill apply="styles"
                container="#example_fill_widths"
                widthWatches={["#left_widths","#right_widths"]}>
                <div style={styles.fill} />
            </Position.Fill>
            <div style={styles.right} id="right_widths">
                Right Column
            </div>
            <div style={{clear:"both"}} />
        </Grid.Item>
        <Grid.Item size={[12]} style={styles.footer} id="footer_width">
            Page Footer
        </Grid.Item>
    </Grid>
</div>
```

The left and right bars are adjusted vertically; the yellow center is adjusted vertically and horizontally.
```jsx
let styles = {
    container : {
        position : "relative",
    },
    fullScreen : {
        position : "absolute",
        top : "0",
        left : "0",
        width : "100%",
        height : "100%",
    },
    expando : {
        position : "absolute",
        top : "5px",
        right : "5px",
        cursor : "pointer",
    },
    header : {
        height : "80px",
        backgroundColor : "#bbdefb ",
    },
    footer : {
        height : "20px",
        backgroundColor : "#bbdefb ",
    },
    fillContainer : {
        padding : "0px",
    },
    fill : {
        float : "left",
        backgroundColor : "#ffeb3b",
    },
    left : {
        float : "left",
        backgroundColor : "#ffcdd2",
    },
    right : {
        float : "left",
        backgroundColor : "#ffcdd2",
    },
};
const [width, setWidth] = React.useState( 100 );
const [height, setHeight] = React.useState( 600 );
const [left, setLeft] = React.useState( 120 );
const [right, setRight] = React.useState( 80 );
//
styles.container.width = width + "%";
styles.container.height = height + "px";
styles.left.width = left + "px";
styles.right.width = right + "px";

const [expanded, setExpanded] = React.useState( false );
<div style={expanded ? styles.fullScreen : styles.container} id="example_full">
    <Show when={! expanded}>
        <p className="range-field">
            Adjust the container width:
            <input value={width} type="range" min="25" max="100" onChange={ e => setWidth( e.target.value ) } />
        </p>
        <p className="range-field">
            Adjust the vertical height between the header and footer:
            <input value={height} type="range" min="300" max="900" onChange={ e => setHeight( e.target.value ) } />
        </p>
    </Show>
    <div style={styles.expando}>
        <Icon show={expanded} onClick={() => setExpanded( false )}>fullscreen_exit</Icon>
        <Icon show={! expanded} onClick={() => setExpanded( true )}>fullscreen</Icon>
    </div>
    <Grid>
        <Grid.Item size={[12]} style={styles.header} id="header_full">
            Page Header
        </Grid.Item>
        <Grid.Item size={[12]} style={styles.fillContainer}>
            <div style={styles.left} id="left_full">
                Left Column
                <p className="range-field">
                    <input value={left} type="range" min="25" max="160" onChange={ e => setLeft( e.target.value ) } />
                </p>
            </div>
            <div style={styles.fill} id="fill_full" />
            <div style={styles.right} id="right_full">
                Right Column
                <p className="range-field">
                    <input value={right} type="range" min="25" max="160" onChange={ e => setRight( e.target.value ) } />
                </p>
            </div>
            <div style={{clear:"both"}} />
            <Position.Fill apply="styles"
                container={! expanded ? "#example_full" : null}
                heightWatches={["#header_full","#footer_full"]} widthWatches={["#left_full","#right_full"]}
                heightTargets={["#left_full", "#right_full", "#fill_full"]} widthTargets={["#fill_full"]} />
        </Grid.Item>
        <Grid.Item size={[12]} style={styles.footer} id="footer_full">
            Page Footer
        </Grid.Item>
    </Grid>
</div>
```
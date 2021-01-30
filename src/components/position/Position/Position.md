`Position` positions its child element relative to a target element.

##### Important
This component does not update `child` during:  
* Window resizes or scrolls
* `child` resizes or positional changes
* `target` resizes

##### CSS targets
```css 
div.position-container {}               /* The `child` element will be wrapped in this div. */
div.position-container.used-body {}     /* `target` not found; "body" used instead. */
```

Click any of the red buttons for `child` or `target` to change how the `child` is positioned over `target`.
```jsx
const width = 240;
const styles = { 
    label : {
        width : width + "px", 
        display : "inline-block", 
        lineHeight : "32px", fontSize : "larger", textAlign : "center",
    },
    rect : {
        display : "inline-block",
    },
    child : {
        borderRadius : "5px",
        opacity : ".5",
    },
    target : {
        display : "inline-block",
        marginLeft : "20px",
    }
};
const props = {
    label   : { style : styles.label },
    rect    : { outer : width, style : styles.rect },
    target  : { width : width, style : styles.target },
    child   : { width : Math.floor( width * .15 ), style : styles.child, className : "black", },
}
const [put, updatePut] = React.useState( "center" );
const [at, updateAt] = React.useState( "center" );
<>
    <div>
        <label {...props.label}>child</label>
        <label {...props.label}>target</label>
    </div>
    <RectBoxes {...props.rect} onClick={updatePut} />
    <RectBoxes {...props.rect} onClick={updateAt} />

    <Position.DemoTarget className="target light-blue lighten-2" {...props.target} />

    <Position target=".target" put={put} at={at}>
        <Position.DemoChild {...props.child} />
    </Position>

    <Position.Mnemonic put={put} at={at} />
</>
```

The `target` property can be an array of strings and `Position` will use the first matching element.
```jsx
const targets = [
    ".target-not-found-asdfasdf",
    ".second-target"
];
<>
    <Position.DemoTarget className="second-target light-blue lighten-2" />
    <Position target={targets} put="center" at="center">
        <Position.DemoChild className="black" />
    </Position>
</>
```

If `target` can not be found then `"body"` is used and `put` and `at` are both set to `"center"`.
```jsx
const [show, update] = React.useState( false );
<>
    <Checkbox label="Show" checked={show} onClick={() => update( ! show )} />
    <Show when={show}>
        <Position>
            <Position.DemoTarget className="black" />
        </Position>
    </Show>
</>
```

`Position` updates both `child` and `target` on page scrolling and element resizing.
```jsx
const [childSize, setChild] = React.useState( 20 );
const [targetSize, setTarget] = React.useState( 200 );
<>
    <p className="range-field">
        <input value={childSize} type="range" min="20" max="200" onChange={ e => setChild( e.target.value ) } />
    </p>
    <p className="range-field">
        <input value={targetSize} type="range" min="20" max="600" onChange={ e => setTarget( e.target.value ) } />
    </p>
    <Position.DemoTarget width={targetSize} className="resizing-target light-blue lighten-2" />
    <Position target=".resizing-target">
        <Position.DemoChild width={childSize} className="black" style={ { opacity : ".5" } } />
    </Position>
</>
```
`Fab` implements Materialize CSS's *Floating Action Button* component.

##### CSS targets
```css 
div.fixed-action-btn {}                 /* Fab div. */
div.fixed-action-btn button {}          /* Primary button. */
div.fixed-action-btn ul {}              /* Secondary button(s) container. */
div.fixed-action-btn ul li {}           /* Secondary button(s) individual button container. */


div.fixed-action-btn.large {}           /* Primary button is large. */
div.fixed-action-btn.small {}           /* Primary button is small. */
div.fixed-action-btn ul.large {}        /* Secondary buttons are large. */
div.fixed-action-btn ul.small {}        /* Secondary buttons are small. */
```

```jsx
const [small, updateSmall] = React.useState( false );
const [large, updateLarge] = React.useState( false );
const [buttonsSmall, updateButtonsSmall] = React.useState( false );
const [buttonsLarge, updateButtonsLarge] = React.useState( false );
const [open, updateOpen] = React.useState( false );
<>
    <Checkbox label="Open." checked={open} onClick={() => updateOpen( ! open ) } />
    <br />
    <Checkbox label="Set to large." checked={large} onClick={() => updateLarge( ! large ) } />
    <br />
    <Checkbox label="Set to small." checked={small} onClick={() => updateSmall( ! small ) } />
    <br />
    <Checkbox label="Set buttons to large." checked={buttonsLarge} onClick={() => updateButtonsLarge( ! buttonsLarge ) } />
    <br />
    <Checkbox label="Set buttons to small." checked={buttonsSmall} onClick={() => updateButtonsSmall( ! buttonsSmall ) } />
    <br />

    <Fab large={large} small={small} icon="ac_unit" open={open}>
        <Fab.Items large={buttonsLarge} small={buttonsSmall}>
            <Fab.Item icon="check_box" />
            <Fab.Item icon="thumb_up_alt" />
            <Fab.Item icon="star" />
        </Fab.Items>
    </Fab>
</>
```
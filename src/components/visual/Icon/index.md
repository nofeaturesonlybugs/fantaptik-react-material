### *Requires Material Icons*
*Install material icons via webpack or link to them via CDN:*
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Different sizes!

```jsx
<div>
    <Icon tiny />
    <Icon small />
    <Icon medium />
    <Icon large />
</div>
```

Different icons; use strings defined by Material+Icons.

```jsx
<>
    <Icon medium>accessibility</Icon>
    <Icon medium>accessible</Icon>
    <Icon medium>account_box</Icon>
    <Icon medium>account_circle</Icon>
</>
```

The `show` attribute.
```jsx
 Checkbox from '../inputs/Checkbox/Checkbox';
const [ show, update ] = React.useState(true);
<>
    <Checkbox checked={show} label="`show` is `true`" unchecked="`show` is `false`" 
            onClick={ () => update( !show ) } />
    <br />
    <Icon show={show} medium>accessibility</Icon>
    <Icon show={show} medium>accessible</Icon>
    <Icon show={show} medium>account_box</Icon>
    <Icon show={show} medium>account_circle</Icon>
</>
```

The `hide` attribute.
```jsx
import Checkbox from '../inputs/Checkbox/Checkbox';
const [ hide, update ] = React.useState(false);
<>
    <Checkbox checked={hide} label="`hide` is `true`" unchecked="`hide` is `false`" 
            onClick={ () => update( !hide ) } />
    <br />
    <Icon hide={hide} medium>accessibility</Icon>
    <Icon hide={hide} medium>accessible</Icon>
    <Icon hide={hide} medium>account_box</Icon>
    <Icon hide={hide} medium>account_circle</Icon>
</>
```

An indeterminate loader.

```jsx
<Loader />
```

Within a `Grid`.
```jsx
import Grid from '../collections/Grid/Grid';
<Grid>
    <Loader grid={[6]} />
    <Loader grid={[3]} />
    <Loader grid={[3]} />
</Grid>
```

The `show` attribute.
```jsx
import Checkbox from '../inputs/Checkbox/Checkbox';
const [ show, update ] = React.useState(true);
<>
    <Checkbox checked={show} label="`show` is `true`" unchecked="`show` is `false`" 
            onClick={ () => update( !show ) } />
    <br />
    <Loader show={show} />
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
    <Loader hide={hide} />
</>
```

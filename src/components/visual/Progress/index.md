Different progress bars.

```jsx
<>
    <Progress value="10" />
    <Progress value="40" />
    <Progress value="85" />
</>
```

Within a `Grid`.
```jsx
import Grid from '../collections/Grid/Grid';
<Grid>
    <Progress grid={[6]} value="10" />
    <Progress grid={[3]} value="40" />
    <Progress grid={[3]} value="85" />
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
    <Progress show={show} value="10" />
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
    <Progress hide={hide} value="10" />
</>
```

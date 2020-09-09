```jsx
const [ value, update ] = React.useState( { address : "", name : "" } );
<>
    <Grid auto={[6]}>
        <EmailAddress layout="horizontal" address={value} onChange={ ( value ) => update( value ) } />
        <EmailAddress layout="vertical" address={value} onChange={ ( value ) => update( value ) } />
    </Grid>
    <pre>
        {JSON.stringify( value )}
    </pre>
</>
```
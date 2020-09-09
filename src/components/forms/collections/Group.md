`Group` displays a list of items with controls to reorder or delete elements.

```jsx
const initData = [
    { address : "gilligan@island.lost", name : "Gilligan" },
    { address : "skipper@island.lost", name : "Skipper" },
    { address : "Professor@island.lost", name : "Professor" },
];
const [ data, updateData ] = React.useState( initData );
const renderFn = address => ( <EmailAddress address={address} layout="horizontal" /> );
<>
    <Group data={data} render={renderFn} onChange={ data => updateData( data ) }>
        <Group.Add eventProp="onChange" itemProp="address" defaultItem={ { address : "", name : "" } }>
            <EmailAddress layout="horizontal" />
        </Group.Add>
        <Group.Items />
    </Group>
</>
```
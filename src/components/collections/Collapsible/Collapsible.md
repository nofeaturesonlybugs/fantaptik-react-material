`Collapsible` and `Collapsible.Item` implement Materalize CSS's collapsible component.

```jsx
const [ accordion, updateAccordion ] = React.useState( true );
<>
    <Toggle checked={accordion} on="Accordion" onClick={() => updateAccordion( ! accordion )} />
    <Collapsible accordion={accordion}>
        <Collapsible.Item title="First">
            Lorem ipsum dolor sit amet.
        </Collapsible.Item>
        <Collapsible.Item title="Second">
            Lorem ipsum dolor sit amet.
        </Collapsible.Item>
        <Collapsible.Item title="Third">
            Lorem ipsum dolor sit amet.
        </Collapsible.Item>
    </Collapsible>
</>
```

Titles with icons.
```jsx
const [ accordion, updateAccordion ] = React.useState( true );
const titles = {
    first : <><Icon>filter_drama</Icon>First</>,
    second : <><Icon>place</Icon>Second</>,
    third : <><Icon>whatshot</Icon>Third</>,
};
<>
    <Toggle checked={accordion} on="Accordion" onClick={() => updateAccordion( ! accordion )} />
    <Collapsible accordion={accordion}>
        <Collapsible.Item title={titles.first}>
            Lorem ipsum dolor sit amet.
        </Collapsible.Item>
        <Collapsible.Item title={titles.second}>
            Lorem ipsum dolor sit amet.
        </Collapsible.Item>
        <Collapsible.Item title={titles.third}>
            Lorem ipsum dolor sit amet.
        </Collapsible.Item>
    </Collapsible>
</>
```
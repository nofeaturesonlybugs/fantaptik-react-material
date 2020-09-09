##### CSS targets
```css 
div.slide-menu {}                   /* Menu div. */
div.slide-menu-item {}              /* Item div. */
div.slide-menu-item.selected {}     /* Selected item divs */
div.slide-menu-indicator {}         /* Indicator div. */
```

```jsx
const [ selected, updateSelected ] = React.useState( "reclining" );
<>
    <SlideMenu selected={selected} onChange={selected => updateSelected( selected )}>
        <SlideMenu.Item value="sitting">
            <Icon>airline_seat_recline_normal</Icon>
        </SlideMenu.Item>
        <SlideMenu.Item value="reclining">
            <Icon>airline_seat_flat_angled</Icon>
        </SlideMenu.Item>
        <SlideMenu.Item value="sleeping">
            <Icon>airline_seat_flat</Icon>
        </SlideMenu.Item>
    </SlideMenu>
    <p>
        The person is {selected}.
    </p>
</>
```

##### Browser Compatibility

Requires `Element.animate()` method for smooth indicator transitions.  Downgrades to indicating `selected` item
without animations.
`Modal` implements Materialize CSS's *Modal* component.

##### CSS targets
```css 
div.modal {}                        /* Modal div. */
div.modal-content {}                /* Content div. */
div.modal-footer {}                 /* Footer div. */
div.modal-close {}                  /* Close button icon. */
```

A default modal.
```jsx
const [ open, update ] = React.useState(false);
<>
    <Button onClick={() => update( true )}>Open Modal</Button>
    <Modal show={open} onDismissed={() => update( false )}>
        <p>
            Todos:
        </p>
        <ul>
            <li>Do this...</li>
            <li>Do that...</li>
            <li>Do something else...</li>
        </ul>
        <Modal.Footer>
            <Button onClick={() => update(false)}>Close</Button>
        </Modal.Footer>
    </Modal>
</>
```

A sample modal.
```jsx
const [ dismissible, updateDismissible ] = React.useState(false);
const [ hasClose, updateHasClose ] = React.useState(false);
const [ open, update ] = React.useState(false);
<>
    <Toggle off="Not Dissmissible" on="Dismissible" onClick={() => updateDismissible( ! dismissible )} />
    <Toggle off="No close" on="With close" onClick={() => updateHasClose( ! hasClose )} />
    <Button onClick={() => update( true )}>Open Modal</Button>
    <Modal show={open} dismissible={dismissible} hasClose={hasClose} onDismissed={() => update( false )}>
        <p>
            Todos:
        </p>
        <ul>
            <li>Do this...</li>
            <li>Do that...</li>
            <li>Do something else...</li>
        </ul>
        <Modal.Footer>
            <Button onClick={() => update(false)}>Close</Button>
        </Modal.Footer>
    </Modal>
</>
```

Using `Modal.Hoc`
```jsx
const ModalCard = Modal.Hoc( Card );
const [ dismissible, updateDismissible ] = React.useState(false);
const [ modal, updateModal ] = React.useState( false );
<>
    <Toggle off="Not Dissmissible" on="Dismissible" onClick={() => updateDismissible( ! dismissible )} />
    <Toggle off="Regular" on="Modal" checked={modal} onClick={() => updateModal( ! modal )} />
    <ModalCard modal={modal} dismissible={dismissible} onDismissed={() => updateModal( false )}>
        <ModalCard.Title>
            <h4>Study Guide</h4>
        </ModalCard.Title>
        <p>Today we will be studying Reactjs and High-Order-Components!</p>
        <ModalCard.Actions show={modal}>
            <Button onClick={() => updateModal( false )}>Close</Button>
        </ModalCard.Actions>
    </ModalCard>
</>
```
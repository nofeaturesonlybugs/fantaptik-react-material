Swap when children are switched.

```jsx
<Swap when={true}>
    <div>First!</div>
    <div>Second!</div>
</Swap>
```

Children should not be swapped.
```jsx
<Swap when={false}>
    <div>I am first!</div>
    <div>I'm second!</div>
</Swap>
```


Swap with one child.

```jsx
<Swap when={true}>
    <span>I am the only child here!</span>
</Swap>
```

Swap with no children.
```jsx
<Swap when={true}>
</Swap>
```

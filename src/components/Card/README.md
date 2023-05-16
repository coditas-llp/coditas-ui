# Card Component

## A component to display card with an icon, heading, paragraph, and a button.

```tsx
const Example = () => {
  return (
    <Card
      icon='path/to/icon.png'
      heading='Card Heading'
      paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      more_label='Read More'
      buttonRoute='/route'
    />
  )
}

export default Example
```

### Props

| Prop         | Type   | Required | Description                                |
| ------------ | ------ | -------- | ------------------------------------------ |
| `icon`       | string | Yes      | The path to the icon for the card.         |
| `heading`    | string | Yes      | The heading text for the card.             |
| `paragraph`  | string | Yes      | The paragraph text for the card.           |
| `more_label` | string | Yes      | The label text for the button in the card. |

# Accordion
## A customizable accordion component.

```tsx
import React from 'react';

const Example = () => {
  return (
    <Accordion
      index={0}
      image="path/to/image.png"
      title="Accordion Title"
      signColor="white"
      content={<p>Accordion Content</p>}
    />
  );
};

export default Example;
```

## Props

| Prop       | Type             | Required | Description                                  |
|------------|------------------|----------|----------------------------------------------|
| `index`    | `number`         | Yes      | The index of the accordion item.              |
| `image`    | `string`         | Yes      | The path to the image for the accordion item. |
| `title`    | `string`         | Yes      | The title of the accordion item.              |
| `signColor`| `string`         | Yes      | The color of the sign (add/remove) icon.      |
| `content`  | `React.ReactNode`| Yes      | The content of the accordion item.            |

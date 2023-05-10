# Carousel Component

## A carousel component for displaying a sequence of content with a next button.



```tsx

const Example = () => {
  const carouselContent = [
    <img src="image1.jpg" alt="Image 1" />,
    <img src="image2.jpg" alt="Image 2" />,
    <img src="image3.jpg" alt="Image 3" />,
  ];

  return (
    <Carousel length={carouselContent.length} content={carouselContent} />
  );
};
```

### Props

| Prop       | Type        | Required | Description                                      |
|------------|-------------|----------|--------------------------------------------------|
| `length`   | `number`    | Yes      | The number of items in the carousel.             |
| `content`  | `ReactNode` | Yes      | An array of React elements representing content. |

# Vertical Carousel Component

## A React component that displays a vertical carousel with customizable content.

```tsx
import React from 'react'
import { VerticalCarousel } from 'coditas-ui'

const App = () => {
  const carouselContent = [
    {
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      name: 'John Doe',
      designation: 'CEO',
      image: '/path/to/image1.jpg'
    },
    {
      review: 'Praesent vel neque non justo congue condimentum.',
      name: 'Jane Smith',
      designation: 'CTO',
      image: '/path/to/image2.jpg'
    }
    // Add more content objects as needed
  ]

  return (
    <div>
      <h1>Vertical Carousel Example</h1>
      <VerticalCarousel carouselContent={carouselContent} />
    </div>
  )
}

export default App
```

## Props

| Property      | Type   | Description                              |
| ------------- | ------ | ---------------------------------------- |
| `review`      | string | The review text.                         |
| `name`        | string | The name of the reviewer.                |
| `designation` | string | The designation of the reviewer.         |
| `image`       | string | The URL or path to the reviewer's image. |

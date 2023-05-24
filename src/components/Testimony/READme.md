# Testimony

## Testimony renders a testimonial section within a carousel.

```tsx
const employeeTestimony = {
  theme: 'dark',
  heading: 'Customer Testimonials',
  content: [
    {
      image: 'path-to-image1.jpg',
      review: 'Lorem ipsum dolor sit amet...',
      name: 'John Doe',
      designation: 'CEO'
    }
    // Add more testimonial objects here...
  ]
}

function App() {
  return (
    <div>
      <Testimony employeeTestimony={employeeTestimony} />
    </div>
  )
}
```

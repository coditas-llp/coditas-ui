# NavBar

## The NavBar component can be used in a React application to display a navigation bar.

```tsx
import React from 'react'
import NavBar from './NavBar'

const App = () => {
  const menuItems = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact-us' }
  ]

  return (
    <div>
      <NavBar logo='/path/to/logo.png' menuItems={menuItems} />
      <div>Rest of the App</div>
    </div>
  )
}

export default App
```

# Props

| Name        | Type         |
| ----------- | ------------ |
| `logo`      | `string`     |
| `menuItems` | `MenuItem[]` |

where `MenuItem` is an interface with following properties:

| Name    | Type     |
| ------- | -------- |
| `label` | `string` |

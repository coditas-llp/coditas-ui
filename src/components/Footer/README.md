# FOOTER

## Coditas Footer component.

```tsx
import React from 'react'

const Example = () => {
  return <Footer />
}

export default Example
```

## Props

| Prop name   | Prop type                                    | Description                                                                                                   |
| ----------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| active_link | string                                       | A URL link associated with the company data                                                                   |
| link        | string                                       | A string representing the name of the link                                                                    |
| label       | string                                       | A string representing the title of the footer section                                                         |
| isMobile    | boolean                                      | A boolean value indicating whether the user is accessing the website from a mobile device or not              |
| setExpand   | React.Dispatch<React.SetStateAction<string>> | A function that sets the state of the expand value                                                            |
| expand      | string                                       | A string representing the value that controls whether a footer section is expanded or not, initially an empty |

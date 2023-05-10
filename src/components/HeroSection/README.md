# HeroSection

## Renders a banner section with customizable content.

```tsx
<HeroSection
  bgImg='/path/to/background/image.jpg'
  heading='This is the heading'
  styleH1={{ color: 'red' }}
  paragraph='This is the paragraph text.'
  buttonStyle={{ backgroundColor: 'blue' }}
  buttonText='Click me'
  icons={['/path/to/icon1.png', '/path/to/icon2.png']}
/>
```

# Props

| Prop name   | Prop type           | Description                                                             |
| ----------- | ------------------- | ----------------------------------------------------------------------- |
| bgImg       | string              | A string representing the URL of the background image                   |
| heading     | string              | A string representing the main heading                                  |
| styleH1     | React.CSSProperties | An object representing the CSS styles to be applied to the main heading |
| paragraph   | string (optional)   | A string representing the subheading                                    |
| buttonStyle | React.CSSProperties | An object representing the CSS styles to be applied to the button       |
| buttonText  | string (optional)   | A string representing the text to be displayed in the button            |
| icons       | string[]            | An array of strings representing the URLs of the icons to be displayed  |

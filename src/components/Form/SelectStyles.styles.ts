import { StylesConfig } from 'react-select'

export const selectStyles: StylesConfig<any> = {
  control: (baseStyles: any) => ({
    ...baseStyles,

    '@media (min-width: 1048px) and (max-width: 1440px)': {
      boxSizing: 'border-box',
      display: 'flex',
      alignSelf: 'flex-start',
      color: '#101828',
      padding: '4px',
      gap: '8px',
      height: '48px',
      background: '#ffffff',
      border: '1px solid #dddddd',
      borderRadius: '4px',
      position: 'relative',

      '&:hover': {
        border: '1px solid #2C74D6'
      }
    },
    '@media (max-width: 1440px)': {
      boxSizing: 'border-box',
      display: 'flex',
      alignSelf: 'flex-start',
      color: '#101828',
      padding: '4px',
      gap: '8px',
      height: '48px',
      background: '#ffffff',
      border: '1px solid #dddddd',
      borderRadius: '4px',
      width: '100%',
      position: 'relative',

      '&:hover': {
        height: '48px',
        boxSizing: 'border-box',
        border: '1px solid #2C74D6'
      }
    },
    '@media (min-width: 1440px)': {
      boxSizing: 'border-box',
      boxShadow: ' 0px 1px 2px rgba(16, 24, 40, 0.05)',
      display: 'flex',
      alignSelf: 'flex-start',
      color: '#101828',
      gap: '8px',
      height: '48px',
      background: '#ffffff',
      border: '1px solid #dddddd',
      borderRadius: '4px',
      overflow: 'hidden',
      width: '100%',
      position: 'relative',

      '&:hover': {
        boxSizing: 'border-box',
        border: '1px solid #2C74D6'
      }
    }
  }),
  singleValue: (basestyles: any) => ({
    ...basestyles,
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0.5px',
    color: '#222222'
  }),
  input: (basestyles: any) => ({
    ...basestyles,
    margin: '0',
    padding: '0',
    height: '48'
  }),
  placeholder: (basestyles: any) => ({
    ...basestyles,
    display: 'flex',
    alignItems: 'center'
  }),
  multiValue: (baseStyles: any) => ({
    ...baseStyles,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6px 8px 6px 12px',
    gap: '8px',
    background: '#2c74d6',
    borderRadius: '16px'
  }),
  valueContainer: (baseStyles: any) => ({
    ...baseStyles,
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0'
  }),
  multiValueLabel: (base: any) => ({
    ...base,
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: '0.5px',
    color: '#ffffff'
  }),
  indicatorsContainer: (baseStyles: any) => ({
    ...baseStyles,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
    right: '0'
  }),
  menu: (baseStyles: any) => ({
    ...baseStyles,
    maxWidth: '100%',
    '@media (min-width: 1440px)': {
      maxWidth: '100%'
    }
  })
}

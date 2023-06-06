import React, { useMemo, useState } from 'react'
import './Form.scss'
import PhoneInput from 'react-phone-input-2'
import ReCAPTCHA from 'react-google-recaptcha'
import errorImage from './inputError.svg'
import { selectStyles } from './SelectStyles.styles'
import countryList from 'react-select-country-list'
import Select from 'react-select'
import { IFormProps } from './Form.types'

const Form = (props: IFormProps) => {
  const { onSubmit, maxLength, bgImage, imageHeading, imageSubHeading } = props
  const [formError, setFormError] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    companyname: ''
  })
  const [valueState, setValueState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    companyname: ''
  })
  const [value, setValue] = useState<any>()
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = (value: any) => {
    setValue(value)
  }
  const onMenuOpen = () => {}

  const handleChange = (name: string, value: string) => {
    const onlyCharacter = /^[a-zA-Z\s]*$/
    const onlyEmail = /\S+@\S+\.\S+/
    switch (name) {
      case 'firstname':
      case 'lastname': {
        setValueState({ ...valueState, [name]: value.trim() })
        !value.trim() || !onlyCharacter.test(value.trim())
          ? setFormError({
              ...formError,
              [name]: `Please enter a valid name`
            })
          : formError[name] && setFormError({ ...formError, [name]: '' })
        break
      }
      case 'email': {
        setValueState({ ...valueState, [name]: value.trim() })
        !value.trim() || !onlyEmail.test(value.trim())
          ? setFormError({
              ...formError,
              email: 'Please enter a valid email address'
            })
          : formError.email && setFormError({ ...formError, email: '' })
        break
      }
      case 'companyname': {
        setValueState({ ...valueState, companyname: value.trim() })
        !value.trim()
          ? setFormError({
              ...formError,
              companyname: 'Please enter your company name'
            })
          : formError.companyname &&
            setFormError({ ...formError, companyname: '' })
        break
      }
      case 'message': {
        setValueState({ ...valueState, message: value.trim() })
        break
      }
      default:
    }
  }

  const isFormValid =
    Object.values(valueState).every((value) => value.trim() !== '') &&
    Object.values(formError).every((error) => error === '')

  return (
    <div className='contact-main-container'>
      <div className='contact-sub-container'>
        <div className='image-container'>
          <img src={bgImage} alt='background image' />
          <div className='image-text-container'>
            <h2>{imageHeading}</h2>
            <p>{imageSubHeading}</p>
          </div>
        </div>
        <div className='form-main-container'>
          <header className='header-container'>
            <h1>Get in touch</h1>
            <p>Help us with the following details:</p>
          </header>
          <form className='form-container' onSubmit={onSubmit}>
            <div className='input-main-container'>
              <div className='form-input'>
                <div className='inputs'>
                  <label>
                    First name <span>*</span>
                  </label>
                  <input
                    type='text'
                    name='firstname'
                    placeholder='Your first name'
                    onChange={(e) =>
                      handleChange('firstname', e.currentTarget?.value)
                    }
                    value={valueState?.firstname}
                    className={!!formError.firstname ? 'error' : ''}
                  />
                  {!!formError.firstname && (
                    <img src={errorImage} alt='error' className='img-error' />
                  )}
                </div>
                <div className='error-message'>
                  {!!formError.firstname && (
                    <div className='error-image'>
                      <p>{formError.firstname}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className='form-input'>
                <div className='inputs'>
                  <label>
                    Last name <span>*</span>
                  </label>
                  <input
                    type='text'
                    name='lastname'
                    placeholder='Your last name'
                    onChange={(e) =>
                      handleChange('lastname', e.currentTarget?.value)
                    }
                    value={valueState?.lastname}
                    className={!!formError.lastname ? 'error' : ''}
                  />
                  {formError.lastname && (
                    <img src={errorImage} alt='error' className='img-error' />
                  )}
                </div>
                <div className='error-message'>
                  {!!formError.lastname && (
                    <div className='error-image'>
                      <p>{formError.lastname}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className='form-input'>
                <div className='inputs'>
                  <label>
                    Email address <span>*</span>
                  </label>
                  <input
                    type='text'
                    name='email'
                    placeholder='Your email address'
                    onChange={(e) =>
                      handleChange('email', e.currentTarget?.value)
                    }
                    value={valueState?.email}
                    className={!!formError.email ? 'error' : ''}
                  />
                  {formError.email && (
                    <img src={errorImage} alt='error' className='img-error' />
                  )}
                </div>
                <div className='error-message'>
                  {!!formError.email && (
                    <div className='error-image'>
                      <p>{formError.email}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className='form-input phone-input'>
                <div className='inputs'>
                  <label>
                    Mobile number <span>*</span>
                  </label>
                  <PhoneInput
                    inputProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: true
                    }}
                    placeholder='0000-0000-00'
                  ></PhoneInput>
                </div>
              </div>
              <div className='form-input'>
                <div className='inputs'>
                  <label>
                    Company <span>*</span>
                  </label>
                  <input
                    type='text'
                    name='companyname'
                    placeholder='Your company name'
                    onChange={(e) =>
                      handleChange('companyname', e.currentTarget?.value)
                    }
                    value={valueState?.companyname}
                    className={!!formError.companyname ? 'error' : ''}
                  />
                  {formError.companyname && (
                    <img src={errorImage} alt='error' className='img-error' />
                  )}
                </div>
                <div className='error-message'>
                  {!!formError.companyname && (
                    <div className='error-image'>
                      <p>{formError.companyname}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className='form-input country-input'>
                <div className='inputs'>
                  <label>
                    Country <span>*</span>
                  </label>
                  <Select
                    styles={selectStyles}
                    options={options}
                    value={value}
                    onChange={changeHandler}
                    onMenuOpen={onMenuOpen}
                    className='coutry-select'
                    placeholder='Select your country'
                    noOptionsMessage={() => 'Not Found'}
                    loadingMessage={() => 'Loading...'}
                    hideSelectedOptions={false}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='textarea-container'>
              <div className='textarea-input'>
                <label>
                  How can we help you? <span>*</span>
                </label>
                <textarea
                  name='message'
                  maxLength={maxLength}
                  placeholder='Enter your message...'
                  onChange={(e) =>
                    handleChange('message', e.currentTarget?.value)
                  }
                  className={!!formError.message ? 'error' : ''}
                ></textarea>
              </div>
              <div className='error-message'>
                {!!formError.message && (
                  <div className='error-image'>
                    <p>{formError.message}</p>
                  </div>
                )}
              </div>
            </div>
            <div className='button-container'>
              <ReCAPTCHA
                sitekey={String(process.env.REACT_APP_CAPTCHA_SITE_KEY)}
              />
              <button type='submit' disabled={!isFormValid}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form

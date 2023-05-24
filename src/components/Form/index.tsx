import React, { useState } from 'react'
import './Form.scss'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
const Form: React.FC = () => {
  const [state, setState] = useState<any>({})
  const handleChange = (e: any, type: string = '') => {
    if (type !== '') {
      setState((prev: any) => ({
        ...prev,
        [type]: e
      }))
    } else
      setState((prev: any) => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!state.captcha) {
      alert('Please complete the Captcha Challenge')
      return
    }

    setState((prev: any) => ({
      ...prev,
      ...{ isLoading: true }
    }))
    try {
      let apiURl =
        'https://us-central1-coditas-website.cloudfunctions.net/sendInfoMailTest'

      const config: any = {
        method: 'post' as string,
        url: apiURl as string,
        data: { ...state } as any,
        headers: {
          'Content-Type': 'application/json' as string,
          'Access-Control-Allow-Origin': '*' as string
        }
      }
      await axios(config)
      setState({
        name: '',
        email: '',
        phone: '',
        cloud: '',
        budget: '',
        timeline: '',
        message: '',
        captcha: ''
      })
    } catch (error) {
      throw error
    }
  }

  return (
    <div className='contact-us-form'>
      <h1>Have any queries?</h1>
      <label>Fill the form and we’ll reach out to you soon.</label>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-item'>
          <label>My name is</label>
          <input
            required
            name='name'
            value={state?.name}
            onChange={handleChange}
          ></input>{' '}
        </div>
        <div className='form-item'>
          <label>My phone number is</label>{' '}
          <PhoneInput
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: true
            }}
            value={state?.phone}
            onChange={(phone) => handleChange(phone, 'phone')}
          ></PhoneInput>{' '}
        </div>

        <div className='form-item'>
          <label>Reach me at</label>
          <input
            required
            name='email'
            type='email'
            value={state?.email}
            onChange={handleChange}
          ></input>
        </div>
        <div className='form-item'>
          <label>Preferred cloud provider(Optional)</label>
          <select name='cloud' value={state?.cloud} onChange={handleChange}>
            <option selected disabled>
              Please choose one option
            </option>
            <option>AWS</option>
            <option>GCP</option>
            <option>Azure</option>
          </select>
        </div>
        <div className='form-item'>
          <label>Budget Range(Optional)</label>
          <select name='budget' value={state?.budget} onChange={handleChange}>
            <option selected disabled>
              Please choose one option
            </option>
            <option>10-15</option>
            <option>15-20</option>
            <option>20-25</option>
          </select>
        </div>
        <div className='form-item'>
          <label>Timeline(Optional)</label>
          <select
            name='timeline'
            value={state?.timeline}
            onChange={handleChange}
          >
            <option selected disabled>
              Please choose one option
            </option>
            <option>1 month</option>
            <option>2 month</option>
            <option>3 month</option>
          </select>
        </div>
        <div className='form-item'>
          <label>My message</label>
          <textarea
            value={state?.message}
            required
            name='message'
            onChange={handleChange}
          />
        </div>
        <div className='verify'>
          <div className='label'>
            <label>Help us ensure you’re not a robot</label>
            <ReCAPTCHA
              sitekey='6LcoWJwUAAAAAAP9my8FGDHg24SuU_MlcY_aqyRQ'
              onChange={(value: any) => handleChange(value, 'captcha')}
            />
          </div>
          <button disabled={!state?.captcha && state?.isLoading}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form

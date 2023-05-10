import React from 'react'
import { company, work, social } from './TobeRemoved'
import './Footer.scss'
interface CompanyData {
  active_link: string
  link: string
}

interface FooterTitleProps {
  label: string
  isMobile: boolean
  setExpand: React.Dispatch<React.SetStateAction<string>>
  expand: string
}

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const [expand, setExpand] = React.useState('')
  const isMobile = navigator.appVersion.includes('Mobile')

  return (
    <div className={'footer_container'}>
      <div className='footer-content'>
        <div className='footer-bottom'>
          <div>
            <img
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ cursor: 'pointer' }}
              src='https://coditas.com/coditas_white.png'
              alt='logo'
            />
            <div className='code-is'>Code is art, Code is us</div>
          </div>
          <div className={'copyright'}>
            <span>&#169;</span>
            {new Date().getFullYear()} Coditas Technologies Pvt. Ltd. All rights
            reserved.
          </div>
        </div>
        <div className={'data_container'}>
          <div className={'links'}>
            <FooterTitle
              label='Company'
              isMobile={isMobile}
              setExpand={setExpand}
              expand={expand}
            />
            <ul
              className={`${'mobile-view'}  ${
                expand === 'Company' && 'expanded'
              }`}
            >
              {/* fetching links from array using map */}
              {company.map((data: CompanyData, i: number) => (
                <a
                  target='_blank'
                  rel='noreferrer'
                  key={i}
                  href={data?.active_link}
                >
                  <li key={i}>{data.link}</li>
                </a>
              ))}
            </ul>
          </div>
          <div className={'links'}>
            <FooterTitle
              label='Work'
              isMobile={isMobile}
              setExpand={setExpand}
              expand={expand}
            />
            <ul
              className={`${'mobile-view'}  ${expand === 'Work' && 'expanded'}`}
            >
              {/* fetching links from array using map */}
              {work.map((data: CompanyData, i: any) => (
                <a
                  target='_blank'
                  rel='noreferrer'
                  key={i}
                  href={data.active_link}
                >
                  <li key={i}>{data.link}</li>
                </a>
              ))}
            </ul>
          </div>
          <div className={'links'}>
            <FooterTitle
              label='Social Media'
              isMobile={isMobile}
              setExpand={setExpand}
              expand={expand}
            />
            <ul
              className={`${'mobile-view'}  ${
                expand === 'Social Media' && 'expanded'
              }`}
            >
              {/* fetching links from array using map */}
              {social.map((data: CompanyData, i: any) => (
                <a
                  target='_blank'
                  rel='noreferrer'
                  key={i}
                  href={data.active_link}
                >
                  <li key={i}>{data.link}</li>
                </a>
              ))}
            </ul>
          </div>
          <hr className='footer-hr' />
        </div>
      </div>
    </div>
  )
}
const FooterTitle: React.FC<FooterTitleProps> = (props) => {
  return (
    <div className='footer-title mon-700'>
      {props.label}
      <div
        onClick={() =>
          props.expand === props.label
            ? props.setExpand('')
            : props.setExpand(props.label)
        }
        className='expander show-mobile'
      >
        {props.expand === props.label ? '-' : '+'}
      </div>
    </div>
  )
}
export default Footer

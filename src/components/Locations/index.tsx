import React, { FC } from 'react'
import './Locations.scss'

interface LocationData {
  heading: string
  subText?: string
  locations?: Location[]
}

interface Location {
  mapImg: string
  countryName: string
  addresses: Address[]
}

interface Address {
  url: string
  address: string
}

const Locations: FC<{ locationData: LocationData }> = ({ locationData }) => {
  return (
    <div className='location'>
      <h1>{locationData.heading}</h1>
      {locationData?.subText?.split('||').map((text: string) => (
        <p>{text} </p>
      ))}
      <div className='content'>
        {locationData?.locations?.map((location: Location) => (
          <div className='location-card'>
            <img alt='map' src={location.mapImg}></img>
            <div className='addresses'>
              <h4>{location.countryName}</h4>
              {location.addresses.map((address: Address) => (
                <p>
                  <a href={address.url} target='_blank' rel='noreferrer'>
                    {address.address}
                  </a>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Locations

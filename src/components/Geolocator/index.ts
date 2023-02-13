import { useGeolocated } from 'react-geolocated'
import axios from 'axios'

interface geolocationData {
  latitude: number
  longitude: number
}

const API_KEY = 'a5892da8fbec4d9c8ce4d009bb389a87'

function getUserGeolocation() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const geolocation = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  })

  const { coords, isGeolocationAvailable, isGeolocationEnabled } = geolocation

  if (!isGeolocationAvailable) {
    console.log('Geolocation is not available')
  } else if (!isGeolocationEnabled) {
    console.log('Geolocation is disabled')
  } else if (coords) {
    const userGeoLocation = {
      latitude: coords.latitude,
      longitude: coords.longitude,
    }
    return userGeoLocation
  }
}

async function translateLatLongToAdress(latLong: geolocationData) {
  const data = await axios
    .get(
      'https://api.geoapify.com/v1/geocode/reverse?lat=' +
        latLong.latitude +
        '&lon=' +
        latLong.longitude +
        '&apiKey=' +
        API_KEY,
    )
    .then((response: any) => {
      return response.data
    })
    .catch((error: any) => {
      console.log(error)
    })
  return data
}

export async function getUserAdress() {
  const userLatLong = await getUserGeolocation()
  let userAdressData
  if (userLatLong !== undefined) {
    const userAdress = await translateLatLongToAdress(userLatLong)
    userAdressData = userAdress.features[0].properties
  }
  return userAdressData
}

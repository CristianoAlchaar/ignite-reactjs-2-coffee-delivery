import { useGeolocated } from 'react-geolocated'
import { axios } from 'axios'

interface geolocationData {
  latitude: number
  longitude: number
}

const API_KEY = 'a5892da8fbec4d9c8ce4d009bb389a87'

function getUserGeolocation() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    })

  if (!isGeolocationAvailable) {
    console.log('Geolocation is not available')
  } else if (!isGeolocationEnabled) {
    console.log('Geolocation is disabled')
  } else if (coords) {
    const userGeoLocation = {
      latitude: coords.latitude,
      longitude: coords.longitude,
    }
    console.log(userGeoLocation)
    return userGeoLocation
  }
}

function translateLatLongToAdress(latLong: geolocationData) {
  console.log(latLong)
  console.log('Longitude ' + latLong.longitude)
  console.log('Latitude ' + latLong.latitude)
  /* axios
    .get(
      'https://api.geoapify.com/v1/geocode/reverse?lat=' +
        latLong.latitude +
        '&lon=' +
        latLong.longitude +
        '&apiKey=' +
        API_KEY,
    )
    .then((response: any) => {
      console.log(response.data)
    })
    .catch((error: any) => {
      console.log(error)
    }) */
}

export async function getUserAdress() {
  const userLatLong = getUserGeolocation()
  if (userLatLong !== undefined) {
    const userAdress = await translateLatLongToAdress(userLatLong)
    console.log(userAdress)
  }
}

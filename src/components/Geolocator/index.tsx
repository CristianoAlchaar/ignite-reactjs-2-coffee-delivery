import { useGeolocated } from 'react-geolocated'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

interface geolocationData {
  latitude: number
  longitude: number
}

interface necessaryUserAdressData {
  city: string
  country_code: string
}

const API_KEY = 'a5892da8fbec4d9c8ce4d009bb389a87'

export function Geolocator() {
  const [finalUserAdress, setFinalUserAdress] =
    useState<necessaryUserAdressData>({ city: '', country_code: '' })

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    })

  const getUserAdress = useCallback(async () => {
    if (!isGeolocationAvailable) {
      console.log('Geolocation is not available')
    } else if (!isGeolocationEnabled) {
      console.log('Geolocation is disabled')
    } else if (coords) {
      const userGeoLocation = {
        latitude: coords.latitude,
        longitude: coords.longitude,
      }
      const userAdress = await translateLatLongToAdress(userGeoLocation)
      return userAdress
    } else {
      return undefined
    }
  }, [isGeolocationAvailable, isGeolocationEnabled, coords])

  async function translateLatLongToAdress(latLong: geolocationData) {
    const translated = await axios
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
    return translated.features[0].properties
  }

  useEffect(() => {
    const userAdressPromisse = getUserAdress()
    userAdressPromisse.then(
      (data) =>
        data !== undefined &&
        setFinalUserAdress({
          city: data.city,
          country_code: data.country_code,
        }),
    )
  }, [getUserAdress])

  return (
    <>
      {finalUserAdress.city !== '' && finalUserAdress.country_code !== '' ? (
        <>
          {finalUserAdress.city}, {finalUserAdress.country_code.toUpperCase()}
        </>
      ) : (
        <>Bem Vindo</>
      )}
    </>
  )
}

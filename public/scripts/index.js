function getLocation () {
  if ( navigator.geolocation ) {
    navigator.geolocation.getCurrentPosition( createMap , showError, { enableHighAccuracy: true, maximumAge: 1000, timeout: 60000 } )
  } else { 
    console.log( 'A localização geográfica não é suportada por este navegador' )
  }
}

function createMap ( position ) {
  const UserPosition = {
    Latitude: position.coords.latitude,
    Longitude: position.coords.longitude
  }

  // console.log( `Latitude: ${UserPosition.Latitude}` )
  // console.log( `Longitude: ${UserPosition.Longitude}` )

  let map = L.map('mapid').setView([UserPosition.Latitude, UserPosition.Longitude], 18)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
  L.marker([UserPosition.Latitude, UserPosition.Longitude]).addTo(map)

}

function showError ( error ) { 
  switch ( error.code ) {
    case error.PERMISSION_DENIED:
      console.log( 'Usuário negou a solicitação de geolocalização.' )
      break

    case error.POSITION_UNAVAILABLE:
      console.log( 'As informações de localização estão indisponíveis.' )
      break

    case error.TIMEOUT:
      console.log( 'O pedido para obter a localização do usuário expirou.' )
      break

    case error.UNKNOWN_ERROR:
      console.log( 'Ocorreu um erro desconhecido.' )
      break
  }
}

const orphanageSpan = document.querySelectorAll( '.orphanages span' )

orphanageSpan.forEach( span => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }

  addMarker( orphanage )
} )
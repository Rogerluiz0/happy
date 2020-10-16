const map = L.map('mapid').setView([-19.9023386,-44.1041383], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon( {
  iconUrl: '/assets/map-marker.svg', 
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
} )

function addMarker ( { id , name , lat , lng } ) {

  const popup = L.popup( {
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeigth: 240
  } ).setContent( `${name} <a href="/orphanage?id=${id}"> <img src="/assets/arrow-white.svg"> </a>` )

  L.marker([lat,lng], { icon }).
  addTo(map)
  .bindPopup(popup)

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
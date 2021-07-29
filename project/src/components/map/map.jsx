import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import offerProp from '../place-card/offer-prop';
import { connect } from 'react-redux';
import { getCity, getOffers } from '../../store/offers/selector';
function Map({offers, selectedPoint}) {
  const icon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
  const iconActive = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers);
  useEffect(() => {
    if (map) {
      map.setView(new leaflet.LatLng(offers[0].city.location.latitude, offers[0].city.location.longitude), offers[0].city.location.zoom);
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === selectedPoint.id)
              ? iconActive : icon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);
  return <div id="map" style={{ height: '100%' }} ref={mapRef}></div>;
}
Map.propTypes = {
  ...offerProp,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers: getOffers(state),
});

export { Map };
export default connect(mapStateToProps, null)(Map);

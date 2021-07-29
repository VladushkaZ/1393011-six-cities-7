import React, {useState} from 'react';
import PlaceCards from '../place-card/card-list';
import SortPopular from '../sort-popular/sort-popular';
import Map from '../map/map';
import offerProp from '../place-card/offer-prop';
import CitiesList from '../cities-list/cities-list';
import { connect } from 'react-redux';
import Header from '../header/header';
import { getCity, getOffers } from '../../store/offers/selector';
function MainScreen(props) {
  const { city, offers } = props;
  const [selectedPoint, setSelectedPoint] = useState({});
  const onListItemHover = (offerID) => {
    const currentPoint = offers.find(({ id }) =>
      Number(id) === Number(offerID),
    );
    setSelectedPoint(currentPoint);
  };
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList city={city} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in {city.title}
              </b>
              <SortPopular />
              <div className="cities__places-list places__list tabs__content">
                <PlaceCards offers={offers} onListItemHover={onListItemHover}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city.title} offers={offers} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainScreen.propTypes = {
  ...offerProp,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers: getOffers(state),
});

export { MainScreen };
export default connect(mapStateToProps)(MainScreen);

export const AppRoute = {
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
  ROOT: '/',
};

export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const POPULAR = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const CITY = [
  {
    title: 'Paris',
    lat: 48.8534100,
    lng: 2.3488000,
    zoom: 12,
  },
  {
    title: 'Amsterdam',
    lat: 52.38333,
    lng: 4.9,
    zoom: 12,
  },
  {
    title: 'Cologne',
    lat: 50.9333300,
    lng: 6.9500000,
    zoom: 12,
  },
  {
    title: 'Brussels',
    lat: 50.8504500,
    lng: 4.3487800,
    zoom: 12,
  },
  {
    title: 'Hamburg',
    lat: 53.5753200,
    lng: 10.0153400,
    zoom: 12,
  },
  {
    title: 'Dusseldorf',
    lat: 51.2217200,
    lng: 6.7761600,
    zoom: 12,
  },
];

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/Hotels',
  REVIEW: '/Comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

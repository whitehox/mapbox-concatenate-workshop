var config = {
  style: 'mapbox://styles/oketegah/ck1j58wjs06811cqmh95b323r', //TODO
  accessToken:
    'pk.eyJ1Ijoib2tldGVnYWgiLCJhIjoiY2sxajJ6dWx6MGJ0dDNpbW56dzFxNHRiZiJ9.GtGLaVhiXuDcKuJaMDU4Yw', //TODO
  title: 'YOUR MAP TITLE', //TODO
  subtitle: 'YOUR MAP SUBTITLE', //TODO
  byline: 'By YOUR NAME', //TODO
  footer: 'Created at Concatenate Lagos 2019',
  showMarkers: false,
  theme: 'light',
  alignment: 'left',
  chapters: [
    //TODO replace this data with data from the first point in your dataset
    {
      location: {
        center: [3.3554312695280544, 6.4408526097003005],
        zoom: 11.870243199385607,
        pitch: 0,
        bearing: 0,
      },
      title: 'Mobil Oil Nigeria Plc',
      description:
        'A brown building with a black gate. There is a  mini market just opposite it',
      id: 'mobil',
    },
    {
      location: {
        center: [3.5242163269091407, 6.438931587802756],
        zoom: 10.624559040535,
        pitch: 0,
        bearing: 0,
      },
      description: 'Traditions Building, has a supermarket below',
      id: 'Decagon',
      title: 'Decagon Institute',
    },
    //TODO Copy-paste more chapters here - one for each point in your dataset!
  ],
};

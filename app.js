const options = {
  method: 'GET',
  url: 'https://astronomy.p.rapidapi.com/api/v2/bodies/positions',
  params: {
    latitude: '33.775867',
    longitude: '-84.39733',
    from_date: '2017-12-20',
    to_date: '2017-12-21',
    elevation: '166',
    time: '12:00:00'
  },
  headers: {
    'X-RapidAPI-Key': '1308061d-67d4-45ab-9b88-ec800739e11d',
    'X-RapidAPI-Host': 'astronomy.p.rapidapi.com'
  }
};

axios.request(options)
  .then(response => {
    const apiDataDiv = document.getElementById('api-data');
    apiDataDiv.textContent = JSON.stringify(response.data);
  })
  .catch(error => {
    console.error(error);
  });

const initialState = {
    counties: [
        {
          "id": 1,
          "countyName": "Adalar",
          "lng": 29.097,
          "lat": 40.876,
          "zoom": 11.84
        },
        {
          "id": 2,
          "countyName": "Arnavutköy",
          "lng": 28.764,
          "lat": 41.224,
          "zoom": 11.27
        },
        {
          "id": 3,
          "countyName": "Ataşehir",
          "lng": 29.118,
          "lat": 40.995,
          "zoom": 12.78
        },
        {
          "id": 4,
          "countyName": "Avcılar",
          "lng": 28.744,
          "lat": 41.004,
          "zoom": 11.92
        },
        {
          "id": 5,
          "countyName": "Bağcılar",
          "lng": 28.835,
          "lat": 41.053,
          "zoom": 13.08
        },
        {
          "id": 6,
          "countyName": "Bahçelievler",
          "lng": 28.852,
          "lat": 41.005,
          "zoom": 12.91
        },
        {
          "id": 7,
          "countyName": "Bakırköy",
          "lng": 28.869,
          "lat": 40.983,
          "zoom": 13.22
        },
        {
          "id": 8,
          "countyName": "Başakşehir",
          "lng": 28.800,
          "lat": 41.089,
          "zoom": 12.40
        },
        {
          "id": 9,
          "countyName": "Bayrampaşa",
          "lng": 28.904,
          "lat": 41.049,
          "zoom": 13.28
        },
        {
          "id": 10,
          "countyName": "Beşiktaş",
          "lng": 29.006,
          "lat": 41.047,
          "zoom": 14.16
        },
        {
          "id": 11,
          "countyName": "Beykoz",
          "lng": 29.0929,
          "lat": 41.13692,
          "zoom": 14.3
        },
        {
          "id": 12,
          "countyName": "Beylikdüzü",
          "lng": 28.64337,
          "lat": 40.99033,
          "zoom": 12.39
        },
        {
          "id": 13,
          "countyName": "Beyoğlu",
          "lng": 28.98189,
          "lat": 41.03128,
          "zoom": 13.72
        },
        {
          "id": 14,
          "countyName": "Büyükçekmece",
          "lng": 28.5086,
          "lat": 41.0586,
          "zoom": 11.52
        },
        {
          "id": 15,
          "countyName": "Çatalca",
          "lng": 28.402,
          "lat": 41.332,
          "zoom": 10.24
        },
        {
          "id": 16,
          "countyName": "Çekmeköy",
          "lng": 29.21497,
          "lat": 41.04371,
          "zoom": 12.79
        },
        {
          "id": 17,
          "countyName": "Esenler",
          "lng": 28.88458,
          "lat": 41.05178,
          "zoom": 13.06
        },
        {
          "id": 18,
          "countyName": "Esenyurt",
          "lng": 28.68188,
          "lat": 41.02765,
          "zoom": 12.73
        },
        {
          "id": 19,
          "countyName": "Eyüpsultan",
          "lng": 28.93238,
          "lat": 41.0818,
          "zoom": 13.35
        },
        {
          "id": 20,
          "countyName": "Fatih",
          "lng": 28.95816,
          "lat": 41.01313,
          "zoom": 13.25
        },
        {
          "id": 21,
          "countyName": "Gaziosmanpaşa",
          "lng": 28.91099,
          "lat": 41.068,
          "zoom": 13.34
        },
        {
          "id": 22,
          "countyName": "Güngören",
          "lng": 28.88995,
          "lat": 41.02095,
          "zoom": 13.13
        },
        {
          "id": 23,
          "countyName": "Kadıköy",
          "lng": 29.07436,
          "lat": 40.9774,
          "zoom": 12.52
        },
        {
          "id": 24,
          "countyName": "Kâğıthane",
          "lng": 28.9792,
          "lat": 41.08789,
          "zoom": 13.64
        },
        {
          "id": 25,
          "countyName": "Kartal",
          "lng": 29.21497,
          "lat": 41.04371,
          "zoom": 12.61
        },
        {
          "id": 26,
          "countyName": "Küçükçekmece",
          "lng": 28.79888,
          "lat": 41.01811,
          "zoom": 11.89
        },
        {
          "id": 27,
          "countyName": "Maltepe",
          "lng": 29.1488,
          "lat": 40.93467,
          "zoom": 12.72
        },
        {
          "id": 28,
          "countyName": "Pendik",
          "lng": 29.27459,
          "lat": 40.88565,
          "zoom": 12.28
        },
        {
          "id": 29,
          "countyName": "Sancaktepe",
          "lng": 29.22206,
          "lat": 41.009,
          "zoom": 12.45
        },
        {
          "id": 30,
          "countyName": "Sarıyer",
          "lng": 29.04942,
          "lat": 41.16546,
          "zoom": 13.29
        },
        {
          "id": 31,
          "countyName": "Silivri",
          "lng": 28.25046,
          "lat": 41.07684,
          "zoom": 13.71
        },
        {
          "id": 32,
          "countyName": "Sultanbeyli",
          "lng": 29.26677,
          "lat": 40.97275,
          "zoom": 12.84
        },
        {
          "id": 33,
          "countyName": "Sultangazi",
          "lng": 28.87636,
          "lat": 41.10071,
          "zoom": 13.34
        },
        {
          "id": 34,
          "countyName": "Şile",
          "lng": 29.62256,
          "lat": 41.16626,
          "zoom": 13.23
        },
        {
          "id": 35,
          "countyName": "Şişli",
          "lng": 28.98602,
          "lat": 41.0576,
          "zoom": 13.48
        },
        {
          "id": 36,
          "countyName": "Tuzla",
          "lng": 29.30293,
          "lat": 40.82837,
          "zoom": 12.68
        },
        {
          "id": 37,
          "countyName": "Ümraniye",
          "lng": 29.12059,
          "lat": 41.01797,
          "zoom": 12.16
        },
        {
          "id": 38,
          "countyName": "Üsküdar",
          "lng": 29.04823,
          "lat": 41.0254,
          "zoom": 12.76
        },
        {
          "id": 39,
          "countyName": "Zeytinburnu",
          "lng": 28.91848,
          "lat": 41.00413,
          "zoom": 13.05
        }
      ],
    selectedCounty: {}
};


export default initialState;
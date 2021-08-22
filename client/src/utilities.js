export const convertToIndianNumberSystem = (x) => {
  if (!x) return;
  let lastThree = x.substring(x.length - 3);
  let otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
};

export const stateGeoCoordinates = [
  {
    name: "Andaman and Nicobar Islands",
    lat: 11.7401,
    lng: 92.6586,
  },
  {
    name: "Andhra Pradesh",
    lat: 15.9129,
    lng: 79.74,
  },
  {
    name: "Arunachal Pradesh",
    lat: 28.218,
    lng: 94.7278,
  },
  {
    name: "Assam",
    lat: 26.244156,
    lng: 92.537842,
  },
  {
    name: "Bihar",
    lat: 25.0961,
    lng: 85.3131,
  },
  {
    name: "Chandigarh",
    lat: 30.7333,
    lng: 76.7794,
  },
  {
    name: "Chhattisgarh",
    lat: 21.295132,
    lng: 81.828232,
  },
  {
    name: "Dadra and Nagar Haveli and Daman and Diu",
    lat: 20.227,
    lng: 73.0169,
  },
  {
    name: "Delhi",
    lat: 28.7041,
    lng: 77.1025,
  },
  {
    name: "Goa",
    lat: 15.2993,
    lng: 74.124,
  },
  {
    name: "Gujarat",
    lat: 22.309425,
    lng: 72.13623,
  },
  {
    name: "Haryana",
    lat: 29.238478,
    lng: 76.431885,
  },
  {
    name: "Himachal Pradesh",
    lat: 32.084206,
    lng: 77.571167,
  },
  {
    name: "Jammu and Kashmir",
    lat: 33.2778,
    lng: 75.3412,
  },
  {
    name: "Jharkhand",
    lat: 23.6102,
    lng: 85.2799,
  },
  {
    name: "Karnataka",
    lat: 15.317277,
    lng: 75.71389,
  },
  {
    name: "Kerala",
    lat: 10.850516,
    lng: 76.27108,
  },
  {
    name: "Ladakh",
    lat: 34.2268,
    lng: 77.5619,
  },
  {
    name: "Lakshadweep",
    lat: 10.5593,
    lng: 72.6358,
  },
  {
    name: "Madhya Pradesh",
    lat: 23.473324,
    lng: 77.947998,
  },
  {
    name: "Maharashtra",
    lat: 19.601194,
    lng: 75.552979,
  },
  {
    name: "Manipur",
    lat: 24.6637,
    lng: 93.9063,
  },
  {
    name: "Meghalaya",
    lat: 25.467,
    lng: 91.3662,
  },
  {
    name: "Mizoram",
    lat: 23.1645,
    lng: 92.9376,
  },
  {
    name: "Nagaland",
    lat: 26.1584,
    lng: 94.5624,
  },
  {
    name: "Odisha",
    lat: 20.94092,
    lng: 84.803467,
  },
  {
    name: "Puducherry",
    lat: 11.9416,
    lng: 79.8083,
  },
  {
    name: "Punjab",
    lat: 31.1471,
    lng: 75.3412,
  },
  {
    name: "Rajasthan",
    lat: 27.391277,
    lng: 73.432617,
  },
  {
    name: "Sikkim",
    lat: 27.533,
    lng: 88.5122,
  },
  {
    name: "Tamil Nadu",
    lat: 11.059821,
    lng: 78.387451,
  },
  {
    name: "Telangana",
    lat: 17.123184,
    lng: 79.208824,
  },
  {
    name: "Tripura",
    lat: 23.745127,
    lng: 91.746826,
  },
  {
    name: "Uttarakhand",
    lat: 30.0668,
    lng: 79.0193,
  },
  {
    name: "Uttar Pradesh",
    lat: 28.207609,
    lng: 79.82666,
  },
  {
    name: "West Bengal",
    lat: 22.978624,
    lng: 87.747803,
  },
];

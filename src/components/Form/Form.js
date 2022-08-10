// import axios from "axios";
// import { useState, useEffect } from "react";

// const Form = (props) => {
//   const apiKey = "MXFFkjAxTzeynZVDevsmUAAJ3OrzU7E0";

//   const firstAdd = "8009 164th St, Jamaica, NY 11432";
//   const secondAdd = "320 Beach 104 street, Rockaway Park, NY, 11694";
//   const [results, setResult] = useState([]);

//   let firstLatData;
//   let firstLonData;
//   let secondLatData;
//   let secondLonData;

//   const apiCall = async (event) => {
//     await axios
//       .get(
//         `https://api.tomtom.com/search/2/geocode/${firstAdd}.json?key=${apiKey}`
//       )
//       .then((response) => {
//         firstLatData = response.data.results[0].position.lat;
//         firstLonData = response.data.results[0].position.lon;

//         console.log(
//           `first address coordinates: ${firstLatData}, ${firstLonData}`
//         );
//       });
//     await axios
//       .get(
//         `https://api.tomtom.com/search/2/geocode/${secondAdd}.json?key=${apiKey}`
//       )
//       .then((response) => {
//         secondLatData = response.data.results[0].position.lat;
//         secondLonData = response.data.results[0].position.lon;
//         console.log(
//           `second address coordinates: ${secondLatData}, ${secondLonData}`
//         );
//       });
//     await axios

//       .post(
//         `https://api.tomtom.com/routing/1/calculateRoute/${firstLatData},${firstLonData}:${secondLatData},${secondLonData}/json?key=${apiKey}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((response) => console.log(response))
//       .catch((error) => {
//         console.log("problem with apiCall: " + error);
//       });
//   };

//   useEffect(() => {
//     apiCall();
//     // geocodeEnd();
//   }, []);

//   return (
//     <div>
//       <h1> form</h1>
//     </div>
//   );
// };

// export default Form;

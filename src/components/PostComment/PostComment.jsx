// import React, { useState, useEffect } from 'react';

// export default function PostComment(props) {

//     // Test for at user_id er der, find den og sæt den

//     let [ratings, setRatings] = useState(null);
//     let [userIds, setUserids] = useState(null);
//     let [userRating, setUserRating] = useState(null);
//     let [comment, setComment] = useState(null);
//     let [hotelId, sethotelId] = useState(null);


//     // Hver gang der ændres i userRating bliver der consol logged (pga. [userRating])
//     // [] = dependency array. Bliver lyttet på, hver gang den changes kører funktionen. Tomt array = kører kun på mount
// useEffect(() => {
//     // console.log(userRating)
// }, [userRating])

// useEffect(() => {
//     // console.log(comment)
// }, [comment])

// // useEffect(() => {
// //     console.log(hotelId)
// // }, [hotelId])


// // console.log(ratings)
// useEffect(() => {
// if (!userIds){
//     let testForId = sessionStorage.getItem('user_id');
//     if (testForId) {
//         setUserids(testForId);
//     }
// }
// }, [userIds, setUserids])

//     const postStuff = (userId, hotelId, numStars, comment = "test") => {

//         // Deklarerer headers
//         const headers = new Headers();
//         headers.append("Content-Type", "application/x-www-form-urlencoded");
//         headers.append("Authorization", "Bearer " + sessionStorage.getItem('token'));
//         const urlencodedBody = new URLSearchParams();
//         urlencodedBody.append("user_id", userId);
//         urlencodedBody.append("hotel_id", hotelId);
//         urlencodedBody.append("num_stars", numStars);
//         urlencodedBody.append("comment", comment);
//         // console.log(userIds);
//         console.log(userId);
//         console.log(hotelId);
//         console.log(numStars);
//         console.log(comment);

//         // DELETE FUNCTION WORKING

//         let deleteOptions = {
//             method: 'DELETE',
//             headers: headers
//         };

//         fetch("https://api.mediehuset.net/overlook/ratings/" + hotelId, deleteOptions)
//         .then((response) => response.json())
//         .then((result) => {
//           // console.log("login -> result", result);
//           getRatings();
//           return result;
//         })
//         .catch((err) => {
//           console.error(err);
//           return err;
//         });

// // DELETE WORKING END
            


//         // Deklarerer request options
//         let requestOptions = {
//           method: "POST",
//           headers: headers,
//           body: urlencodedBody,
//           redirect: "follow",
//         };

//         // Kalder login i API - returnerer array med token hvis true
//         fetch("https://api.mediehuset.net/overlook/ratings", requestOptions)
//           .then((response) => response.json())
//           .then((result) => {
//             // console.log("login -> result", result);
//             getRatings();
//             return result;
//           })
//           .catch((err) => {
//             console.error(err);
//             return err;
//           });
//       };
//       const getRatings = () => {
//         fetch("https://api.mediehuset.net/overlook/ratings/list_by_hotel/" + hotelId)
//           .then((res) => res.json())
//           .then((data) => {
//             // console.log(data)
//             setRatings(data.items)
//         });

//         };


// // NEW FETCH

// const [apiDatass, setApiDatass] = useState(null);
// async function getCategoryHotels() {
//     const fetchHeaders = new Headers();
//     fetchHeaders.append('Accept', 'application/json');
//     try {
//         const request = await fetch('https://api.mediehuset.net/overlook/all', { headers: fetchHeaders });
//         const response = await request.json();
//         console.log('Nyt array');
//         console.log(response.hotels);
//         setApiDatass(response.hotels);
//     } catch (error) {
//         console.log('getCategory -> Error', error);
//     }
// }

// useEffect(() => {
//     getCategoryHotels()
// }, [])

// // new 
// // const [countryIds, setIds] = useState(null);
// // console.log('countryId')
// // console.log(countryIds)
// console.log('Hotel Id: ')
// console.log(hotelId)

//       return (
//           <div>
//                 <select onChange={(e) => {
//                     setUserRating(e.target.value)
//                 }}>
//                 <option>Vælg Rating</option>
//                 <option value={1}>1</option>
//                 <option value={2}>2</option>
//                 <option value={3}>3</option>
//                 <option value={4}>4</option>
//                 <option value={5}>5</option>
//                 </select>
//                 <input onChange={ (e) => {
//                     setComment(e.target.value)
//                 }} type="text">
                
//                 </input>

// {/* New new new - Select Hotel */}
// <section>
//                 <select onChange={
//                     (e) => {
//                         sethotelId(e.target.value)
//                     }
//                 }>
//                 <option>Vælg Hotel</option>
//                 {
//                     apiDatass && apiDatass.length > 0 && apiDatass.map((item, i) =>
//                             <option key={i} value={item.id}>
//                                 {item.title}
//                             </option>
//                     )
//                 }
//                 </select>
//             </section>

// {/* New new new */}



//           <button onClick={() => postStuff(userIds, hotelId, userRating, comment)}>post stuff</button>
//           <button onClick={getRatings}>get stuff</button>
//           <section>
//                 {ratings
//                     && ratings.map(({ user_id, num_stars, comment, id }) => (
//                         <div key={id}>
//                             <p>User ID: {user_id}</p>
//                             <p>Star Rating: {num_stars}</p>
//                             <p>Comment: {comment}</p>
//                         </div>
//                     ))}
//             </section>
//         </div>
//       );
    
//       }

      
import React, { useState, useEffect } from 'react';
import './PostComment.scss';

export default function PostComment(props) {


    let [runid, setRunid] = useState(null);
    let [firstname, setFirstname] = useState(null);
    let [lastname, setLastname] = useState(null);
    let [address, setAddress] = useState(null);
    let [zipcode, setZipcode] = useState(null);
    let [city, setCity] = useState(null);
    let [email, setEmail] = useState(null);
    let [birthdate, setBirthdate] = useState(null);
    let [gender, setGender] = useState(null);

// Checker om det rigtige input parses
    useEffect(() => {
    console.log(runid)
}, [runid])

const postStuff = (runid, firstname, lastname, address, zipcode, city, email, birthdate, gender = "test") => {

  // Converts the birthdate output to epoch code and parses it into convertedBirthdate
  let convertedBirthdate = parseInt((new Date(birthdate).getTime() / 1000).toFixed(0));

    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("Authorization", "Bearer " + sessionStorage.getItem('token'));
    const urlencodedBody = new URLSearchParams();
    urlencodedBody.append("run_id", runid);
    urlencodedBody.append("firstname", firstname);
    urlencodedBody.append("lastname", lastname);
    urlencodedBody.append("address", address);
    urlencodedBody.append("zipcode", zipcode);
    urlencodedBody.append("city", city);
    urlencodedBody.append("email", email);
    urlencodedBody.append("birthdate", convertedBirthdate);
    urlencodedBody.append("gender", gender);
    // console.log(userIds);
    console.log(runid);
    console.log(firstname);
    console.log(lastname);
    console.log(convertedBirthdate);
    console.log(gender);
    // console.log(parseInt((new Date(birthdate).getTime() / 1000).toFixed(0)))

       // Deklarerer request options
       let requestOptions = {
        method: "POST",
        headers: headers,
        body: urlencodedBody,
        redirect: "follow",
      };

      // Kalder login i API - returnerer array med token hvis true
      fetch("https://api.mediehuset.net/rordal/registrations", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // console.log("login -> result", result);
          return result;
        })
        .catch((err) => {
          console.error(err);
          return err;
        });        

    }
        return (
            <div className="post-center">

              <h2 className="formheader">Tilmeld dig et løb!</h2>
                  
                    <p>Fornavn</p>
                  <input onChange={ (e) => {
                      setFirstname(e.target.value)
                  }} type="text"></input>

                    <p>Efternavn</p>
                  <input onChange={ (e) => {
                      setLastname(e.target.value)
                  }} type="text"></input>

                    <p>Adresse</p>
                  <input onChange={ (e) => {
                      setAddress(e.target.value)
                  }} type="text"></input>

                    <p>Postnummer</p>
                  <input className="zipper" onChange={ (e) => {
                      setZipcode(e.target.value)
                  }} type="number"></input>

                    <p>By</p>
                  <input onChange={ (e) => {
                      setCity(e.target.value)
                  }} type="text"></input>

                    <p>Email</p>
                  <input onChange={ (e) => {
                      setEmail(e.target.value)
                  }} type="text"></input>

                    <p>Fødselsdato</p>
                  <input onChange={ (e) => {
                      setBirthdate(e.target.value)
                  }} type="date"></input>

                    <p>Køn</p>
                  <select onChange={(e) => {
                  setGender(e.target.value)
                  }}>
                    <option>Vælg Køn</option>
                    <option value={'m'}>Mand</option>
                    <option value={'f'}>Kvinde</option>
                  </select>

                  <p>Vælg Løb</p>
                    <select onChange={(e) => {
                  setRunid(e.target.value)
                  }}>
                    <option>Vælg Løb</option>
                    <option value={1}>10 Km</option>
                    <option value={2}>5 Km</option>
                    <option value={3}>One Mile</option>
                  </select>
  
                  {/* Posts the form data to API */}
            <button onClick={() => postStuff(runid, firstname, lastname, address, zipcode, city, email, birthdate, gender)}>Indsend</button>
          </div>
        );
      
}
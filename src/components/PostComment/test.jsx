import React, { useState, useEffect } from 'react';

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



const postStuff = (runid, firstname, lastname, address, zipcode, city, email, birthdate, gender = "test") => {


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
    urlencodedBody.append("birthdate", birthdate);
    urlencodedBody.append("gender", gender);
    // console.log(userIds);
    console.log(runid);
    console.log(firstname);
    console.log(lastname);
}

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
          getRatings();
          return result;
        })
        .catch((err) => {
          console.error(err);
          return err;
        });


        return (
            <div>
                  <input onChange={ (e) => {
                      setRunid(e.target.value)
                  }} type="text"></input>
                  <input onChange={ (e) => {
                      setFirstname(e.target.value)
                  }} type="text"></input>
                  <input onChange={ (e) => {
                      setLastname(e.target.value)
                  }} type="text"></input>
                  <input onChange={ (e) => {
                      setAddress(e.target.value)
                  }} type="text"></input>
                  <input onChange={ (e) => {
                      setZipcode(e.target.value)
                  }} type="text"></input>
                  <input onChange={ (e) => {
                      setCity(e.target.value)
                  }} type="text"></input>
                  <input onChange={ (e) => {
                      setEmail(e.target.value)
                  }} type="text"></input>
                  <input onChange={ (e) => {
                      setBirthdate(e.target.value)
                  }} type="text"></input>
                  <input onChange={ (e) => {
                      setGender(e.target.value)
                  }} type="text"></input>

  
  
            <button onClick={() => postStuff(runid, firstname, lastname, address, zipcode, city, email, birthdate, gender)}>post stuff</button>
          </div>
        );
      
}
import { useState, useEffect } from "react";

function useAuth(login?: string, pword?:string) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const headers = new Headers();
  var base64 = require("base-64");

  login = "";
  pword = "";

  headers.set('Authorization', 'Basic ' + base64.encode(login + ":" + pword));

  useEffect(() => {
    fetch("https://cas.dal.ca/cas/login?TARGET=https://register.dal.ca:443/StudentRegistrationSsb_PROD/login/cas", {
      headers: headers,
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "POST",
      mode: "no-cors",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      });
  });

  return { error };
}

export default useAuth;

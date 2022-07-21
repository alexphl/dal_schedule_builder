import { useState, useEffect } from "react";

function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const uname = "";
  const pword = "";

  const base64 = require("base-64");
  var myheaders = new Headers();
  myheaders.set("Authorization", "Basic " + base64.encode(uname + ":" + pword));
  myheaders.set("Accept", "*/*");
  myheaders.set("Accept-Language", "en-CA,en-US;q=0.7,en;q=0.3");
  myheaders.set("Sec-Fetch-User", "?1");
  myheaders.set("Content-Type", "application/x-www-form-urlencoded");
  myheaders.set("Origin", "");
  myheaders.set("Sec-Fetch-Mode", "cors");
  myheaders.set("Sec-Fetch-Site", "same-origin");
  myheaders.set("Sec-Fetch-Dest", "document");
  myheaders.set("Sec-Fetch-Mode", "navigate");
  myheaders.set("Upgrade-Insecure-Requests", "1");

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: myheaders,
      mode: "cors",
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
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;

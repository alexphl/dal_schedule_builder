const url = "https://ssomanager.dal.ca:443/ssomanager/c/SSB";
var base64 = require("base-64");

function getAuthHeaders(uname: string, pword: string) {
  return {
    Authorization: "Basic " + base64.encode(uname + ":" + pword),
    "Content-Type": "application/x-www-form-urlencoded",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Dest": "document",
    "Upgrade-Insecure-Requests": "1",
  };
}

async function authFetch(uname: string, pword: string) {
  const headers = getAuthHeaders(uname, pword);

  await fetch(url, {
    credentials: "include",
    headers: headers,
    body: JSON.stringify(headers),
    method: "POST",
    mode: "cors",
  })
    .then((response) => response.text())
    .then((text) => console.log(text));
}

async function authXHR(uname: string, pword: string) {
  var XMLHttpRequest = require("xhr2");
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.status == 200) {
      console.log(xhr.getAllResponseHeaders());
    }
  };

  xhr.open("POST", url, false);
  xhr.withCredentials = true;
  xhr.setRequestHeader("Authorization", "Basic " + base64.encode(uname + ":" + pword));
  xhr.send();
}

export default authFetch;

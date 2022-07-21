import { useState, useEffect } from "react";

async function auth(uname?: string, pword?: string) {
  const url = "https://ssomanager.dal.ca:443/ssomanager/c/SSB";
  var base64 = require("base-64");
  var myheaders = new Headers();
  myheaders.set("Authorization", "Basic " + base64.encode(uname + ":" + pword));
  myheaders.set("Accept", "*/*");
  myheaders.set("Content-Type", "application/x-www-form-urlencoded");
  myheaders.set("Sec-Fetch-Dest", "empty");
  myheaders.set("Sec-Fetch-Mode", "cors");
  myheaders.set("Sec-Fetch-Site", "same-origin");
  myheaders.set("Accept-Language", "en-CA,en-US;q=0.7,en;q=0.3");

  await fetch(url, {
    credentials: "include",
    headers: myheaders,
    body: JSON.stringify(myheaders),
    method: "POST",
    mode: "cors",
  })
    .then((response) => response.text())
    .then((text) => console.log(text));

  // OLD XHR METHOD

  // var XMLHttpRequest = require("xhr2");

  // var xhr = new XMLHttpRequest();

  // xhr.onreadystatechange = function () {
  //   if (this.status == 200) {
  //     console.log(xhr.getAllResponseHeaders());
  //   }
  // };

  // xhr.open("POST", url, false);
  // xhr.withCredentials = true;
  // xhr.setRequestHeader(
  //   "Authorization",
  //   "Basic " + btoa(uname + ":" + pword)
  // );
  // xhr.send();


  // FORM SUBMIT METHOD

  // let form = new FormData();

  // form.append("username", uname);
  // form.append("password", pword);
  // form.append("lt", "LT-176401-fjbbE2QvdvTKCMCkUt96NsV0BGPZKf-kil-cas-3.its.dal.ca");
  // form.append("execution", "264115c9-ad7c-4784-9fda-23a335fe7787_AAAAIgAAABDTlswbeKORWwtyNLTeItYmAAAABmFlczEyOCu4ddbaNaNrCQa3dXixKg1nZq2G/NFtJm4mE2q7pk4MUZSug6xOLIbdcpwxDudWTyocM+Lw35g2mbrc0Gsq/X730Omax8vscjtc16KZo5T8bcbjrQ/ASY/u5u6DnNvBSuEsHyTjaEjd4oTfBBkF89W2p5Dq8l1nwS9WluVv8OfZh0ucD+A8q7VMPWdfkAuVHrxHE4uaRIO5cIg17HcmyPymL2JySq44eCUmlL8bOgXQyhqczXBLdZ/wZD2m5I0oaKfUDS64w4Oy/sogdHcvPtmZRNVPWLx+JEUwzYX+w5RCOjQwHQtPV4ZzKosz6VtrWdQZHPOAou26u+o5ojLSWDxKzEhwzcYOkpFSZZ3am/OR88t2WT9b1Ib+yAdTS+M3PN9VrKndoOvXEex/x4JeWsKy5hRcLDm9xBBiuGKsxzJiAK06ibbFYgXsTUnJFrtDCrMPfIF7GEvBWLWdWj74g92qJL0OOI+QSubFS7p0mv2Isho2Jwt7KaWDNRU8CuaX5lyzR6I92qQoX4eNEOOsdbqGaZfIm17LfJBTLpYpYcE0Zt/b97QTraBrxKAJ7C4njZpb1i0VejdzM6VZ4OgV2R01ICKX14BVAXIYpyU23S4TdATTqn/iaf8GN4OLDA+yxKo0SfBz/VVbZxK0GzGSiXrp8u81C/xLnFqXGQHL/aZUQ4U4lEoyURbzjVVOXk5a+T2l7grRUCt7CtpANoCr2dWVv7NZSnN5zmYqGaPBpTAmdFZyaJcE6Z6SFR2DpzZYVIygYFxqUw2XFXJ3/rf8Fi3Z/wlZCHCWgI7TNNhWpJV8pFealvbKvGs/JmacGX8K5VbY+E1JL3RUjwW7ZODjTTDWNJfkJaG595/JVMTj02BQhfn0h2OwW3LNfDXRk4bIJzdKDC5aJRH6Jalissk6ab6SgRCVTGk8ou7DqI8SN17QvVQXMV4YUjtz6zFw/pEqQf6is47LqbeYFyZlK+iAijBF885j0iMmpCKPcTH3jtrxj5LmGSIVeJLrXn6FWcUgZh0c0ernjEAs5JL38PTUXvbio3+Ov5taCIoNhHvyH2x2q9uVMliLVTQvjGt7AIyxUyq9//BPt3Hr+QjZr6tgSYiwXIt/0YBulB5KAVx1sDCd62OdVIyAEUS+ELq8GbLdnm/wcHFSnuCymwKPIXnHeMFPjoOilPolJc5UsilCTNFH5s3CepxMV3i2oMBR0ZEmYDgVQwkEPylabgZuMlwppGvuHAORprDW3hgCFl4cURxmcuCenwtVB6Avp8EVcXm6flD6764kKLPSHR7uxdk1j8njsK/IQPPrxrFG/KGpBlUF7PZ1OhvUupYpe3AmGiIhJElJZ2NoVJqM7WRFQbCEvTzwfTSrYttN6yzCcHwN/QhxO/Y8ArWPDK29UdHF6gvpXIklw/emaJvepuuA3tZPYgC5C7H7yLbARFfnZyxy9m/VW6uxWk/LlKZupJUfYn05ymNj+hkdDSZjs96a1/d79LmbtZKTa4vRmFrbasu6I/W9DPgB6f27C2feO4BHhNUMFnJur9FnhhVpf2SbCahYK2LZ3e0GWNUYYIj00qRinAjoLH7awpuT/wvjW+xADoJHKaV7okzBZtrhw2e9vgAnB5hydEUDklRyP0HbWppX6Cj57ZiouymMuD7gV0vbqj5hvI/w5xftTjgmVX8Su7ehoDWcM2+QzUVm2Gy1jXh3l++JMD1s5u9gju5iytlNdFouCr+EJY5+9ab5rKGMIfXOESmHSkCL6GZTOsNF/5OH9z6yAJg/guvfFkJzAtcQ/dA0qTISKXlGpbNNUckyx5ftCTLyZD77kD/oylhLwf6yVOYw04lnSY7yyIFIvmOJezx3jqBmIdbig6Oh1sCbxBB/uRVREi4ANMqaC9DOonGH8PRo98wu9kujXmk8Z1EbXX5cUsHgBxkdvrHFteyKtN+cd4c4DK130TKsOnllkUmnFE3IdiOKJQOEPBEsmICvBa5u9MhXseGLXnR78nR4Wiu29FKtah27PfSaQQapV3x3Uwd6ZlIbx4rnDiHUUIhpQkqOFRFxkopQTRQf4o9PZLZSfjmoBkOxtHaR0aYsbV5h+DY1e3Nk5nq+R0wQdU6hb2p/lMBddrXWAF9+sPpDC+SZE8eXpXXx227xLb/wS7aS/UIAy8EQHzPgLUVjzrQICLeKDVhTIT1bnyk3viKA7KrBQg+dgUSHjRuxZC9h8nPe2qn3sj/jhxZHM/58ZIkMB8PU2zVaRRTXwhQVLDhKz5bCD2BN2ir2zCsOfJOQNU2TWUd1zihYk7bO7HuQDUKF0y1eMJjCx82WYS2esiGj22glUasWB7KinUOLBiuPUMBRunNrW+SSfHX+wIKVauqTNyYY/EdgykhNZpyZMLCVXJuLuJb95IoJMkFnDB22+JRRykwa2sUNHjinE2nlcJg2iZg4FMpaMKSJXaFD4iUVjMn4kI4=");
  // form.append("_eventId", "submit");  
  // form.append("submit", "LOGIN");

  // fetch(LoginURL, { method: "post", body: form, credentials: "include" }).then((loginResponse) => {
  //   console.log(loginResponse);
  // });
}

export default auth;

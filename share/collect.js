/**
 * 
 * 
 */
let collected = {};

 window.addEventListener("load",()=>{
    collected={
        timeOpened: new Date(),
        timezone: new Date().getTimezoneOffset()/60,
        pageon: window.location.pathname,
        referrer: document.referrer,
        previousSites: history.length,
        browserName: navigator.appName,
        browserEngine: navigator.product,
        browserVersion1a: navigator.appVersion,
        browserVersion1b: navigator.userAgent,
        browserLanguage: navigator.language,
        browserOnline: navigator.onLine,
        browserPlatform: navigator.platform,
        javaEnabled: navigator.javaEnabled(),
        dataCookiesEnabled: navigator.cookieEnabled,
        dataCookies1: document.cookie,
        dataCookies2: decodeURIComponent(document.cookie.split(";")),
        dataStorage: localStorage,
        sizeScreenW: screen.width,
        sizeScreenH: screen.height,
        sizeDocW: document.width,
        sizeDocH: document.height,
        sizeInW: innerWidth,
        sizeInH: innerHeight,
        sizeAvailW: screen.availWidth,
        sizeAvailH: screen.availHeight,
        scrColorDepth: screen.colorDepth,
        scrPixelDepth: screen.pixelDepth,
        // latitude: position.coords.latitude,
        // longitude: position.coords.longitude,
        // accuracy: position.coords.accuracy,
        // altitude: position.coords.altitude,
        // altitudeAccuracy: position.coords.altitudeAccuracy,
        // heading: position.coords.heading,
        // speed: position.coords.speed,
        // timestamp: position.timestamp,
        };

        fetch("http://localhost:8080/collect", {
            method:"post",
            body:JSON.stringify(collected),
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data);
        })
        .catch(console.error);
 })
function locate()
        {
            const getLocation = ()=>{
                navigator.geolocation.getCurrentPosition((location)=>{
                   displaylatitude.innerHTML = location.coords.latitude; console.log(location.coords.longitude);
                   displaylongitude.innerHTML = location.coords.longitude;
                })
            }
             let d = new Date().toLocaleString();
             displayDate.innerHTML = d;
        }

        setInterval(locate, 2000)
const askAds = (type, ads, idAd) => {
    m.request({
        method: "GET",
        url: `/publicidad?medida=${type}`
    })
    .then((data) => {
        ads[idAd] = data.enlace
    })
    .catch(err => console.log(err))
}

export default askAds
const askAds = (type, ads, idAd) => {
    m.request({
        method: "GET",
        url: `/publicidad?medida=${type}`
    })
    .then((data) => {
        ads[idAd] = {
            img: data.img,
            link: data.link
        }
    })
    .catch(err => console.log(err))
}

export default askAds
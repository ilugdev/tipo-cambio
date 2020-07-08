import Header from '../global/header.js'
import Ads from '../global/ads.js'
import ExchangeOnline from './exchangeonline.js'
import ElTipoDolarMsg from './eltipodolarmsg.js'
import ExchangePresencial from './exchangepresencial.js'
import ExchangeInterbancario from './exchangeinterbancario.js'
import BannerInformativo from '../global/bannerinformativo.js'
import BoxEquivalencia from './equivalencias.js'
import PreguntasFrecuentes from './preguntasfrecuentes.js'
import Footer from '../global/footer.js'

import askAds from '../global/askAds.js'

var state = {
	dolar: {
		compra: '3.339',
		venta: '3.336'
	},
	ads: [

	]
}

const Home = {
	oncreate: function() {
		m.request({
			method: "GET",
			url: "/sunat"
		})
		.then(({ buyRate, sellRate }) => {
			state.dolar.compra = buyRate
			state.dolar.venta = sellRate
		})
		.catch(err => console.log(err))

		askAds('horizontal', state.ads, 0)
		askAds('horizontal', state.ads, 1)
	},
	view: function() {
		return [
			m(Header, { page: 'home', title: 'Calcula el precio del dólar', subtitle: 'Tipo de Cambio del dólar hoy en Perú', dolar: state.dolar }),
			m(Ads, { type: 'horizontal', margin: '10%', src: state.ads[0] }),
			m(ExchangeOnline),
			m(ElTipoDolarMsg),
			m(ExchangePresencial),
			m(ExchangeInterbancario),
			m(BannerInformativo, { bannerType: 'home' }),
			m(BoxEquivalencia, { dolar: state.dolar }),
			m(PreguntasFrecuentes),
			m(Ads, { type: 'horizontal', margin: '5%', src: state.ads[1] }),
			m(BannerInformativo, { bannerType: 'rest' }),
			m(Footer)
		]
	}
}

export default Home
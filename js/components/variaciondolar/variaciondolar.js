import Header from '../global/header.js'
import Ads from '../global/ads.js'
import PriceCalender from './pricecalender.js'
import BannerInformativo from '../global/bannerinformativo.js'
import Footer from '../global/footer.js'

import askAds from '../global/askAds.js'

var state = {
	ads: [
		{
			img: 'placeholder',
			link: 'placeholder'
		}
	]
}

const VariacionDolar = {
	oninit: function() {
		askAds('horizontal', state.ads, 0)
	},
	view: function() {
		return [
			m(Header, { page: 'variaciondolar', title: 'Variación del dólar', subtitle: 'Sigue el tipo de cambio en línea y encuentra el mejor momento para comprar o vender dólares en Perú.' }),
			m(Ads, { type: 'horizontal', margin: '10%', src: state.ads[0] }),
			m(PriceCalender),
			m(BannerInformativo, { bannerType: 'rest' }),
			m(Footer)
		]
	}
}

export default VariacionDolar
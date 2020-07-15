import Ads from '../global/ads.js'
import ExchangeTitle from './exchangetitle.js'
import CompraVentaBox from './compraventabox.js'

import askAds from '../global/askAds.js'

var state = {
	ads: [
		{
			img: 'placeholder',
			link: 'placeholder'
		}
	]
}

const ExchangePresencial = {
	oninit: function() {
		askAds('cuadrada', state.ads, 0)
	},
	view: function() {
		return m('#exchange-presencial', [
			m('img#presencial-coins[src=./img/imagenes_fondo/coins.png]'),
			m(Ads, { type: 'square', src: state.ads[0] }),
			m('#exchange-presencial-info', [
				m(ExchangeTitle, { title: 'Presencial' }),
				m('#exchange-presencial-boxes', [
					m(CompraVentaBox, { src: './img/presencial/sunat.png', compra: '3.319', venta: '3.321', boxType: 'presencial' }),
					m(CompraVentaBox, { src: './img/presencial/paralelo.png', compra: '3.325', venta: '3.350', boxType: 'presencial' })
				])
			])
		])
	}
}

export default ExchangePresencial
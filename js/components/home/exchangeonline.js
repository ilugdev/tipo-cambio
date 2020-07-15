import Ads from '../global/ads.js'
import ExchangeTitle from './exchangetitle.js'
import CompraVentaBox from './compraventabox.js'
import Slider from './slider.js'
import ExchangeLista from './exchangelista.js'

import askAds from '../global/askAds.js'

var state = {
	slide: 0,
	itemsToShow: 9,
	amountNavs: 1,
	items: [
	],
	itemsMobile: [
	],
	ads: [
		{
			img: 'placeholder',
			link: 'placeholder'
		},
		{
			img: 'placeholder',
			link: 'placeholder'
		}
	]
}

//change slide handle
const changeSlide = value => state.slide = value

const ExchangeOnlineSlider = {
	oninit: function() {
		//change items in mobile
		if(document.body.clientWidth <= 768) state.itemsToShow = 2

		//calculate navs
		state.amountNavs = state.items.length / state.itemsToShow

		askAds('vertical', state.ads, 0)
		askAds('vertical', state.ads, 1)
	},
	view: function() {
		return m('#exchange-online-slider', [
			m(ExchangeTitle, { title: 'Online' }),
			m(Slider, {
				id: 'slider-online-con',
				itemsToShow: state.itemsToShow,
				slide: state.slide,
				items: state.items
			})
		])
	}
}

const ExchangeListaLabel = {
	view: function() {
		return m('.exchange-lista-label', [
			m('h1', 'Compra'),
			m('h1', 'Venta')
		])
	}
}

const ExchangeOnlineLista = {
	oninit: function() {
		askAds('vertical', state.ads, 0)
		askAds('vertical', state.ads, 1)
	},
	view: function() {
		return m('#exchange-online-slider', [
			m(ExchangeTitle, { title: 'Online' }),
			m(ExchangeListaLabel),
			state.itemsMobile.map(exch => (
				m(ExchangeLista, { src: exch.src, color: 'white', compra: exch.compra, venta: exch.venta, link: exch.link })
			))
		])
	}
}

const ExchangeOnline = {
		oncreate: function() {
		m.request({
			method: "GET",
			url: "/exchange-houses"
		})
		.then(res => {
			for(let obj of Object.entries(res)) {
				state.items.push(m(CompraVentaBox, { src: obj[1].img, compra: obj[1].buyRate, venta: obj[1].sellRate, link: obj[1].link }))
				state.itemsMobile.push({ src: obj[1].img, compra: obj[1].buyRate, venta: obj[1].sellRate, link: obj[1].link})
			}
		})
		.catch(err => console.log(err))

	},
	view: function() {
		let renderExchange
		document.body.clientWidth >= 768 ? renderExchange = m(ExchangeOnlineSlider) : renderExchange = m(ExchangeOnlineLista)

		return m('#exchange-online', [
			m(Ads, { type: 'vertical', src: state.ads[0] }),
			renderExchange,
			m(Ads, { type: 'vertical', src: state.ads[1] })
		])
	}
}

export default ExchangeOnline
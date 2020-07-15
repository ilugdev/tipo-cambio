import Header from '../global/header.js'
import Ads from '../global/ads.js'
import PostSection from './postsection.js'
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

const Noticias = {	
	oninit: function() {
		askAds('horizontal', state.ads, 0)
	},
	view: function() {
		return [
			m(Header, { page: 'noticias', title: 'Entérate de lo último', subtitle: 'Mantente informado con las últimas novedades y sigue de cerca cuando es el mejor momento para cambiar tus dólares.' }),
			m(Ads, { type: 'horizontal', margin: '12.5%', src: state.ads[0] }),
			m(PostSection),
			m(BannerInformativo),
			m(Footer),
			m('#fb-root')
		]
	}
}

export default Noticias
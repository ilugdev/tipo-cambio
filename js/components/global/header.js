import NavCon from './navcon.js'
import BackgroundImg from './backgroundimg.js'
import TextHeader from './textheader.js'
import RoundBox from './roundbox.js'

const Header = {
	view: function(vnode) {
		let page = vnode.attrs.page
		
		let title = vnode.attrs.title
		let subtitle = vnode.attrs.subtitle
		let dolar = vnode.attrs.dolar
		
		let changeStateNoticia = vnode.attrs.changeStateNoticia
		
		return m('header', [
			m(NavCon),
			m(TextHeader, { page: page, title: title, subtitle: subtitle, dolar: dolar }),
			m(BackgroundImg, { id: 'dolar_left', src: './img/imagenes_fondo/dolar_left.png' }),
			m(BackgroundImg, { id: 'dolar_right', src: './img/imagenes_fondo/dolar_right.png' }),
			m(RoundBox, { page: page, dolar: dolar, changeStateNoticia: changeStateNoticia })
		])
	}
}

export default Header
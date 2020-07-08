const Logo = {
	view: function() {
		return m('img#logo[src="./img/logo/logo.png"]')
	}
}

const SocialNetwork = {
	view: function(vnode) {
		let id = vnode.attrs.id

		return m(`${id}`, [
			m(NavItems, { link: 'https://www.facebook.com/ElTipodeCambioPE' , icon: './img/iconos/facebook.png', target: 'blank' }),
			m(NavItems, { link: 'https://instagram.com/eltipodecambio?igshid=1vli4y2f3oj45' , icon: './img/iconos/instagram.png', target: 'blank' })
		])
	}
}

const NavItems = {
	view: function(vnode) {
		let link = vnode.attrs.link
		let text = vnode.attrs.text
		let target = vnode.attrs.target

		return m(`a[href=${link}]`, { target: target === 'blank' ? '_BLANK' : '' } ,text ? m('p', text) : m('img', { src: vnode.attrs.icon }))
	}
}

const Nav = {
	view: function() {
		return m('#nav-items', [
			m(NavItems, { link: '#!/Home', text: 'Home' }),
			m(NavItems, { link: '#!/Variacion-Dolar', text: 'Variación del dólar' }),
			m(NavItems, { link: '#!/Noticias', text: 'Noticias' }),
			m(SocialNetwork, { id: '#social-network-pc' })
		])
	}
}

const NavCon = {
	view: function() {
		return m('nav', [
			m(Logo),
			m(Nav),
			m(SocialNetwork, { id: '#social-network-mobile' })
		])
	}
}

export default NavCon
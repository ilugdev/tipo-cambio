const ExchangeTitle = {
	view: function(vnode) {
		let title = vnode.attrs.title
		return m('#exchange-title', [
			m('img[src=./img/iconos/check.png]'),
			m('h1', title)
		])
	}
}

export default ExchangeTitle
const ExchangeTitle = {
	view: function(vnode) {
		
		let title = vnode.attrs.title
		let fontSize = vnode.attrs.fontSize

		return m('#exchange-title', [
			m('img[src=./img/iconos/check.png]'),
			m('h1', { style: fontSize }, title)
		])
	}
}

export default ExchangeTitle
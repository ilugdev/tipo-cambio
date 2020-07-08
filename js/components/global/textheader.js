const TextBuySell = {
	view: function(vnode) {
		let title = vnode.attrs.title + ': '
		let amount = vnode.attrs.amount
		
		return m('h3', title, m('span', amount))
	}
}

const TextBuySellCon = {
	view: function(vnode) {
		let dolar = vnode.attrs.dolar
		
		return m('#text-buy-sell', [
			m(TextBuySell, { title: 'Compra', amount: dolar.compra }),
			m(TextBuySell, { title: 'Venta', amount: dolar.venta })
		])
	}
}

const TextHeader = {
	view: function(vnode) {
		let page = vnode.attrs.page
		
		let title = vnode.attrs.title
		let subtitle = vnode.attrs.subtitle
		
		let dolar = vnode.attrs.dolar
		
		return m('#text-header', [
			m('h1#text-header-title', title),
			m('h3#text-header-subtitle', subtitle),
			page === 'home' ? m(TextBuySellCon, { dolar: dolar }) : null
		])
	}
}

export default TextHeader
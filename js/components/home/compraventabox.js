const CompraVentaBox = {
	onbeforeremove: function(vnode) {
        vnode.dom.classList.remove("compra-venta-box")
    },
	view: function(vnode) {
		let src = vnode.attrs.src
		let compra = vnode.attrs.compra
		let venta = vnode.attrs.venta
		let link = vnode.attrs.link
		let boxType = vnode.attrs.boxType

		let classbox = ''

		if (boxType === 'presencial') {
			classbox = 'presencial-size'
		} else if (boxType === 'interbancario') {
			classbox = 'interbancario-size'
		} else {
			classbox = 'online-size'
		}

		return m('#compra-venta-box', { class: classbox },[
			m('img', { src: src }),
			m('#compra-venta-con', [
				m('.compra-venta-text-con', [
					m('h2', 'Compra'),
					m('h1', compra)
				]),
				m('.compra-venta-text-con', [
					m('h2', 'Venta'),
					m('h1', venta)
				])
			]),
			!boxType ? m('a', { href: link, target: '_BLANK' }, 'CAMBIAR') : null
		])
	}
}

export default CompraVentaBox
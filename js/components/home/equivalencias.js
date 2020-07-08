const amounts = () => {
	let op = 5
    let opSwitch = true
    let amount = ['1']

    while(amount[amount.length - 1] < 5000) {
		amount.push( (amount[amount.length - 1] * op).toString() )
        if(opSwitch) {
            op = 2;
            opSwitch = false
        } else {
            op = 5
            opSwitch = true
        }
    }

    return amount
}

const BoxInfoLeft = {
	view: function() {
		let infoLeftTags = []

		amounts().map(amount => {
			infoLeftTags.push(m('h2', amount))
		})

		return infoLeftTags
	}
}

const BoxInfoRight = {
	view: function(vnode) {
		let price = vnode.attrs.price

		let infoRightTags = []

		amounts().map(amount => {
			infoRightTags.push(m('h2', (amount * price).toFixed(3)))
		})

		return infoRightTags
	}
}

const BoxEquivalencia = {
	view: function(vnode) {
		let titleBox = vnode.attrs.titleBox
		let price = vnode.attrs.price
		let tfooter1 = vnode.attrs.tfooter1
		let tfooter2 = vnode.attrs.tfooter2

		return m('.box-equivalencia', [
			m('.box-equivalencia-title', m('h1', titleBox)),
			m('.box-equivalencia-info', [
				m('.box-equivalencia-info-left', [
					m(BoxInfoLeft)
				]),
				m('.box-equivalencia-info-right', [
					m(BoxInfoRight, { price: price })
				])
			]),
			m('.box-equivalencia-footer', [
				m('.box-equivalencia-footer-left', m('h1', tfooter1)),
				m('.box-equivalencia-footer-right', m('h1', tfooter2)),
			])
		])
	}
}

const Equivalencias = {
	view: function(vnode) {
		let dolarToSol = vnode.attrs.dolar.venta
		let solToUsd = 1 / vnode.attrs.dolar.compra
		
		return m('#equivalencias', [
			m('h1#equivalencias-title', 'Equivalencias'),
			m('#equivalencias-boxes-con', [
				m(BoxEquivalencia, {
					titleBox: 'USD a PEN',
					price: dolarToSol,
					tfooter1: '$ Dólar',
					tfooter2: 'S/ Nuevo Sol'
				}),
				m(BoxEquivalencia, {
					titleBox: 'PEN a USD',
					price: solToUsd,
					tfooter1: 'S/ Nuevo Sol',
					tfooter2: '$ Dólar'
				})
			])
		])
	}
}

export default Equivalencias
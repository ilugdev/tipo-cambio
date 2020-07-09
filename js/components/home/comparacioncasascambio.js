import ExchangeTitle from './exchangetitle.js'

const state = {
    items: []
}

const ComparativeBox = {
  view: function(vnode) {
    let src = vnode.attrs.src
    let compra = vnode.attrs.compra
    let venta = vnode.attrs.venta
    let amountFrom = vnode.attrs.amountFrom

    let comparativeData = 0

    let convertion = vnode.attrs.convertion
    if(convertion = 'solTOusd') {
      comparativeData = amountFrom * compra
    } else if(convertion =  'usdTOsol') {
      comparativeData = amountFrom * venta
    }

    return m('.comparative-box', [
      m('img', { src: src, alt: 'exchange-logo' }),
      m('h1', comparativeData.toFixed(2))
    ])
  }
}

const ComparacionCasasCambio = {
  oninit: function() {
		m.request({
			method: "GET",
			url: "/exchange-houses"
		})
		.then(res => {
			for(let obj of Object.entries(res)) {
				state.items.push({ src: obj[1].img, compra: obj[1].buyRate, venta: obj[1].sellRate })
			}
		})
		.catch(err => console.log(err))
	},
  view: function(vnode) {

    let convertion = vnode.attrs.convertion
    let amountFrom = vnode.attrs.amountFrom

    return m('#comparacion-casas-cambio', [
      m(ExchangeTitle, { title: 'Comparación con otras casas de cambio', fontSize: 'font-size: 1.3em;' }),
      m('#comparative-grid', [
        state.items.map(comp => (
          m(ComparativeBox, { src: comp.src, compra: comp.compra, venta: comp.venta, convertion: convertion, amountFrom: amountFrom })
        ))
      ])
    ])
  }
}

export default ComparacionCasasCambio
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
    
    if(convertion === 'usdTOsol') {
      comparativeData = (amountFrom * venta).toFixed(3)
    } else {
      comparativeData = (amountFrom / compra).toFixed(3)
    }

    return m('.comparative-box', [
      m('img', { src: src, alt: 'exchange-logo' }),
      m('h1', comparativeData)
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
      //reset
      state.items = []
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
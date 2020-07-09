import ComparacionCasasCambio from './comparacioncasascambio.js'

const state = {
	dolar: {},
	amountFrom: 1,
	amountTo: 0,
	convertion: 'usdTOsol',
	styleConversion: '',
	showComparative: false,
	handleComparativeSize: null
}

function ExchangerCal() {
	let amountFromLength = state.amountFrom.toString().length
	let width = document.body.offsetWidth;
	
	if(width < 800) {
		if(amountFromLength < 5) {
			state.styleConversion = 'font-size: 15vw;'
		} else if(amountFromLength > 5) {
			state.styleConversion = 'font-size: 10vw;'
		}
	}
	
	if(state.convertion === 'usdTOsol') {
		state.amountTo = (state.amountFrom * state.dolar.venta).toFixed(3)
	} else {
		state.amountTo = (state.amountFrom / state.dolar.compra).toFixed(3)
	}
}

function ChangeExchange() {
	if(state.convertion === 'usdTOsol') {
		state.convertion = 'solTOusd'
	} else {
		state.convertion =  'usdTOsol'
	}
}

const Exchanger = {
	view: function() {
		let currencyStyleChanger = state.convertion != 'usdTOsol' ? 'flex-direction: row-reverse' : null
		
		return m('#exchanger-con', [
			m('#currency', { style: currencyStyleChanger }, [
				m('.currency-data', [
					m('img', { src: './img/banderas/usa.png' }),
					m('#currency-text', [
						m('h1', 'USD'),
						m('h3', 'US Dollar')
					])
				]),
				m('#change-currency', {
					onclick: () => ChangeExchange()
					},
					m('img[src=./img/iconos/transferencia_icon.png]')
				),
				m('.currency-data', [
					m('img', { src: './img/banderas/peru.png' }),
					m('#currency-text', [
						m('h1', 'SOL'),
						m('h3', 'Peru Sol')
					])
				])
			]),
			m('input#amount[placeholder=INGRESE MONTO]', {
				value: state.amount,
				oninput: function(event) {
					state.amountFrom = event.target.value;
				}
			})
		])
	}
}

const ExchangeRate = {
	view: function() {
		let usdToSol = state.dolar.venta
		let solToUsd = (1 / state.dolar.compra).toFixed(3)
		
		ExchangerCal()
		
		let currency;
		if(state.convertion === 'usdTOsol') {
			currency = {
				from: 'USD',
				to: 'SOL'
			}
		} else {
			currency =  {
				from: 'SOL',
				to: 'USD'
			}
		}
		
		return m('#exchange-rate', [
			m('h3', `${state.amountFrom} ${currency.from} =`),
			m('h1', { style: state.styleConversion }, state.amountTo, m('span', currency.to)),
			m('h3', `1 USD = ${usdToSol} SOL`),
			m('h3', `1 SOL = ${solToUsd} USD`),
			m('button#switch-comparacion',
			{ onclick: () => {
				state.handleComparativeSize(!state.showComparative)
				state.showComparative = !state.showComparative
			}},
			state.showComparative ? 'Ocultar comparación' : 'Mostrar comparación'
			)
		])
	}
}

const ExchangeCal = {
	view: function(vnode) {
		state.dolar = vnode.attrs.dolar
		state.handleComparativeSize = vnode.attrs.handleComparativeSize
		
		return [
			m('#exchange-cal-con', [
				m(Exchanger),
				m(ExchangeRate),
			]),
			state.showComparative ? m(ComparacionCasasCambio, { convertion: state.convertion, amountFrom: state.amountFrom }) : null
		]
	}
}

export default ExchangeCal
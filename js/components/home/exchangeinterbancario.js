import ExchangeTitle from './exchangetitle.js'
import CompraVentaBox from './compraventabox.js'

const ExchangeInterbancario = {
	view: function() {
		return m('#exchange-interbancario', [
			m(ExchangeTitle, { title: 'Interbancario' }),
			m('#interbancario-info', [
				m(CompraVentaBox, { src: './img/bancos/bcp.png', compra: '3.260', venta: '3.400', boxType: 'interbancario' }),
				m(CompraVentaBox, { src: './img/bancos/interbank.png', compra: '3.210', venta: '3.440', boxType: 'interbancario' }),
				m(CompraVentaBox, { src: './img/bancos/bbva.png', compra: '3.313', venta: '3.362', boxType: 'interbancario' }),
				m(CompraVentaBox, { src: './img/bancos/scotiabank.png', compra: '3.244', venta: '3.436', boxType: 'interbancario' }),
				m(CompraVentaBox, { src: './img/bancos/banco_de_la_nacion.png', compra: '3.280', venta: '3.350', boxType: 'interbancario' })
			])
		])
	}
}

export default ExchangeInterbancario
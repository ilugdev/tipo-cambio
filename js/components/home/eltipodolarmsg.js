import NoticiaDestacada from '../home/noticiadestacada.js'

const state = {
	destacados: []
}

function modifyDestacados(destacados) {
	if(destacados === 'clear') {
		state.destacados = []
	} else {
		state.destacados.push(destacados)
	}
}

const ElTipoDolarMsg = {
	view: function() {
		return m('#tipomsganddestacados', [
			m('#tipo-dolar-msg', [
				m('img[src=./img/el_tipo_dolar/bot.png]'),
				m('#msg-con', [
					m('#msg-beginning'),
					m('#msg-box', 
						m('p', 'Sigue el tipo de cambio en línea y encuentra el mejor momento para comprar o vender dólares en Perú.')
					)
				])
			]),
			m('#rightsectioncon',
				m(NoticiaDestacada)
			)
		])
	}
}

export default ElTipoDolarMsg
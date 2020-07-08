import SlideNavs from './slidenavs.js'
import Slider from './slider.js'

var state = {
	slide: 0,
	itemsToShow: 1,
	amountNavs: 1,
	items: [
		m('.preguntas-frecuentes-preg-res', [
			m('h2#preguntas-frecuentes-preg', '¿Qué tipo de cambio puedo conseguir?'),
			m('h3#preguntas-frecuentes-res1', 'El dólar interbancario es el dólar que consigues en las agencias bancarias.'),
			m('h3#preguntas-frecuentes-res2', 'Su precio es generalmente mayor al del dólar paralelo. Se conoce como dólar paralelo al dólar que consigues en las casas de cambio o con cambistas. En el Perú, existen casas de cambio físicas y online.')
		]),
		m('.preguntas-frecuentes-preg-res', [
			m('h2#preguntas-frecuentes-preg', '¿Son seguras las casas de cambio online?'),
			m('h3#preguntas-frecuentes-res1', 'Sí. Las casas de cambio online suelen estar registradas en la Superintendencia de Banca, Seguros y AFP (SBS). Además, las transacciones y depósitos se realizan a través de entidades autorizadas por la SBS.'),
		]),
		m('.preguntas-frecuentes-preg-res', [
			m('h2#preguntas-frecuentes-preg', '¿Qué casas de cambio online existen?'),
			m('h3#preguntas-frecuentes-res1', 'Existen muchas casas de cambio online y esto ha permitido que haya mejores ofertas en el tipo de cambio. Puedes conocer el tipo de cambio diario visitando eltipodecambio.com.'),
		]),
		m('.preguntas-frecuentes-preg-res', [
			m('h2#preguntas-frecuentes-preg', '¿Dónde puedo cambiar una cantidad considerable de dólares?'),
			m('h3#preguntas-frecuentes-res1', 'Puedes hacerlo en una agencia bancaria y preguntar por el cambio preferente. Otra opción es cambiar tus dólares en casas de cambio online donde podrías conseguir un mejor tipo de cambio. Además, evitas desplazarte con dinero y exponerte a diversos riesgos, puedes hacerlo desde tu casa u oficina y te priorizas tu seguridad.'),
		])
	]
}

//change slide handle
const changeSlide = value => {
	if(value <= state.items.length - 1 && value >= 0) {
		clearInterval(autoChange)
		state.slide = value
	}
}

const autoChange = setInterval(() => {
	if(state.slide >= state.items.length - 1) {
		state.slide = 0
	} else {
		state.slide = state.slide + 1
	}
	m.redraw()
}, 3000)

const flechas = {
	view: function(vnode) {
		return m('.flecha',
		{
			class: vnode.attrs.dir === '>' ? 'flecha-dir-derecha' : null,
			style: vnode.attrs.style,
			onclick: () => {
				if(vnode.attrs.dir === '>') {
					vnode.attrs.changeSlide(state.slide+1)
				} else {
					vnode.attrs.changeSlide(state.slide-1)
				}
			}
		},
		m('p', '<'))
	}
}

const PreguntasFrecuentes = {
	oninit: function(vnode) {
		//calculate navs
		state.amountNavs = state.items.length / state.itemsToShow
	},
	view: function() {
		return m('#preguntas-frecuentes', [
			m('img#coins-bg[src=./img/imagenes_fondo/coins2.png]'),
			m('#preguntas-frecuentes-text', [
				m('h1#preguntas-frecuentes-title', 'Preguntas Frecuentes'),
				m(Slider, {
					id: '',
					itemsToShow: state.itemsToShow,
					slide: state.slide,
					items: state.items
				})
			]),
			m('#preguntas-frecuentes-slide-con',
				m(SlideNavs, {
					bgColor: 'white',
					changeSlide: changeSlide,
					amountNavs: state.amountNavs,
					slide: state.slide
				})
			),
			m(flechas, { style: {left: '1%'}, changeSlide: changeSlide }),
			m(flechas, { dir: '>', style: {right: '1%'}, changeSlide: changeSlide })
		])
	}
}


export default PreguntasFrecuentes
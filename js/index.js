//body
const DOM = document.body

//components
import Home from './components/home/home.js'
import VariacionDolar from './components/variaciondolar/variaciondolar.js'
import Noticias from './components/noticias/noticias.js'

m.route(DOM, '/Home', {
	'/Home': Home,
	'/Variacion-Dolar': VariacionDolar,
	'/Noticias': Noticias
})
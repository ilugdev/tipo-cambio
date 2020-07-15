//body
const APP = document.getElementById('app')

//pages
import Home from './components/home/home.js'
import VariacionDolar from './components/variaciondolar/variaciondolar.js'
import Noticias from './components/noticias/noticias.js'

m.route(APP, '/Home', {
	'/Home': Home,
	'/Variacion-Dolar': VariacionDolar,
	'/Noticias': Noticias
})
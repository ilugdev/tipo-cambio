import PostNoticias from './postnoticias.js'
import ViewNoticia from './viewnoticia.js'
import RightSection from '../global/rightsection.js'
import Ads from '../global/ads.js'

import askAds from '../global/askAds.js'

var state = {
	view: false,
	noticias: [],
	noticiasPostArr: [],
	paginadoresArr: [],
	tituloNoticia: '',
	articuloNoticia: '',
	miniaturaNoticia: '',
	pagina: '1',
	cantNoticias: 0,
	ads: [
		{
			img: 'placeholder',
			link: 'placeholder'
		}
	],
	destacados: []
}

function modifyDestacados(destacados) {
	if(destacados === 'clear') {
		state.destacados = []
	} else {
		state.destacados.push(destacados)
	}
}

function closeNoticia() {
	state.view = false
}

function LoadNoticia(id) {
	state.view = true;
	m.request({
		method: "GET",
		url: `/vernoticia/?id=${id}`
	})
	.then(data => {
		for(let obj of Object.entries(data)) {
			let { titulo, articulo, miniatura } = obj[1]
			
			state.miniaturaNoticia = miniatura
			state.tituloNoticia = titulo
			state.articuloNoticia = articulo
		}
	})
	.catch(err => alert(err))
}

function PedirNoticias(pagina) {
	state.noticias = []

	m.request({
		method: "GET",
		url: `/noticias/?pagina=${pagina}`
	})
	.then(data => {
		for(let obj of Object.entries(data)) {
			state.noticias.push(obj[1])
		}

		CargarNoticias()
	})
	.catch(err => alert(err))
}

function CargarNoticias() {
	state.noticiasPostArr = []

	state.noticias.map(data => {
		state.noticiasPostArr.push(m('.noticiapost', m(PostNoticias, { LoadNoticia: LoadNoticia, img: data.miniatura, title: data.titulo, content: data.articulo, id: data.id, showLeerMas: true })))
	})
}

function CargarPaginadores() {
	state.paginadoresArr = []

	for (let i = 0; i < Math.ceil(state.cantNoticias / 3); i++) {
		state.paginadoresArr.push(m('.pag-post', {
			onclick: () => Paginate(i + 1), 
			class: state.pagina == (i + 1) ? 'currect-pag-post' : null
		}, m('p', i + 1)))
	}
}

function Paginate(pagina) {
	state.view = false;
	if(state.pagina != pagina) {
		state.pagina = pagina
		PedirNoticias(pagina)
		CargarPaginadores()
	}
}

const PostRightLeftSections = {
	oninit: function() {
		askAds('vertical', state.ads, 0)
	},
	view: function() {
		return m('.post-right-left-sections', [
			m('#postsection-left', [
				state.view ? m(ViewNoticia, { img: state.miniaturaNoticia, title: state.tituloNoticia, content: state.articuloNoticia, closeNoticia: closeNoticia }) : state.noticiasPostArr
			]),
			m('#postsection-right', [
				m(RightSection, { modifyDestacados: modifyDestacados, destacados: state.destacados,  CargarNoticias: CargarNoticias, LoadNoticia: LoadNoticia}),
				m(Ads, { type: 'vertical', src: state.ads[0] })
			])
		])
	}
}

const PagsPost = {
	oninit: function() {
		m.request({
			method: "GET",
			url: `/cantidadnoticias`
		})
		.then(data => {
			for(let obj of Object.entries(data)) {
				state.cantNoticias = obj[1].cantidadnoticias
			}
	
			CargarPaginadores(state.cantNoticias)
		})
		.catch(err => alert(err))
	},
	view: function() {
		return m('.pags-post-con', state.paginadoresArr)
	}
}

const PostSection = {
	oninit: function() {
		PedirNoticias('1')
	},
	view: function() {
		return m('#postsection', [
			m(PostRightLeftSections),
			m(PagsPost, { Paginate: Paginate })
		])
	}
}

export default PostSection
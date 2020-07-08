import ExchangeCal from '../home/exchangecal.js'
import ChartPrices from '../variaciondolar/chartprices.js'
import PostNoticias from '../noticias/postnoticias.js'

const state = {
	id: '',
	img: '',
	title: '',
	content: ''
}

const RoundBox = {
	oncreate: function () {
		m.request({
			method: "GET",
			url: `/lastnoticia`
		})
		.then(data => {
			console.log(data)
			for(let obj of Object.entries(data)) {
				let { id, titulo, articulo, miniatura } = obj[1]
				
				state.id = id
				state.img = miniatura
				state.title = titulo
				state.content = articulo
			}
		})
		.catch(err => alert(err))
	},
	view: function(vnode) {
		let page = vnode.attrs.page
		
		let pageStyle;
		let width = document.body.offsetWidth;
		
		let dolar = vnode.attrs.dolar
		
		let changeStateNoticia = vnode.attrs.changeStateNoticia
		
		if(page === 'home') {
			//style only desktop 
			width > 800 ? pageStyle = 'padding-left: 5%' : null
			
			return m('#rounded-box-con',
				m('#rounded-box', { style: pageStyle }, m(ExchangeCal, { dolar: dolar }))
			)
		} else if(page === 'variaciondolar'){
			pageStyle = 'justify-content:center;align-items:center;padding-left: 1%'
			
			return m('#rounded-box-con',
				m('#rounded-box', { style: pageStyle }, m(ChartPrices))
			)
		} else {
			pageStyle = 'overflow: hidden;'
			
			return m('#rounded-box-con',
				m('#rounded-box', { style: pageStyle },
					m(PostNoticias, { changeStateNoticia: changeStateNoticia, id: state.id, img: state.img, title: state.title, content: state.content })
				)
			)
		}
	}
}

export default RoundBox
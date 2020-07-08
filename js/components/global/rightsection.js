const RightSection = {
	oninit: function(vnode) {
		let homeDestacados = vnode.attrs.homeDestacados
		let modifyDestacados = vnode.attrs.modifyDestacados
		
		if(homeDestacados) {
			m.request({
				method: "GET",
				url: `/destacados`
			})
			.then(data => {
				modifyDestacados('clear')

				for(let obj of Object.entries(data)) {
					let { id, titulo } = obj[1]
					modifyDestacados(m('li', m('a', { href: '#!/Noticias' }, titulo)))
				}
			})
			.catch(err => alert(err))
		} else {
			let LoadNoticia = vnode.attrs.LoadNoticia
			let CargarNoticias = vnode.attrs.CargarNoticias

			m.request({
				method: "GET",
				url: `/destacados`
			})
			.then(data => {
				modifyDestacados('clear')
	
				for(let obj of Object.entries(data)) {
					let { id, titulo } = obj[1]
					modifyDestacados(m('li', { onclick: () => LoadNoticia(id) }, titulo))
				}
			})
			.catch(err => alert(err))
		}
	},
	view: function(vnode) {
    let destacados = vnode.attrs.destacados

		return m('#destacados', [
			m('#destacados-title', [
				m('img[src=./img/iconos/check_destacados.png]'),
				m('h1', 'Destacados')
			]),
			m('#destacados-section', [
				m('ul', destacados)
			])
		])
	}
}

export default RightSection
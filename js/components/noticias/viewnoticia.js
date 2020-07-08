const ViewNoticia = {
	view: function(vnode) {
		let img = vnode.attrs.img
		let title = vnode.attrs.title
		let content = vnode.attrs.content
		let closeNoticia = vnode.attrs.closeNoticia
		
		return m('#view-noticia',
			m('#noticia-con', [
				m('#close-noticia', { onclick: () => closeNoticia() } ,'Cerrar'),
				m('img#noticia-img', { src: img }),
				m('h1#noticia-title', title),
				m('h3#noticia-content', content),
				m('a#share-button', { href: 'https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/#!/Noticias', target: '_blank' }, 'Compartir en Facebook' )
			])
		)
	}
}

export default ViewNoticia
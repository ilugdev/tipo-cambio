const defaultPost = {
	img: './img/img_prueba/img_001.png',
	title: '¿Cómo detectar billetes de 100 dólares falsos?',
	content: 'Hemos recopilado para ti cuatro consejos efectivos que te pueden ayudar a reconocer si estás comprando un billete estadounidense',
	showLeerMas: false
}

const PostNoticias = {
	view: function(vnode) {

		let img = "./admin/data_admin/" + vnode.attrs.img
		let title = vnode.attrs.title
		let content = vnode.attrs.content
		let id = vnode.attrs.id
		let showLeerMas = vnode.attrs.showLeerMas
		
		//show noticia
		let LoadNoticia = vnode.attrs.LoadNoticia
		
		return m('.postnoticias-con', [
			m(`img[src=${img}]`),
			m('.postnoticias-con-text', [
				m('h1', title),
				m('h3', content),
				showLeerMas ? m('h3.leer-mas', { onclick: () => LoadNoticia(id) },'Leer más') : null
			]),
			showLeerMas ? m('a#share-button', { href: 'https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/#!/Noticias', target: '_blank' }, 'Compartir en Facebook' ) : null
		])
	}
} 

export default PostNoticias
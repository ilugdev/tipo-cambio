import ShareFbButton from './sharefbbutton.js'

const PostNoticias = {
	view: function(vnode) {

		let img = vnode.attrs.img
		let title = vnode.attrs.title
		let content = vnode.attrs.content
		let id = vnode.attrs.id
		let showLeerMas = vnode.attrs.showLeerMas
		
		//show noticia
		let LoadNoticia = vnode.attrs.LoadNoticia
		
		return m('.postnoticias-con', { id: showLeerMas ? '' : 'postnoticiadestacado'}, [
			m(`img[src=${img}]`),
			m('.postnoticias-con-text', [
				m('h1', title),
				showLeerMas ? m('h3', content) : null,
				showLeerMas ? m('h3.leer-mas', { onclick: () => LoadNoticia(id) },'Leer más') : null
			]),
			showLeerMas ? m(ShareFbButton) : null
		])
	}
} 

export default PostNoticias
const BackgroundImg = {
	view: function(vnode) {
		return m('img', { id: vnode.attrs.id ,src: vnode.attrs.src })
	}
}

export default BackgroundImg
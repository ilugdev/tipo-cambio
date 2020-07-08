function pedirEnlace() {
	m.request({
		method: "GET",
		url: `/publicidad/?medida=${vnode.attrs.type}`
	})
	.then(data => {
		return data.enlace
	})
	.catch(err => alert(err))
}

const Ads = {
	view: function(vnode) {
		let type = vnode.attrs.type
		let margin = vnode.attrs.margin
		let id = ''
		let src = vnode.attrs.src
		
		switch(type){
			case 'horizontal':
			id = 'h-ad'
			break;

			case 'vertical':
			id = 'v-ad'
			break;

			case 'square':
			id = 's-ad'
			break;

			default:
			id = 'h-ad'
		}

		if (type === "horizontal") {
			return m('.ad-con', { style: `margin-top:${margin}` },m('', { id: id }, m('iframe', { style: 'width: 100%; height: 100%', src: src })))
		} else {
			return m('', { id: id }, m('iframe', { style: 'width: 100%; height: 100%', src: src }))
		}
	}
}

export default Ads
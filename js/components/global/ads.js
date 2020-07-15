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

		let img = vnode.attrs.src.img
		let link = vnode.attrs.src.link
		
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
			return m('a.ad-con', { style: `margin-top:${margin}`, href: link, target: '_blank' }, m('', { id: id }, m('img', { style: 'width: 100%; height: 100%', src: img })))
		} else {
			return m('a', { id: id, href: link, target: '_blank' }, m('img', { style: 'width: 100%; height: 100%', src: img }))
		}
	}
}

export default Ads
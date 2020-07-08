const SlideNavs = {
	view: function(vnode) {
		let bgColor = vnode.attrs.bgColor
		let changeSlide = vnode.attrs.changeSlide
		let amountNavs = vnode.attrs.amountNavs
		let slide = vnode.attrs.slide

		const Navs = {
			view: function(vnode) {
				let nSlide = vnode.attrs.nSlide
				let slide = vnode.attrs.slide
				let changeSlide = vnode.attrs.changeSlide

				return m('', {
					class: nSlide === slide ? 'slide-nav active-nav' : 'slide-nav' ,
					style: `background-color: ${bgColor}`,
					onclick: () => changeSlide(nSlide)
				})
			}
		}

		const renderNavs = () => {
			let renderedNavs = []
			for(let i = 0; i < amountNavs; i++) renderedNavs.push(m(Navs, { nSlide: i, slide: slide, changeSlide: changeSlide }))
			return renderedNavs
		}

		return m('#slides-nav', [ renderNavs() ])
	}
}

export default SlideNavs
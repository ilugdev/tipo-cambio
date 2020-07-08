const Slider = {
	view: function(vnode) {
		let id = vnode.attrs.id
		let itemsToShow = vnode.attrs.itemsToShow
		let slide = vnode.attrs.slide
		let items = vnode.attrs.items

		const itemsFilter = () => {
			let iPag = (slide * itemsToShow)
			let fPag = ((slide + 1) * itemsToShow)

			return items.filter((item, i) => {
				return i >= iPag &&
					   i < fPag
			})
		}
		
		if(id === '') {
			return itemsFilter()
		} else {
			return m('', { id: id}, itemsFilter())
		}
	}
}

export default Slider
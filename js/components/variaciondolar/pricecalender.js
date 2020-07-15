import Ads from '../global/ads.js'
import CalenderController from './calendercontroller.js'

import askAds from '../global/askAds.js'

const cal_days_in_month = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
]

const cal_months_labels = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]

const DaysBar = {
	view: function() {
		return m('#days-bar', [
			m('p', 'Do'),
			m('p', 'Lu'),
			m('p', 'Ma'),
			m('p', 'Mi'),
			m('p', 'Ju'),
			m('p', 'Vi'),
			m('p', 'Sa')
		])
	}
}

const CalenderPriceBox = {
	view: function(vnode) {
		let day = vnode.attrs.day
		let compra = vnode.attrs.compra
		let venta = vnode.attrs.venta
		
		return m('.price-box', [
			m('p.price-box-day', day),
			m('p.price-box-compra', compra),
			m('p.price-box-venta', venta)
		])
	}
}

var state = {
	priceBoxArr: [],
	calender: [
	],
	ads: [
		{
			img: 'placeholder',
			link: 'placeholder'
		},
		{
			img: 'placeholder',
			link: 'placeholder'
		}
	]
}

function updateCalender(data, dateMonth) {
	for(let obj of Object.entries(data)) {
	    for(let objData of Object.entries(obj[1])) {
    		let { buyRate, sellRate } = objData[1]
    		console.log(objData)
    		state.calender.push({ compra: buyRate, venta: sellRate })
	    }
	}
	renderCalender(dateMonth)
}

function searchCalender(dateMonth) {
	let date = new Date()
	let dateYear = date.getFullYear()
	let serverDateMonth = cal_months_labels.indexOf(dateMonth) + 1

	if(dateMonth.length > 0) {
		m.request({
			method: "GET",
			url: `/calendario/?month=${serverDateMonth}&year=${dateYear}`
		})
		.then(data => {
			state.calender = []
			updateCalender(data, cal_months_labels.indexOf(dateMonth))
		})
		.catch(err => alert(err))
	}

}

function renderCalender(dateMonth) {
	state.priceBoxArr = []

	let date = new Date()
	let dateYear = date.getFullYear()
	
	if (dateMonth == 1) {
		if ((dateYear % 4 == 0 && dateYear % 100 != 0) || dateYear % 400 == 0){
			cal_days_in_month[1] = 29
		}
	}
	
	let firstDay = new Date(dateYear, dateMonth, 1).getDay()
	firstDay === 0 ? firstDay = 7 : null

	var monthDaysBefore = (cal_days_in_month[dateMonth] - firstDay) + 1
	for(let i = 1; i <= firstDay; i++) {
		state.priceBoxArr.push(m('.price-box-before', m('p', monthDaysBefore)))
		monthDaysBefore++
	}

	for(let i = 0; i <= state.calender.length - 1; i++) {
		let compra = state.calender[i].compra
		let venta = state.calender[i].venta
		let day = i + 1

		state.priceBoxArr.push(m(CalenderPriceBox, { day: day, compra: compra, venta: venta }))
	}
}

const Calender = {
	oncreate: () => {
		let date = new Date()
		let dateMonth = date.getMonth() + 1
		let dateYear = date.getFullYear()

		m.request({
			method: "GET",
			url: `/calendario/?month=${dateMonth}&year=${dateYear}`
		})
		.then(data => {
			updateCalender(data, dateMonth - 1 )
		})
		.catch(err => alert(err))
	},
	view: function() {
		return m('#calender', [
			m(CalenderController, { searchCalender: searchCalender}),
			m(DaysBar),
			m('#calender-price-box-con', state.priceBoxArr)
		])
	}
}

const PriceCalender = {
	oninit: function() {
		askAds('vertical', state.ads, 0)
		askAds('vertical', state.ads, 1)
	},
	view: function() {
		return m('#price-calender', [
			m(Ads, { type: 'vertical', src: state.ads[0] }),
			m(Calender),
			m(Ads, { type: 'vertical', src: state.ads[1] })
		])
	}
}

export default PriceCalender
const conf = {
	type: 'line',
	data: {
		labels: ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'],
		datasets: [
		{
			fill: false,
			label: 'Compra',
			data: [],
			backgroundColor: '#03056d',
			borderColor: '#03056d',
		},
		{
			fill: false,
			label: 'Venta',
			data: [],
			backgroundColor: '#00d7fc',
			borderColor: '#00d7fc',
		}
		],
	},
	options: {
		responsive: true,
		legend: {
			position: 'bottom'
		},
		tooltips: {
			mode: 'nearest',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true
			}]
		}
	}
}

const ChartPrices = {
	oncreate: function(vnode) {
		let pos
		document.body.offsetWidth < 800 ? pos = 'bottom' : pos = 'right'
		conf.options.legend.position = pos
		let chart = new Chart(vnode.dom, conf)

		m.request({
			method: "GET",
			url: "/grafica"
		})
		.then(data => {
			for(let obj of Object.entries(data)) {
				let { buyRate, sellRate } = obj[1]
				
				chart.data.datasets[0].data.push(buyRate)
				chart.data.datasets[1].data.push(sellRate)
			}
			setTimeout(() => chart.update(), 700)
		})
		.catch(err => alert(err))
	},
	view: function() {
		
		let style = ''
		let width = document.body.offsetWidth;
		
		let styleMobile = 'width: 90%;height:100%; padding: 4% 1%;'
		let styleDesktop = 'width: 100%;height:70%; padding: 0 5%;'
		
		width < 800 ? style = styleMobile : style = styleDesktop
		
		return m('canvas#chart-prices', { style: style })
	}
}

export default ChartPrices
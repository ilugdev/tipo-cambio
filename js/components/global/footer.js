const Footer = {
	view: function() {
		return m('footer', [
			m('#texto-left', [
				m('p', 'eltipodecambio.com'),
				m('p', '\u00A9 Todos los Derechos Reservados')
			]),
			m('#texto-right', [
				m('a[href=#!/Home]', 'Home'),
				m('a[href=#!/Variacion-Dolar]', 'Variación del dolar'),
				m('a[href=#!/Noticias]', 'Noticias')
			]),
		])
	}
}

export default Footer
const text = {
	home: {
		siteLink: 'eltipodecambio.com',
		description: ' es una plataforma que ofrece el precio del dólar en el Perú, su información es actualizada a diario.'
	},
	rest: {
		title: 'No pierdas la oportunidad, suscríbete y recibe todo acerca del tipo de cambio',
		subtitle: 'Entérate de todas las novedades del tipo de cambio en el Perú y no te pierdas una buena oportunidad de compra-venta de dólares y soles online, estés donde estés.'
	}
}

const BannerTypeHome = {
	view: function() {
		return m('#banner-informativo-text', [
			m('h1', m('span', text.home.siteLink), text.home.description)
		])
	}
}


/*Submit email*/
let state = {
	email: '',
	message: '',
	btnMessage: 'Enviar',
	btnMessageSubscribed: '¡Subscrito!',
	showMessage: false
}

function validateEmail(email) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		state.btnMessage = 'Enviando...'
		state.email = email

		return true
	} else {
		state.showMessage = true
		state.message = 'Email invalido.'
	}
}

function enviarInfo() {
	if(validateEmail(state.email)) {
		m.request({
			method: "POST",
			url: "/subscribirse",
			body: {
				email: "state.email"
			}
		})
		.then(({ message }) => {
			state.showMessage = true
			setTimeout(() => state.showMessage = false, 5000)

			if(message === 'subscrito') {
				state.btnMessage = state.btnMessageSubscribed
				state.message = 'Gracias por regístrate, ahora recibirás información actualizada del dólar en el Perú.'
			} else {
				state.btnMessage = 'Enviar'
				state.message = 'Error al registrarse, reintentar otra vez...'
			}
		})
		.catch(err => console.log(err))
	}
}

const BannerTypeRest = {
	view: function() {
		return m('#banner-informativo-text-rest', [
			m('h1#title.text', text.rest.title),
			m('h3.text', text.rest.subtitle),
			m('#subscription-input', [
				m('input[type=email][placeholder=Suscríbete]', {
					oninput: function(event) {
						state.email = event.target.value;
						state.showMessage = false
					},
					disabled: state.btnMessage === state.btnMessageSubscribed ? true : false
				}),
				state.showMessage ? m('p#subscription-message', {
					style: state.btnMessage === state.btnMessageSubscribed ? 'color: green' : null
				}, state.message) : null,
				m('button', {
					onclick: () => enviarInfo(),
					disabled: state.btnMessage === state.btnMessageSubscribed ? true : false
				}, state.btnMessage)
			])
		])
	}
}

const BannerInformativo = {
	view: function(vnode) {
		let bannerType = vnode.attrs.bannerType
		
		let bgHome = "background-image: url('./img/banner/banner2.png');";
		
		let bgRestnMargin;
		let width = document.body.offsetWidth;
		if(width > 800) {
			bgRestnMargin = "background-image: url('./img/banner/banner3.png')";
		} else {
			bgRestnMargin = "background-image: url('./img/banner/banner3.png');height:280px;margin-bottom: 0;";
		}
		
		return m('#banner-informativo', { style: bannerType === 'home' ? bgHome : bgRestnMargin }, bannerType === 'home' ? m(BannerTypeHome) : m(BannerTypeRest))
	}
}

export default BannerInformativo
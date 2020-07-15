const state = {
  title: '',
  img: ''
}

const NoticiaDestacada = {
  oncreate: function () {
    m.request({
      method: "GET",
      url: `/lastnoticia`
    })
    .then(data => {
      for(let obj of Object.entries(data)) {
        let { titulo, miniatura } = obj[1]
        
        state.title = titulo
        // state.img = "./admin/data_admin/" + miniatura
        state.img = miniatura
      }
    })
    .catch(err => alert(err))
  },
  view: function() {
    return m('a#noticiadestacada', { href: '#!/Noticias' }, [
      m('h1', state.title),
      m('img', { src: state.img, alt: 'noticia_destacada' })
    ])
  }
}

export default NoticiaDestacada
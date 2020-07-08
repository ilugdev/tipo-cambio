const ExchangeLista = {
  view: function(vnode) {
    let src = vnode.attrs.src
    let btnColor = vnode.attrs.btnColor
    let compra = vnode.attrs.compra
    let venta = vnode.attrs.venta
    let link = vnode.attrs.link

    return m('.exchange-lista', [
      m('img', { src: src }),
      m('.exchange-lista-compra-venta', [
        m('.exchange-lista-data', [
          m('h1', compra),
          m('h1', venta)
        ]),
        m('a', { href: link, target: '_BLANK' } ,'Cambiar'),
      ])
    ])
  }
}

export default ExchangeLista
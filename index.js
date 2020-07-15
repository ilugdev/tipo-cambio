const express = require('express')
var bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 3000

app.use('/', express.static(path.join(__dirname, '/')))

var jsonParser = bodyParser.json()

app.get('/exchange-houses', (req, res) => {
    res.json({
        "western": {
          "buyRate": "3.490",
          "sellRate": "3.520",
          "link": "https://www.westernunionperu.pe/cambiodemoneda?utm_source=ced",
          "img": "./img/online/western_union.png"
        },
        "tucambista": {
          "buyRate": "3.499",
          "sellRate": "3.510",
          "link": "https://tucambista.pe/?utm_source=ced&utm_medium=paid",
          "img": "./img/online/tucambista.svg"
        },
        "tkambio": {
          "buyRate": "3.470",
          "sellRate": "3.518",
          "link": "https://tkambio.com/?utm_source=CED&utm_medium=web&utm_campaign=Tipo%20de%20cambio&utm_content=ced",
          "img": "./img/online/jkambio.png"
        },
        "dollarhouse": {
          "buyRate": "3.501",
          "sellRate": "3.514",
          "link": "https://dollarhouse.pe/?utm_source=ced",
          "img": "./img/online/dollar_house.png"
        },
        "cambix": {
          "buyRate": "3.498",
          "sellRate": "3.518",
          "link": "https://cambix.pe/#/home",
          "img": "./img/online/cambia_fx.png"
        },
        "cambistainka": {
          "buyRate": "3.494",
          "sellRate": "3.515",
          "link": "https://cambistainka.com/?utm_source=ced",
          "img": "./img/online/cambista_inka.png"
        },
        "cambioseguro": {
          "buyRate": "3.480",
          "sellRate": "3.524",
          "link": "https://cambioseguro.com/?utm_source=ced",
          "img": "./img/online/cambio_seguro.png"
        },
        "cambiafx": {
          "buyRate": "3.489",
          "sellRate": "3.510",
          "link": "https://cambiafx.pe/?utm_source=display&utm_medium=banner&utm_campaign=Cuanto_esta_el_Dolar&utm_content=boton_cambiar",
          "img": "./img/online/CambixLogo.svg"
        },
        "acomo": {
          "buyRate": "3.501",
          "sellRate": "3.515",
          "link": "https://acomo.com.pe/?utm_source=ced",
          "img": ".img/online/acomo.png"
        }
      })
})

app.post('/subscribirse', jsonParser,(req, res) => {
    console.log(req.body)

    res.json({
        message: 'subscrito'
    })
})

app.get('/sunat', (req, res) => {
    res.json({
        buyRate: '3.200',
        sellRate: '3.180'
    })
})

app.get('/publicidad', (req, res) => {
    console.log(req.query)

    if(req.query.medida === 'horizontal') {
        res.json({
            img: 'imagen',
            link: 'enlace'
        })
    } else if(req.query.medida === 'vertical') {
        res.json({
            img: 'imagen',
            link: 'enlace'
        })
    } else {
        res.json({
            img: 'imagen',
            link: 'enlace'
        })
    }
})

app.get('/grafica', (req, res) => {
    res.json({
        1: {
            buyRate: '3.220',
            sellRate: '3.190'
        },
        2: {
            buyRate: '3.210',
            sellRate: '3.150'
        },
        3: {
            buyRate: '3.250',
            sellRate: '3.210'
        },
        4: {
            buyRate: '3.650',
            sellRate: '3.280'
        },
        5: {
            buyRate: '3.510',
            sellRate: '3.480'
        },
        6: {
            buyRate: '3.420',
            sellRate: '3.380'
        },
        7: {
            buyRate: '3.300',
            sellRate: '3.180'
        }
    })
})

app.get('/calendario', (req, res) => {
    if(req.query.month == 5) {
        res.json({
            1: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            },
            2: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            },
            3: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            },
            4: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            },
            5: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            },
            6: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            },
            7: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            },
            8: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            },
            9: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            },
            10: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            },
            11: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            },
            12: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            },
            13: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            },
            14: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            },
            15: {
                1: {
                    buyRate: '3.220',
                    sellRate: '3.190'
                }
            }
        })
    } else {
        res.json({
            1: {
                buyRate: '3.220',
                sellRate: '3.190'
            },
            2: {
                buyRate: '3.210',
                sellRate: '3.150'
            },
            3: {
                buyRate: '3.250',
                sellRate: '3.210'
            },
            4: {
                buyRate: '3.650',
                sellRate: '3.280'
            },
            5: {
                buyRate: '3.510',
                sellRate: '3.480'
            },
            6: {
                buyRate: '3.420',
                sellRate: '3.380'
            },
            7: {
                buyRate: '3.300',
                sellRate: '3.180'
            },
            8: {
                buyRate: '3.220',
                sellRate: '3.190'
            },
            9: {
                buyRate: '3.210',
                sellRate: '3.150'
            },
            10: {
                buyRate: '3.250',
                sellRate: '3.210'
            },
            11: {
                buyRate: '3.650',
                sellRate: '3.280'
            },
            12: {
                buyRate: '3.510',
                sellRate: '3.480'
            },
            13: {
                buyRate: '3.420',
                sellRate: '3.380'
            },
            14: {
                buyRate: '3.300',
                sellRate: '3.180'
            },
            15: {
                buyRate: '3.300',
                sellRate: '3.180'
            },
            16: {
                buyRate: '3.220',
                sellRate: '3.190'
            },
            17: {
                buyRate: '3.210',
                sellRate: '3.150'
            },
            18: {
                buyRate: '3.250',
                sellRate: '3.210'
            },
            19: {
                buyRate: '3.650',
                sellRate: '3.280'
            },
            20: {
                buyRate: '3.510',
                sellRate: '3.480'
            },
            21: {
                buyRate: '3.420',
                sellRate: '3.380'
            },
            22: {
                buyRate: '3.300',
                sellRate: '3.180'
            },
            23: {
                buyRate: '3.220',
                sellRate: '3.190'
            },
            24: {
                buyRate: '3.210',
                sellRate: '3.150'
            },
            25: {
                buyRate: '3.250',
                sellRate: '3.210'
            },
            26: {
                buyRate: '3.650',
                sellRate: '3.280'
            },
            27: {
                buyRate: '3.510',
                sellRate: '3.480'
            },
            28: {
                buyRate: '3.420',
                sellRate: '3.380'
            },
            29: {
                buyRate: '3.300',
                sellRate: '3.180'
            },
            30: {
                buyRate: '3.300',
                sellRate: '3.180'
            }
        })
    }
    
})

app.get('/cantidadnoticias', (req, res) => {
    res.json({
        1: {
            cantidadnoticias: 6
        }
    })
})

app.get('/vernoticia', (req, res) => {
    res.json({
        1: {
            titulo: '¿Cuándo ahorrar en dólares?',
            articulo: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            miniatura: './img/img_prueba/img_002.png'
        }
    })
})

app.get('/destacados', (req, res) => {
    res.json({
        1:{
            id: '1',
            titulo: 'Destacado 1'
        },
        2:{
            id: '2',
            titulo: 'Destacado 2'
        },
        3:{
            id: '3',
            titulo: 'Destacado 3'
        }
    })
})

app.get('/lastnoticia', (req, res) => {
    res.json({
        1:{
            fecha: '20-05-20',
            titulo: 'Last noticia',
            articulo: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            miniatura: 'wallpaper.jpg',
            id: 'noticia03'
        }
    })
})

app.get('/noticias', (req, res) => {
    console.log(req.query)
    if(req.query.pagina === '1') {
        res.json({
            1:{
                fecha: '20-05-20',
                titulo: '¿Cuándo ahorrar en dólares?',
                articulo: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
                miniatura: './img/img_prueba/img_002.png',
                id: 'noticia01'
            },
            2:{
                fecha: '20-05-20',
                titulo: '¿Cómo pagar menos intereses en un crédito hipotecario?',
                articulo: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
                miniatura: './img/img_prueba/img_003.png',
                id: 'noticia02'
            },
            3:{
                fecha: '20-05-20',
                titulo: 'Métodos de seguridad que deberías tomar al...',
                articulo: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
                miniatura: './img/img_prueba/img_004.png',
                id: 'noticia03'
            }
        })
    } else {
        res.json({
            1:{
                fecha: '20-05-20',
                titulo: '¿fasdfasfasdfsa?',
                articulo: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
                miniatura: './img/img_prueba/img_002.png',
                id: 'noticia01'
            },
            2:{
                fecha: '20-05-20',
                titulo: '¿zxvczxvzxcvxzcvzx?',
                articulo: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
                miniatura: './img/img_prueba/img_003.png',
                id: 'noticia02'
            },
            3:{
                fecha: '20-05-20',
                titulo: '31241234521421',
                articulo: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
                miniatura: './img/img_prueba/img_004.png',
                id: 'noticia03'
            }
        })
    }
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))

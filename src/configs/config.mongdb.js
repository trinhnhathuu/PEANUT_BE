'user strict'


//? level 0
// const config = {
//     app: {
//         port:3039
//     },
//     db: {
//         host: 'localhost',
//         port: 27017,
//         name: 'peanut'
//     }
// }

//? level 1

// const dev = {
//     app: {
//         port:3030
//     },
//     db: {
//         host: 'localhost',
//         port: 27017,
//         name: 'peanutDev'
//     }
// }

// const product = {
//     app: {
//         port:3039
//     },
//     db: {
//         host: 'localhost',
//         port: 27017,
//         name: 'peanutProduct'
//     }
// }

//? level 2

const dev = {
    app: {
        port:process.env.DEV_APP_PORT || 3031
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: process.env.DEV_DB_PORT || 27017,
        name: process.env.DEV_DB_NAME || 'peanutDev'
    }
}

const product = {
    app: {
        port:process.env.PRODUCT_APP_PORT || 3030
    },
    db: {
        host: process.env.PRODUCT_DB_HOST || 'localhost',
        port: process.env.PRODUCT_DB_PORT || 27017,
        name: process.env.PRODUCT_DB_NAME || 'peanutProduct'
    }
}

const config = { dev, product }
const env = process.env.NODE_ENV || 'dev'

console.log(config[env], env)

module.exports = config[env]
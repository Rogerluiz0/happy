require( 'dotenv' ).config()
const config = require( './config/index.js' )

const path = require( 'path' )
const express = require( 'express' )
const server = express()
const pages = require( './pages.js' )

const PORT = config.app.port

server.use( express.urlencoded( { extended: true } ) )
server.use( express.static( path.join( __dirname , '../public/' ) ) )
server.set( 'views' , path.join( __dirname , 'views' ) )
server.set( 'view engine' , 'hbs' )

server.get( '/' , pages.index )
server.get( '/orphanage' , pages.orphanage )
server.get( '/orphanages' , pages.orphanages )
server.get( '/create-orphanage' , pages.createOrphanage )
server.post( '/save-orphanage' , pages.saveOrphanage )

server.listen( PORT , () => {
  console.log( `Server running on localhost:${PORT}` )
} )
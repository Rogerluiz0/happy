const Database = require( './database/db.js' ) 
const saveOrphanages = require( './database/saveOrphanages.js' )

module.exports = {

  index( req , res ) {
    return res.render( 'index' )
  },

  async orphanage( req , res ) {

    const id = req.query.id

    try {
      const db = await Database
      const results = await db.all( `SELECT * FROM orphanages WHERE id = "${id}"` )
      
      const orphanage = results[0]
      orphanage.images = orphanage.images.split( ',' )
      orphanage.firsIimage = orphanage.images[0]

      if ( orphanage.opening_on_weekends == '0' ) {
        orphanage.opening_on_weekends = false
      } else {
        orphanage.opening_on_weekends = true
      }

      return res.render( 'orphanage.hbs' , { orphanage } )
    } catch ( error ) {
      console.log( error )
      return res.send( 'Erro no banco de dados' )
    }
  },

  async orphanages( req , res ) {

    try {
      const db = await Database
      const orphanages = await db.all( 'SELECT * FROM orphanages' )
      return res.render( 'orphanages.hbs' , { orphanages } )
    } catch ( error ) {
      console.log( error )
      return res.send( 'Erro no banco de dados' )
    }

  },

  createOrphanage( req , res ) {
    return res.render( 'create-orphanage.hbs' )
  },
  
  async saveOrphanage( req , res ) {
    const fields = req.body

    if ( Object.values( fields ).includes('') ) {
      return res.send( 'Todos os campos devem ser preenchidos' )
    }

    try {
      const db = await Database
      await saveOrphanages( db ,{
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        opening_on_weekends: fields.opening_on_weekends,
      } )

      return res.redirect( '/orphanages' )
    } catch ( error ) {
      console.log( error )
      return res.send( 'Erro no banco de dados' )
    }

  }


}
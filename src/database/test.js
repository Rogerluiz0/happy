const Database = require( './db.js' )
const saveOrphanages = require( './saveOrphanages.js' )

Database.then( async db => {
  // inserir dados na tabela
  await saveOrphanages( db , {
    lat: '-19.924455',
    lng: '-43.928009',
    name: 'Lar dos 7',
    about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
    whatsapp: '(77) 77777-7777',
    images: [
      'https://images.unsplash.com/photo-1597095536985-21c85eb8c65e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
      'https://images.unsplash.com/photo-1595295407820-3563d04518be?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
    ].toString(),
    instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
    opening_hours: 'Horário de visitas Das 18h até 8h',
    opening_on_weekends: '1'
  } )

  // consultar dados da tabela
  // const selectedOrphanages = await db.all( 'SELECT * FROM orphanages' )
  // console.log( selectedOrphanages )

  // consultar somente 1 orfanato pelo id
  // const orphanage = await db.all( 'SELECT * FROM orphanages WHERE id = "3"' )
  // console.log( orphanage )

  // deletar dado da tabela
  // console.log(await db.run( 'DELETE FROM orphanages WHERE id = "5"' ))
  // console.log(await db.run( 'DELETE FROM orphanages WHERE id = "6"' ))
} )
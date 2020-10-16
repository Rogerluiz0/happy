function saveOrphanages ( db , orphanage ) {
  return db.run(`
    INSERT INTO orphanages (
      lat,
      lng,
      name,
      about,
      whatsapp,
      images,
      instructions,
      opening_hours,
      opening_on_weekends
    ) VALUES (
      "${orphanage.lat}",
      "${orphanage.lng}",
      "${orphanage.name}",
      "${orphanage.about}",
      "${orphanage.whatsapp}",
      "${orphanage.images}",
      "${orphanage.instructions}",
      "${orphanage.opening_hours}",
      "${orphanage.opening_on_weekends}"
    );
  `)
}

module.exports = saveOrphanages
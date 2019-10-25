module.exports = {
  up(db) {
    // TODO write your migration here. Return a Promise (and/or use async & await).
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    //return db.collection('article').create({title: 'mon temps', description: 'my time', access: 'publique'});
    /*return db.createCollection('article', {
        title: "test",
        description: "test2",
        access: "publique",
        user: "boris",
        genre: "masculin",
        genre_text: "ogoo",
        channel: "ch2",
        image: "pict",
        like: "yes",
        view: "yes",
        create_at: "10/10/2019"
      });*/
  },

  down(db) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    //return db.collection('article').drop();
  }
};

module.exports = {
  up(db) {
    // TODO write your migration here. Return a Promise (and/or use async & await).
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    /*return db.collection('genre').create({
      fr: "oui",
      en: "yes"
    });*/
    //return db.collection('genre').insert({fr: 'mon temps', en: 'my time'});
  },

  down(db) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
     //return db.collection('genre').drop({});
  }
};

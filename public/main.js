console.log('🐱');

class Kitten {
  constructor(details){
    this._attributes = details;
    this._dataStorage = [];
  }
  meow(){
    console.log(`${this._attributes.name} says 'meow'`);
  }
  get(key) {
    return this._attributes[key];
  }
  set(key, newValue){
    this._attributes[key] = newValue;
  }
  save() {
    Kitten.create({name: this._attributes.name});
    // console.log( Kitten.prototype._id);
    // $.ajax({
    //   url: `/kittens`,
    //   type: 'POST',
    //   data: {kitten: {name: this._attributes.name, _id: this._attributes._id}}
    // }).then(function(){
    //     console.log('Created!');
    //   });
  }
  update(key, newValue) {
    if (key === 'name'){
      $.ajax({
        url: `/kittens/${this._attributes._id}`,
        type: 'PUT',
        data: {kitten: { name: newValue}}
      }).then(function(){
          console.log('Updated!');
        });
    }
    if (key === '_id'){
      $.ajax({
        url: `/kittens/${this._attributes._id}`,
        type: 'PUT',
        data: {kitten: { '_id': newValue}}
      }).then(function(){
          console.log('Updated!');
        });
    }
  }
  remove() {
    $.ajax({
      url: `/kittens/${this._attributes._id}`,
      type: 'DELETE',
    }).then(function(){
        console.log('Deleted!');
      });
  }
  static create(newKitten) {
    $.post('/kittens', {kitten: newKitten}, function(resp){
      // console.log(`Created ${newKitten.name}`);
      // Kitten.prototype._id = resp._id;
    });
  }
  static fetch() {
    $.get('/kittens', function(resp){
      this._dataStorage = resp;
      return this._dataStorage;
    });
  }
  static all() {
    return this.fetch();
  }
  static first(){
    return this._dataStorage[0];
  }

  static last(){
    return this._dataStorage[ this._dataStorage.length - 1 ];
  }
}

let kitten = new Kitten({name: 'tiny', _id: '3141'});
kitten.meow();
console.log(kitten.get('name'));
console.log(kitten.get('_id'));
kitten.set('name', 'Mr.Bigglesworth');
console.log(kitten.get('name'));
// kitten.save();
// kitten.update('name', 'Tommy');
// kitten.remove();
// Kitten.create({name: 'Gertrude'});
// Kitten.create({name: 'Mike'});
// Kitten.fetch();
// Kitten.all();
// Kitten.first();
// Kitten.last();

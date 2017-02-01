console.log('🐱');

class Kitten {
  constructor(details){
    this._attributes = details;
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
      $.put(`/kittens/${this._attributes._id}`, {kitten: this._attributes},function(resp){
        console.log(`${this._attributes.name} has been updated/saved!`);
      });
  }
  remove() {
    $.delete(`/kittens/${this._attributes._id}`, {kitten: this._attributes},function(resp){
      console.log(`${this._attributes.name} has been deleted!`);
    });
  }
  static create(newKitten) {
    $.post('/kittens', {kitten: newKitten}, function(resp){
      console.log(`Created ${newKitten.name}`);
    });
  }
}

let kitten = new Kitten({name: 'tiny', _id: '3141'});
kitten.meow();
console.log(kitten.get('name'));
console.log(kitten.get('_id'));
kitten.set('name', 'Mr.Bigglesworth');
console.log(kitten.get('name'));
kitten.save();
// Kitten.create({name: 'Gertrude'});



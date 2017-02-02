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
    $.ajax({
      url: `/kittens`,
      type: 'POST',
      data: {kitten: {name: this._attributes.name, _id: this._attributes._id}}
    }).then(function(){
        console.log('Created!');
      });
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
  static creates(newKitten) {
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
// kitten.save();
// kitten.update('name', 'Tommy');
// kitten.remove();
// Kitten.create({name: 'Gertrude'});



console.log('🐱');

class Kitten {
  constructor(obj) {
    this._attributes = obj
  }
  meow() {
    return this._attributes.name + ' says haha \'meow\''
  }

  get(param) {
   return this._attributes[param]
  }
  set(param, value) {
   return this._attributes[param] = value;
  }

  save() {
    $.ajax({
    url: '/kittens/' + this._attributes._id,
    method: 'PUT',
    data: {kitten: this._attributes},
    success: function(response) {
      console.log(response)
    },
    error: function(response) {
      console.log(response)
    }
    })
  }
  remove () {
    $.ajax({
      url: '/kittens/' + this._attributes._id,
      method: 'DELETE',
      success: function(response) {
        console.log(response)
      },
      error: function(response) {
        console.log(response)
      }
    })
  }

  static create(obj) {
    $.ajax({
      url: '/kittens',
      method: 'POST',
      data: {kitten: obj},
      success: res => {
        console.log(res)
      },
      error: res => {
        console.log(res)
      }
    })
  }

  static fetch() {
    $.get('/kittens', res => {
      Kitten.list = res.map( kitty => {
        console.log(kitty);
         return kitty = new Kitten({name: kitty.name, _id: kitty._id});
      });
        console.log(Kitten.list);
    })
  }

  static all() {
    return Kitten.list;
  }

  static first() {
    var test = Kitten.all()
    return test[0]
  }

  static last() {
    var lastKitty = Kitten.all();
    return lastKitty[lastKitty.length - 1];
  }

  static meow() {
  //   var allKitty = Kitten.all();
  //   allKitty.forEach( kitty => {
  //     console.log(`${kitty.name} says meow`);
  //   })
  // }
    Kitten.list.forEach( o => {
      console.log( o.meow() );
    })
  }
}

const kitten = new Kitten({name: 'tiny', _id: '58910f0ef224c90bf46cc0da'})

// kitten.set('name', 'BaoChaos')
// // kitten.save();
// kitten.remove();
// console.log(kitten)

// Kitten.create({name: 'ReincarnationBhaoChaos'})

//nececelery for rest of operations to run...
Kitten.fetch();


// console.log(Kitten.all());
// Kitten.first();
// Kitten.last();
// Kitten.meow();


console.log('🐱');

class Kitten {

  static fetch() {
    $.get('/kittens').then( (kittens) => {
      console.log(kittens);
      Kitten._all = kittens.map( kitten => new Kitten(kitten) );
    })
  }

  static all() {
    Kitten._all = Kitten._all || [];
    return Kitten._all;
  }

  static first() {
    return Kitten.all()[0];
  }

  static last() {
    return Kitten.all()[Kitten.all().length - 1]
  }

  constructor(attrs) {
    this._attributes = attrs;
  }

  get(attr) {
    return this._attributes[attr];
  }

  set(attr, val) {
    return this._attributes[attr] = val;
  }

  meow() {
    return `${this.get('name')} says 'meow'`
  }

  save() {
    $.ajax({
      url: `/kittens/${this.get('_id')}`,
      method: 'PUT',
      data: {kitten: this._attributes}
    }).then( (resp) => {
      console.log(resp);
    });
  }

  remove() {
    const id = this.get('_id');
    $.ajax({
      url: `/kittens/${id}`,
      method: 'DELETE'
    }).then( (resp) => {
      console.log(resp);
      Kitten._all = Kitten._all.filter( kitten => kitten.id !== id );
    });
  }
}

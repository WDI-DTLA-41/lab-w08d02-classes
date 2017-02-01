class Kitten {

  static fetch() {
    return $.get('/kittens').then( (kittens) => {
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

  static create(kitten) {
    $.post('/kittens', {kitten: kitten}, (res) => {
      Kitten.all().push( new Kitten(res) );
    })
  }

  static meow() {
    Kitten.all().forEach( kitten => kitten.meow() );
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
    const msg = `${this.get('name')} says 'meow'`;
    console.log(msg);
    return msg;
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
      Kitten._all = Kitten._all.filter( kitten => kitten.id !== id );
    });
  }
}

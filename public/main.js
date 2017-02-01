console.log('🐱');

Kitten.fetch().then( () => {
  const k1 = Kitten.first();
  Kitten.create({name: 'Debra'});
  console.log( k1.get('name') );
  k1.set('name', 'Gary');
  k1.save();
  const k2 = Kitten.last();
  console.log( k2.get('_id') );
  k2.remove();
  console.log( Kitten.all().length );
})


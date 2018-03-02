class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    this.type = data.types[0].type.name;
    try {
      this.baseHealth = data.stats[5].base_stat;
      this.baseSpeed = data.stats[0].base_stat;
      this.baseAttack = data.stats[1].base_stat;
      this.baseDefense = data.stats[2].base_stat;
      this.baseSpecialAttack = data.stats[3].base_stat;
      this.baseSpecialDefense = data.stats[4].base_stat;
    } catch(err){
      console.log('try again');
    } finally {
      console.log('thats right');
    }


    try {
      this.type2 = data.types[1].type.name;
    } catch(err) {
      null;
    }
  }
}

export default Pokemon;

export default class {
  constructor() {
    this.bowman = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    };
    this.magician = {
      name: 'Маг',
      type: 'Magician',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    };
    this.knight = {
      name: 'Рыцарь',
      type: 'Knight',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    };
  }

  * [Symbol.iterator]() {
    const values = Object.values(this);

    for (let i = 0; i <= values.length; i += 1) {
      yield values[i];
    }
  }
}

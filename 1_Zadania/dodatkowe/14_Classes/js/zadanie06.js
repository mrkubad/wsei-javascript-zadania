let foods = [];

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }
  print() {
    console.log(`${this.name} has: ${this.protein}g of protein, ${this.carbs}g of carbs, ${this.fat}g of fat.`);
  }
  static calculateCalories(protein, fat, carbs) {
    return protein * 4 + fat * 9 + carbs * 4;
  }
}

class FastFood extends Food {};
class FatFreeFood extends Food {};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#add').addEventListener('click', e => {
    e.preventDefault(); // zapobiegamy odświeżeniu strony!
    const foodName = document.querySelector('#name').value;
    const foodProtein = Number.parseFloat(document.querySelector('#proteins').value);
    const foodCarbs = Number.parseFloat(document.querySelector('#carbs').value);
    const foodFat = Number.parseFloat(document.querySelector('#fat').value);

    if(Food.calculateCalories(foodProtein, foodFat, foodCarbs) > 250) {
      foods.push(new FastFood(foodName, foodProtein, foodCarbs, foodFat));
    }
    else {
      foods.push(new FatFreeFood(foodName, foodProtein, foodCarbs, foodFat));
    }
    console.log(foods);
  });
});


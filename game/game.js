const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cars = [
  { name: 'Ferrari', sound: 'Vroom!' },
  { name: 'Lamborghini', sound: 'Roar!' },
  { name: 'Tesla', sound: 'Whir...' },
  { name: 'Ford Mustang', sound: 'Rumble!' }
];

function playGame() {
  console.log('Welcome to the Car Sound Game!');
  console.log('Pick a car to hear its sound:');
  
  cars.forEach((car, index) => {
    console.log(`${index + 1}. ${car.name}`);
  });

  rl.question('Enter the number of your choice: ', (answer) => {
    const choice = parseInt(answer) - 1;

    if (choice >= 0 && choice < cars.length) {
      console.log(`The ${cars[choice].name} goes ${cars[choice].sound}`);
    } else {
      console.log('Invalid choice. Please try again.');
    }

    rl.question('Do you want to play again? (yes/no): ', (playAgain) => {
      if (playAgain.toLowerCase() === 'yes') {
        playGame();
      } else {
        console.log('Thanks for playing! Goodbye!');
        rl.close();
      }
    });
  });
}

playGame();
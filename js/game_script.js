let doorImage1 = document.body.querySelector('#door1');
let doorImage2 = document.body.querySelector("#door2");
let doorImage3 = document.body.querySelector('#door3');
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let doorImage1Back = botDoorPath;
let doorImage2Back = beachDoorPath;
let doorImage3Back = spaceDoorPath;
let restartButton = document.body.querySelector('.start-row');
let totalOpenedDoors = 0;
let openDoor = true;
let currentStreak = 0;
let winningStreak = 0;
let currentStreakElement = document.body.querySelector('.current-streak');
let winningStreakElement = document.body.querySelector('.winning-streak');
let checkBotDoorPath = (door) => {
  if(door === botDoorPath && (totalOpenedDoors < 2)){
    restartButton.innerHTML = "Game Over!<br/>Play again?";
    openDoor = false;
    if(currentStreak>winningStreak){
      winningStreak = currentStreak;
      winningStreakElement.innerHTML = winningStreak;
    }
    currentStreak = 0;
    currentStreakElement.innerHTML = 0;
  }
  totalOpenedDoors++;
  if(totalOpenedDoors === 3){
    restartButton.innerHTML = "You Won!";
    currentStreak++;
    currentStreakElement.innerHTML = currentStreak;
  }
};

doorImage1.onclick = () => {
  if(openDoor === true) {
    doorImage1.src = doorImage1Back;
    checkBotDoorPath(doorImage1Back);
  }
};

doorImage2.onclick = () => {
  if(openDoor === true) {
    doorImage2.src = doorImage2Back;
    checkBotDoorPath(doorImage2Back);
  }
};

doorImage3.onclick = (event) => {
  console.log(event.target,'taget here');
  console.log(event.type,'type here');
  console.log(event.timeStamp,'time here');
  if(openDoor === true) {
    doorImage3.src = doorImage3Back;
    checkBotDoorPath(doorImage3Back);
  }
};

let randomChoreDoorGenerator = () => {
  console.log('random called');
  let allImages = [botDoorPath,beachDoorPath,spaceDoorPath];
  doorImage1Back = allImages[Math.floor(Math.random()*3)];
  allImages.splice(allImages.indexOf(doorImage1Back),1);
  doorImage2Back = allImages[Math.floor(Math.random()*2)];
  allImages.splice(allImages.indexOf(doorImage2Back),1);
  doorImage3Back = allImages[0];
  totalOpenedDoors = 0;
  restartButton.innerHTML = "Good luck!";
  console.log(doorImage1Back,doorImage2Back,doorImage3Back);
  openDoor = true;
};
randomChoreDoorGenerator();

restartButton.onclick = () => {
  doorImage1.src = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
  doorImage2.src = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
  doorImage3.src = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
  randomChoreDoorGenerator();
};


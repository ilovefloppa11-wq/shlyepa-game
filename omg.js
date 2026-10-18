// // level 1
// // let heroName = "Шлёпа";
// let lives = 3;
// let pelmeni = 10;
// let power = 7;
// let hasMagicBackpack = true;

// console.log("Имя:", heroName);
// console.log("Жизни:", lives);
// console.log("Пельмени:", pelmeni);
// console.log("Сила:", power);

// // level 2
// let enemyPower = Math.floor(Math.random() * 20) + 1;
// let floppaPower = Math.floor(Math.random() * 20) + 1;

// console.log("Враг тебя нашёл Готовься к бою");
// console.log("Сила врага:", enemyPower);
// console.log("Сила Шлёпы:", floppaPower);

// if (enemyPower > floppaPower) {
//     console.log("Враг победил");
// } else if (floppaPower > enemyPower) {
//     console.log("Ты победил врага");
// } else {
//     console.log("Ничья... Ты сбежал");
// }

// // level 3
// let coins2 = Math.floor(Math.random() * 50) + 1;

// let pelmeniSword = 20;
// let superPryanik = 10;
// let karakalArmour = 35;

// console.log("У тебя монет:", coins2);

// if (coins2 >= karakalArmour) {
//     console.log("Ты купил броню каракала Да ты богатый");
// } else if (coins2 >= pelmeniSword) {
//     console.log("Ты купил меч пельменя");
// } else if (coins2 >= superPryanik) {
//     console.log("Ты купил супер пряник");
// } else {
//     console.log("Да ты нищий");
// }

// let inventory = [
//   "пельмень",
//   "меч",
//   "пряник",
//   "аптечка"
// ];

// console.log("Весь инвентарь:", inventory);

// inventory.push("магический ключ");

// inventory.pop();

// console.log("Количество предметов:", inventory.length);

// console.log("Есть ли меч:", inventory.includes("меч"));

// for (let i = 0; i < inventory.length; i++) {
//   console.log("Предмет " + (i + 1) + ":", inventory[i]);
// }


// function attack(heroPower2, enemyHealth) {
  
//   if (heroPower2 > 10) {
//     heroPower2 = heroPower2 * 2;
//   }
  
//   enemyHealth = enemyHealth - heroPower2;
//   if (enemyHealth > 0) {
//     console.log("У противника осталось " + enemyHealth + " здоровья.");
//   } else {
//     console.log("Противник побеждён!");
//   }

//   return enemyHealth;
// }

// let healthAfterAttack = attack(7, 20);
// console.log(healthAfterAttack);
// //level 6
// let chance = 1;
// let chance1 = 2;
// let chance2 = 3;
// let chance3 = 4;

// let chest = Math.floor(Math.random() * 5) + 1;

// console.log("Ты нашел сундук!");
// console.log("Число сундука:", chest);

// if (chest === chance) {
//     console.log("5 монет");

// } else if (chest === chance1) {
//     console.log("Аптечка");

// } else if (chest === chance2) {
//     console.log("3 пельменя");

// } else if (chest === chance3) {
//     console.log("Пустой");

// } else {
//     console.log("Из сундука появился монстр!");

//     let monsterPower = Math.floor(Math.random() * 20) + 1;

//     console.log("Сила монстра:", monsterPower);
//     console.log("Сила Шлёпы:", floppaPower);

//     if (monsterPower > floppaPower) {
//         console.log("Монстр победил!");
//     } else if (floppaPower > monsterPower) {
//         console.log("Ты победил монстра!");
//     } else {
//         console.log("Ничья... Ты сбежал!");
//     }
// }

// let heroHealth2 = 30;
// let heroPower2 = 6;

// let bossHealth = 25;
// let bossPower = 5;

// let round2 = 1;

// while (heroHealth2 > 0 && bossHealth > 0) {
//     console.log("Раунд " + round2);
//     console.log("");

//     // Шлёпа атакует босса
//     bossHealth = bossHealth - heroPower2;

//     console.log("Шлёпа наносит " + heroPower2 + " урона.");
//     console.log("У босса осталось " + bossHealth + " здоровья.");
//     console.log("");

//     // Если босс погиб, он не атакует
//     if (bossHealth <= 0) {
//         break;
//     }

//     // Босс атакует Шлёпу
//     heroHealth2 = heroHealth2 - bossPower;

//     console.log("Босс наносит " + bossPower + " урона.");
//     console.log("У Шлёпы осталось " + heroHealth2 + " здоровья.");
//     console.log("");

//     round2++;
// }

// // Результат битвы
// if (heroHealth2 > 0) {
//     console.log("Шлёпа победил и вернул все пельмени!");
// } else {
//     console.log("Босс победил. Шлёпе придётся попробовать ещё раз.");
// }

//lvl 2.1
// let heroName2 = "Шлёпа";
// let heroHealth2 = 30;
// let heroPower2 = 6;
// let coins2 = 10;
// let experience2 = 0;

// console.log('6')
// let inventory2 = [
//     "меч",
//     "пельмень",
//     "ключ",
//     "аптечка",
//     "пельмень"
// ];

// console.log( 'Шлёпа отправляется в подземелье' )
// console.log('hp', heroHealth2)
// console.log('сила', heroPower2)
// console.log('монеты', coins2)
// console.log('опыт', experience2)



// //lvl 2.2

// function addExperience(currentExperience, reward) {
//     return currentExperience + reward;
// }

// let experience = 0;

// experience = addExperience(experience, 5);
// console.log("Шлёпа получил 5 опыта");
// console.log("Теперь опыта:", experience);

// experience = addExperience(experience, 10);
// console.log("Шлёпа получил 10 опыта");
// console.log("Теперь опыта:", experience);

// experience = addExperience(experience, 3);
// console.log("Шлёпа получил 3 опыта");
// console.log("Теперь опыта:", experience);

// //lvl 2.3

// function getDamage(minDamage, maxDamage) {
//     return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
// }

// let damage = getDamage(3, 8);

// console.log(`Шлёпа наносит ${damage} урона`);

// //lvl 2.4

// let medkits = 3;

// function healHero(health) {
//     health = health + 10;

//     if (health > 30) {
//         health = 30;
//     }

//     medkits--;

//     return health;
// }

// console.log("Здоровье было:", heroHealth2);

// heroHealth2 = healHero(heroHealth2);

// console.log("Здоровье стало:", heroHealth2);
// console.log('5')
// //lvl 2.5
// let medkits2 = 2;

// let randomReward = Math.floor(Math.random() * 5) + 1;

// if (randomReward === 1) {
//     coins2 = coins2 + 10;
//     console.log("Ты нашёл 10 монет");
// } else if (randomReward === 2) {
//     medkits2++;
//     console.log("Ты нашёл аптечку");
// } else if (randomReward === 3) {
//     inventory2.push("меч");
//     console.log("Ты нашёл меч");
// } else if (randomReward === 4) {
//     inventory2.push("пельмень");
//     inventory2.push("пельмень");
//     console.log("Ты нашёл 2 пельменя");
// } else {
//     console.log("Сундук оказался пустым");
// }

// console.log("Монеты:", coins2);
// console.log("Аптечки:", medkits2);
// console.log("Инвентарь:", inventory2);

// //lvl 2.6




// function countItem(inventory, itemName) {
//     let count = 0;

//     for (let i = 0; i < inventory.length; i++) {
//         if (inventory[i] === itemName) {
//             count++;
//         }
//     }

//     return count;
// }

// let count = countItem(inventory2, "пельмень");

// console.log(`Пельменей найдено: ${count}`);

// console.log("Мечей:", countItem(inventory2, "меч"));
// console.log("Аптечек:", countItem(inventory2, "аптечка"));
// console.log("Бананов:", countItem(inventory2, "банан"));

// //lvl 2.7

// let monsterHealth = 35;
// let monsterPower = 7;

// let round2 = 1;

// while (heroHealth2 > 0 && monsterHealth > 0) {

//     console.log(`Раунд ${round2}`);

//     let heroDamage = Math.floor(Math.random() * heroPower2) + 1;

//     monsterHealth = monsterHealth - heroDamage;

//     console.log(`Шлёпа наносит ${heroDamage} урона.`);
//     console.log(`У монстра осталось ${monsterHealth} hp.`);

//     if (monsterHealth <= 0) {
//         break;
//     }

//     let monsterDamage = Math.floor(Math.random() * monsterPower) + 1;

//     heroHealth2 = heroHealth2 - monsterDamage;

//     console.log(`Монстр наносит ${monsterDamage} урона.`);
//     console.log(`У Шлёпы осталось ${heroHealth2} hp.`);

//     round2++;
// }

// if (heroHealth2 > 0) {
//     console.log("Монстр побеждён!");

//     experience = experience + 5;
//     coins2 = coins2 + 3;

//     console.log("Шлёпа получает 5 опыта и 3 монеты.");
// } else {
//     console.log("Шлёпа проиграл");
// }

// //lvl last one

// let medkit2s = 2;

// let heroLevel = 1;



// let monsterHealth2;
// let monsterPower2;

// let rooms = [
//     "сундук",
//     "монстр",
//     "пустая комната"
// ];

// for (let room = 1; room <= 5; room++) {

//     console.log(`=== Комната ${room} ===`);

//     let randomRoom = Math.floor(Math.random() * rooms.length);
//     let currentRoom = rooms[randomRoom];

//     if (currentRoom === "сундук") {

//         console.log("Шлёпа нашёл сундук");

//         let reward = Math.floor(Math.random() * 4);

//         if (reward === 0) {
//             coins2 = coins2 + 10;
//             console.log("Шлёпа получил 10 монет");
//         } else if (reward === 1) {
//             medkits++;
//             console.log("Шлёпа получил аптечку");
//         } else if (reward === 2) {
//             inventory2.push("меч");
//             console.log("Шлёпа получил меч");
//         } else {
//             inventory2.push("пельмень");
//             inventory2.push("пельмень");
//             console.log("Шлёпа получил 2 пельменя");
//         }

//     } else if (currentRoom === "монстр") {

//         console.log("Здесь сидит монс");

//         monsterHealth2 = 20;
//         monsterPower2 = 5;

//         while (heroHealth2 > 0 && monsterHealth > 0) {

//             let heroDamage2 = Math.floor(Math.random() * heroPower2) + 1;

//             monsterHealth2 = monsterHealth2 - heroDamage2;

//             console.log(`Шлёпа наносит ${heroDamage2} урона`);

//             if (monsterHealth <= 0) {
//                 break;
//             }

//             let monsterDamage2 = Math.floor(Math.random() * monsterPower2) + 1;

//             heroHealt2 = heroHealth2 - monsterDamage2;

//             console.log(`Монстр наносит ${monsterDamage2} урона`);
//         }

//         if (heroHealth2 > 0) {
//             console.log("Монстр побеждён");

//             experience = experience + 5;
//             coins2 = coins2 + 3;
//         } else {
//             console.log("Шлёпа проиграл");
//             break;
//         }

//     } else {

//         console.log("Комната оказалась пустой");
//     }

//     // Проверяем повышение уровня
//     while (experience >= 10) {

//         heroLevel++;
//         heroPower2 = heroPower2 + 2;
//         experience = experience - 10;

//         console.log("Шлёпа получил новый уровень");
//         console.log("Уровень:", heroLevel);
//         console.log("Сила увеличена");
//     }
// }

// console.log("Подземелье пройдено");

// console.log("Здоровье:", heroHealth2);
// console.log("Монеты:", coins2);
// console.log("Опыт:", experience);
// console.log("Уровень:", heroLevel);
// console.log("Аптечки:", medkits);
// console.log("Инвентарь:", inventory2);

// // 1. Какой уровень был самым интересным?
// // Ответ: 3 ведь в нем была новая интересная механика
// //
// // 2. Какой уровень был самым сложным?
// // Ответ: 5 - 8 я их даже не делал из за сложности
// //
// // 3. Какую функцию я написал?
// // Ответ: 1-4
// //
// // 4. Где я использовал массив?
// // Ответ: старался их избегать
// //
// // 5. Где я использовал цикл for?
// // Ответ: в шестом
// //
// // 6. Где я использовал цикл while?
// // Ответ: в бонусе
// //
// // 7. Какую ошибку я допустил и как исправил?
// // Ответ: вводил неправильно переменные
// //
// // 8. Что я самостоятельно добавил в игру?
// // Ответ: старание
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //


// let heroName = 'Шлёпа';

// let heroHealth = 17;
// let heroPower = 6;
// let coins = 20;
// let experience = 0;
// let medkits = 2;
// let inventory = [];
// let pelmany = 0;
// let swords = 0;

// console.log('===', heroName, '===');
// console.log('hp', heroHealth);
// console.log('повер', heroPower);
// console.log('коинс', coins);
// console.log('експириенс', experience);
// console.log('медкитс', medkits);
// console.log('инвентори', inventory);

// let loot = Math.floor(Math.random() * 4);

// if (loot === 1) {
//     inventory.push('меч');
//     console.log('шлепа нашел меч')
// } else if (loot === 2) {
//     inventory.push('пельмень');
//     console.log('шлепа нашел пельмень')
// } else if (loot === 3) {
//     inventory.push('ключ');
//     console.log('шлепа нашел ключ')
// } else {
//     inventory.push('старая кружка');
//     console.log('шлепа нашел старую кружку')
// }

// function hasItem(inventory, itemName) {
// console.log(itemName)
//  return inventory.includes(itemName)
// }

// console.log(hasItem(inventory, "меч"));
// console.log(hasItem(inventory, "пельмень"));
// console.log(hasItem(inventory, "ключ"));
// console.log(hasItem(inventory, "старая кружка"));

// let random = Math.floor(Math.random() * 3) + 1;

// if (random === 1) {
//     if (coins >= 5) {
//         console.log('Шлёпа купил пельмень');
//         coins = coins - 5;
//         pelmany++;
//         console.log('Монет осталось:', coins);
//     }
// }

// if (random === 2) {
//     if (coins >= 10) {
//         console.log('Шлёпа купил medkit');
//         coins = coins - 10;
//         medkits++;
//         console.log('Монет осталось:', coins);
//     }
// }

// if (random === 3) {
//     if (coins >= 20) {
//         console.log('Шлёпа купил sword');
//         coins = coins - 20;
//         swords++;
//         console.log('Монет осталось:', coins);
//     }
// }


// function healHero(health, medkits) {
//     if (medkits > 0) {
//         health = health + 10;

//         if (health > 30) {
//             health = 30;
//         }

//         medkits--;
//     }

//     return [health, medkits];
// }

// console.log('Здоровье до лечения:', heroHealth);

// let result = healHero(heroHealth, medkits);

// heroHealth = result[0];
// medkits = result[1];

// console.log('Здоровье после лечения:', heroHealth);
// console.log('Аптечек осталось:', medkits);

// let medkit = 2;

// let heroLevel = 1;


// // УРОВЕНЬ 6


// let monsterHealth = 20;
// let monsterPower = 5;

// let round = 1;

// while (heroHealth > 0 && monsterHealth > 0) {

//     console.log(`=== Раунд ${round} ===`);

//     // Атака Шлёпы
//     let heroDamage = Math.floor(Math.random() * heroPower) + 1;
//     monsterHealth -= heroDamage;

//     console.log(`Шлёпа наносит ${heroDamage} урона.`);
//     console.log(`У монстра осталось ${monsterHealth} HP.`);

//     // Монстр атакует только если жив
//     if (monsterHealth > 0) {

//         let monsterDamage = Math.floor(Math.random() * monsterPower) + 1;
//         heroHealth -= monsterDamage;

//         console.log(`Монстр наносит ${monsterDamage} урона.`);
//         console.log(`У Шлёпы осталось ${heroHealth} HP.`);
//     }

//     round++;
// }



// // УРОВЕНЬ 7


// if (heroHealth > 0) {

//     console.log("Монстр побеждён!");

//     experience += 5;
//     coins += 7;
//     inventory.push("пельмень");

//     console.log("=== НАГРАДА ===");
//     console.log("Опыт:", experience);
//     console.log("Монеты:", coins);
//     console.log("Инвентарь:", inventory);

// } else {

//     console.log("Шлёпа проиграл :(");
// }




// function countItem(inventory, itemName) {

//     let count = 0;

//     for (let i = 0; i < inventory.length; i++) {

//         if (inventory[i] === itemName) {
//             count++;
//         }
//     }

//     return count;
// }

// let pelmeniCount = countItem(inventory, "пельмень");
// let swordsCount = countItem(inventory, "меч");
// let keysCount = countItem(inventory, "ключ");
// let bananasCount = countItem(inventory, "банан");

// console.log("Пельменей:", pelmeniCount);
// console.log("Мечей:", swordsCount);
// console.log("Ключей:", keysCount);
// console.log("Бананов:", bananasCount);




// let finalChest = Math.floor(Math.random() * 4) + 1;

// console.log("=== ФИНАЛЬНЫЙ СУНДУК ===");

// if (finalChest === 1) {

//     inventory.push("золотой пельмень");
//     console.log("Шлёпа нашёл золотой пельмень");

// } else if (finalChest === 2) {

//     coins = coins + 20;
//     console.log("Шлёпа получил 20 монет");

// } else if (finalChest === 3) {

//     medkits++;
//     console.log("Шлёпа получил аптечку");

// } else {

//     console.log("В сундуке ничего нет");
// }




// console.log("=== КОНЕЦ ПРИКЛЮЧЕНИЯ ===");
// console.log("Здоровье:", heroHealth);
// console.log("Сила:", heroPower);
// console.log("Монеты:", coins);
// console.log("Опыт:", experience);
// console.log("Аптечки:", medkits);
// console.log("Инвентарь:", inventory);




// if (inventory.includes("золотой пельмень")) {

//     console.log("Шлёпа нашёл легендарный золотой пельмень");

// } else {

//     console.log("Золотой пельмень придётся искать в следующий раз");
// }


// let heroName = 'Шлёпа';
// let heroHealthe = 30;
// let coinse = 9;
// let experience = 0;
// let medkitse = 1;
// let inventorye = ['карта'];
// let visitedLocationse = [];
// let heroPowere = 7;
// let maxHealth = 30;
// let heroHealth = 30;

// if (heroHealth > maxHealth) {
//     heroHealth = maxHealth;
// }

// console.log('name', heroName)
// console.log('healthe', heroHealthe)
// console.log('maxeHealthe', maxHealth)
// console.log('heroPowere', heroPowere)
// console.log('coinse', coinse)
// console.log('experience', experience)
// console.log('medkitse', medkitse)
// console.log('inventorye', inventorye)
// console.log('visitedLocationse', visitedLocationse)

// let route = ['Лес', 'Мост', 'Пещера', 'Башня'];

//  for (let i = 0; i < route.length; i++) {
//     console.log('Шлёпа идет в', route[i]);
// }   

// let random = Math.floor(Math.random() * 4) + 1;

// function getRandomEvent() {
//   if (random === 1) {
//     heroHealth = heroHealth + 4;
// } else if (random === 2) {
//     coinse = coinse + 6;
// } else if (random === 3) {
//     heroHealth = heroHealth - 5
// } else {
//     inventorye.push['ржавый ключ']
// }
// }



// if (inventorye.includes("ржавый ключ ключ")) {
//     console.log("ключ есть значит бесплатно говорит шлепа");
// } else if (coinse >= 7) {
//     coinse -= 7;
//     console.log("на семь монет говорит шлепа");
// } else {
//     heroHealth -= 4;
//     console.log("балииин -4 хп говорит шлепа");
// }

// console.log("хп шлёпы:", heroHealth);
// console.log("монеты:", coinse);






// function getDamage(power) {
//     return Math.floor(Math.random() * power) + 1;
// }

// let monsterName = "Каменный Ёж";
// let monsterHealth = 18;
// let monsterPower = 5;
// let round = 1;

// console.log("=== Бой с " + monsterName + " ===");

// while (heroHealth > 0 && monsterHealth > 0) {
//     console.log("=== Раунд " + round + " ===");

//     let heroDamage = getDamage(heroPowere);
//     monsterHealth -= heroDamage;

//     console.log("Шлёпа нанёс " + heroDamage + " урона");
//     console.log("У монстра осталось HP:", monsterHealth);

//     if (monsterHealth <= 0) {
//         console.log("Монстр побеждён!");
//     } else {
//         let monsterDamage = getDamage(monsterPower);
//         heroHealth -= monsterDamage;

//         console.log("Каменный Ёж нанёс " + monsterDamage + " урона");
//         console.log("У Шлёпы осталось HP:", heroHealth);
//     }

//     round++;
// }

// if (heroHealth > 0) {
//     experience += 5;
//     inventorye.push("лунный осколок");

//     console.log("Шлёпа победил!");
//     console.log("Награда: +5 опыта");
//     console.log("Награда: лунный осколок");
// } else {
//     console.log("Шлёпа проиграл. Награды нет.");
// }






// for (let chest = 1; chest <= 3; chest++) {

//     let reward = Math.floor(Math.random() * 4) + 1;

//     console.log("Сундук " + chest);

//     if (reward === 1) {
//         coins += 4;
//         console.log("Выпало: +4 монеты");

//     } else if (reward === 2) {
//         medkits += 1;
//         console.log("Выпало: +1 аптечка");

//     } else if (reward === 3) {
//         inventory.push("лунный осколок");
//         console.log("Выпало: +1 лунный осколок");

//     } else {
//         console.log("Выпало: пусто");
//     }
// }


// function countItem(inventory, itemName) {
//     let count = 0;

//     for (let i = 0; i < inventory.length; i++) {
//         if (inventory[i] === itemName) {
//             count++;
//         }
//     }

//     return count;
// }

// let shards = countItem(inventorye, "лунный осколок");
// let keys = countItem(inventorye, "ключ");
// let maps = countItem(inventorye, "карта");
// let bananas = countItem(inventorye, "банан");

// console.log("Лунных осколков:", shards);
// console.log("Ключей:", keys);
// console.log("Карт:", maps);
// console.log("Бананов:", bananas);

// if (shards >= 2 || (experience >= 5 && coinse >= 10)) {

//     inventorye.push("лунный сыр");

//     console.log("Башня открыта! Шлёпа нашёл Лунный Сыр!");

// } else {

//     console.log("Башня пока не открылась. Нужно попробовать ещё раз.");
// }

// console.log("Здоровье:", heroHealth);
// console.log("Монеты:", coinse);
// console.log("Опыт:", experience);
// console.log("Аптечки:", medkitse);
// console.log("Осколки:", shards);
// console.log("Инвентарь:", inventorye);

let heroName = "Шлёпа";
let health = 20;
let coins = 5;
let inventory = ["карта"];
let something = Math.floor(Math.random() * 4) + 1;

switch (something) {
    case 1:
       coins = coins + 5;
       console.log("Шлёпа нашёл 5 монет");
       break;
    case 2:
       health = health - 4;
       console.log("Шлёпа попал в ловушку и потерял 4 HP");
       break;
    case 3:
       inventory.push("золотой ключ");
       console.log('Шлёпа нашёл "золотой ключ"');    
       break;
    default:
       health = health + 5;
    
       if (health > 20) {
           health = 20;
       }
     
       console.log("Шлёпа нашёл аптечку и восстановил 5 HP");   
       break;
}

// if (something === 1) {
//     coins = coins + 5;
//     console.log("Шлёпа нашёл 5 монет");

// } else if (something === 2) {
//     health = health - 4;
//     console.log("Шлёпа попал в ловушку и потерял 4 HP");

// } else if (something === 3) {
//     inventory.push("золотой ключ");
//     console.log('Шлёпа нашёл "золотой ключ"');

// } else {
//     health = health + 5;

//     if (health > 20) {
//         health = 20;
//     }

//     console.log("Шлёпа нашёл аптечку и восстановил 5 HP");
// }

console.log("Максимальное здоровье Шлёпы — 20");

if (inventory.includes("золотой ключ")) {
    console.log("Шлёпа открыл сундук ключом");
    inventory.push("алмаз");

} else if (coins >= 5) {
    coins = coins - 5;
    inventory.push("алмаз");
    console.log("Шлёпа заплатил 5 монет и открыл сундук");

} else {
    console.log("Шлёпа не смог открыть сундук..................,.........,.,./,.");
}

console.log("Монеты:", coins);
console.log("Инвентарь:", inventory);

console.log('странные грибы')

for (let i = 1; i <= 3; i++) {
    let mushroom = Math.floor(Math.random() * 2) + 1;

    if (mushroom === 1) {
        health = health + 2;

        if (health > 20) {
            health = 20;
        }

        console.log("Гриб " + i + ": хороший +2 HP");
    } else {
        health = health - 3;

        console.log("Гриб " + i + ": плохой -3 HP");
    }
}

console.log("Здоровье:", health);
console.log("Монеты:", coins);
console.log("Инвентарь:", inventory);

if (inventory.includes("алмаз")) {
    console.log(" Шлёпа возвращается домой с алмазом");
} else {
    console.log("Шлёпа возвращается домой без алмаза");
}

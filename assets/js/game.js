// test if script is connect to the html
// window.alert("This is an alert! JavaScript is runing!")

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//capture input data
var playerName = window.prompt("What's your Robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//log multiple values in the console
// console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// console.log(enemyNames);
var enemyHealth = 50;
var enemyAttack = 12;

//* function named fight

/* Function declaration
function fight() {
    window.alert("The fight has begun!");
};
*/



// function Expression
var fight = function (enemyName){
    while(enemyHealth > 0 && playerHealth > 0){
        var promptToFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // promptToFight = promptToFight.toUpperCase;
        // console.log(promptToFight);
        if (promptToFight === "SKIP" || promptToFight === "skip"){
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip){                
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // substract money if player skips //
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;             
            }
        }
            /*else {
                fight();
            }
        }else if(promptToFight === "FIGHT" || promptToFight === "fight"){ */

            // window.alert("The fight has begun!");
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            /* NO var keyword here. Why? Because we're referencing the variable enemyHealth that we created outside the function. */
        enemyHealth = enemyHealth - playerAttack;
            // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + "! " + enemyName + " now has " + enemyHealth + " health remaining.");  

        if(enemyHealth <= 0){
            window.alert(enemyName + " has died!");
            //award player for winning
            playerMoney = playerMoney + 20;
            //leave while() loop since enemy is dead
            break;
        }else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log (enemyName + " attacked " + playerName + "! " + playerName + " now has " + playerHealth + " health remaining.");
        
        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            //leave while() loop if player is dead
            // break;
        }else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }   
        
        // }else {
        //     window.alert("You need to choose a valid option. Try again!");
        // }
    }
}

// fight();
for (var i = 0; i < enemyNames.length; i++) {
    if(playerHealth > 0){
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedName = enemyNames[i];
        // reset enemyHealth before starting new fight
        enemyHealth = 50;
        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;
        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight (pickedName);
    }else{
        window.alert("You have lost your robot in battle! GAME OVER!");
        break;
    }   
}

for (var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
    // console.log(enemyNames[i]);
    // console.log(i);
    // console.log(enemyNames[i] + " is at " + i + " index");
}




// test if script is connect to the html
// window.alert("This is an alert! JavaScript is runing!")


//capture input data
var playerName = window.prompt("What's your Robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//log multiple values in the console
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//* function named fight

/* Function declaration
function fight() {
    window.alert("The fight has begun!");
};
*/

// function Expression
var fight = function (){
    var promptToFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // promptToFight = promptToFight.toUpperCase;
    console.log(promptToFight);
    if(promptToFight === "FIGHT" || promptToFight === "fight"){
        window.alert("The fight has begun!");
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        /* NO var keyword here. Why? Because we're referencing the variable enemyHealth that we created outside the function. */
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + "! " + enemyName + " now has " + enemyHealth + " health remaining.");  

        if(enemyHealth <= 0){
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log (enemyName + " attacked " + playerName + "! " + playerName + " now has " + playerHealth + " health remaining.");
        
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }else if (promptToFight === "SKIP" || promptToFight === "skip"){
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip){
            // substract money if player skips //
            playerMoney = playerMoney - 2;
            window.alert(playerName + " has chosen to skip the fight!");
            console.log(playerName, playerAttack, playerHealth, playerMoney);
        }else {
            fight();
        }
    }else {
        window.alert("You need to choose a valid option. Try again!");
    }
}

fight();


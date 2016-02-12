var X_Step =50;
var Y_Step=50;

// Enemies our player must avoid

var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x=0;
    this.y=20;
    this.width = 50;
    this.height = 85;
    this.speed=Math.randon()*3;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x =
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player= function(){
    this.sprite = 'images/char-boy.png';
    this.x=200;
    this.y=400;
    
};
Player.prototype.update=funtion(dt){
    if (player.y<20){
        player.reset();
    }
     console.log('player x = ', this.x, 'player y = ', this.y);
};
Player.protoype.handleInput=funtion(e){
    this.ctlKey=e;
    
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies=[];
function placeEnemy(){
var enemy =new Enemy();
enemy.x=X_step*2;
enemy.y=Y_step*2;
allEnemies.push(enemy);
}
var player =new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

var X_Step =50;
var Y_Step=50;

// Enemies our player must avoid

Object.prototype.Reset = function(){
    this.x=100;
    this.y=100;
}

var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x=0;
    this.y=20;
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
    this.x =(100*dt*this.speed)
        if(this.x>520){
            this.Reset();
        }
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
    //if left key is pressed and player is not on edge of map, pressed decrement x
    if(this.ctlKey === 'left' && this.x > 0){ 
        this.x = this.x - 50;
    //if right key is pressed and player is not on edge of map increment x 
    }else if(this.ctlKey === 'right' && this.x != 400){
        this.x = this.x + 50;
    //if up key is pressed increment y 
    }else if(this.ctlKey === 'up'){
        this.y = this.y - 50;
    //if down key is pressed and player is not on edge of map decrement y 
    }else if (this.ctlKey === 'down' && this.y != 400){
        this.y = this.y + 50;
    }
    this.ctlKey = null;
    
    //If on water, reset
    if(this.y < 25){
        this.reset();
    }
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

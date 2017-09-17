var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var rectleft = new Rectangle(15, 15, 50, 50);
var rectmiddle = new Rectangle(80, 15, 50, 50);
rectmiddle.speedX = -1;
var rectright = new Rectangle(150, 15, 50, 50);

var movement = -1;

setInterval(function()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	rectleft.Draw(ctx, 'red');
	rectmiddle.Draw(ctx, 'blue');
	rectright.Draw(ctx, 'red');


	if (rectmiddle.Intersects(rectleft) || rectmiddle.Intersects(rectright)) 
	{
		rectmiddle.speedX *= -1;
		rectright.speedX = 0;
	}

	rectmiddle.x += rectmiddle.speedX;
	rectright.x += rectright.speedX;

}, 33);

function keydown(event) 
{
	if (event.keyCode == 39 || event.keyCode == 65)
	{
		rectright.speedX = 2;
	}
	else if (event.keyCode == 37 || event.keyCode == 68)
	{
		rectright.speedX = -2;
	}
}

function keyup(event) 
{
	rectright.speedX = 0;
}

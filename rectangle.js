Rectangle = function(x, y, width, height)
{
	if (x == null || y == null || width == null || height == null)
	{
		alert("You did not pass all the required variables. (z,y,w,h)");

		var errorMsg = "The following was not provided:";
		if (x == null)
			errorMsg += " 'x' ";
		if (y == null)
			errorMsg += " 'y' ";
		if (width == null)
			errorMsg += " 'width' ";
		if (height == null)
			errorMsg += " 'height' ";

		throw new Error(errorMsg);
	}

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speedX = 0;

	this.Intersects = function(shape)
	{
		if (this.Contains(shape.x, shape.y) || this.Contains(shape.x + shape.width, shape.y) || this.Contains(shape.x, shape.y + shape.height) || this.Contains(shape.x + shape.width, shape.y + shape.height))
		{
			return true;
		}
		else if (shape.Contains(this.x, this.y) || shape.Contains(this.x + this.width, this.y) || shape.Contains(this.x, this.y + this.height) || shape.Contains(this.x + this.width, this.y + this.height))
		{
			return true;
		}
		else
		{
			return false;
		}
	};

	this.Contains = function(x, y)
	{
		if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height)
		{
			return true;
		}
		else
			return false;
	};

	this.Draw = function(ctx, color) 
	{
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	};
};
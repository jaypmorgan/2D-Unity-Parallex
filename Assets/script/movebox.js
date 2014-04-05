#pragma strict

var speed : int = 7;
var player : Transform;

function Start () {
	Screen.lockCursor = true;
}

function Update () {
	if(Input.GetAxis("Horizontal") < 0) { 
		if(player.localPosition.x >= -10) { 
			transform.Translate(Vector3(1 * speed * Time.deltaTime, 0, 0));
		} 
	}
	
	if(Input.GetAxis("Horizontal") > 0) { 
		if(player.localPosition.x <= 75) { 
			transform.Translate(Vector3(-1 * speed * Time.deltaTime, 0, 0));
		} 
	}
}

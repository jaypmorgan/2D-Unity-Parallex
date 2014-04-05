#pragma strict

var speed : int = 10;
var player : Transform;

function Start () {

}

function Update () {
	if(Input.GetAxis("Mouse X") < 0) { 
		if(player.localPosition.y >= -25) { 
			transform.Translate(Vector3(0, -1 * speed * Time.deltaTime, 0));
		} 
	}
	
	if(Input.GetAxis("Mouse X") > 0) { 
		if(player.localPosition.y <= 0) { 
			transform.Translate(Vector3(0, 1 * speed * Time.deltaTime, 0));
		} 
	}
}
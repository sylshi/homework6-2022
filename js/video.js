var video = document.querySelector("#player1")

// Page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

// Play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

// Pause 
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow down 
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.95;
	console.log("Speed is", video.playbackRate);
});

// Speed up 
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate /= 0.95;
	console.log("Speed is", video.playbackRate);
});

// Skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead 15 seconds");
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0; }
	console.log("Current Video Time is", video.currentTime);
});

// Mute 
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute the Video");
	if (video.muted == false) {
		video.muted = true;
		console.log("Muted the Video");
		this.innerHTML = "Unmute"; }
	else {
		video.muted = false;
		console.log("Unmuted the Video");
		this.innerHTML = "Mute"; };
})

// volume slider
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing the Volume");
	console.log(this.value)
	video.volume = this.value/100
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
})

// Use oldSchool class elements
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Add oldSchool Style");
	video.classList.add("oldSchool");
})

// Remove oldSchool class
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove oldSchool Style");
	video.classList.remove("oldSchool");
})
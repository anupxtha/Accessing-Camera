const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// // To Access Camera in Browser // Comment Button Html attribute and delete hidden from video
async function selectMediaStream(){
  try{
    const mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
    
    videoElement.srcObject =mediaStream;
    videoElement.onloadedmetadata = () =>{
      
      videoElement.play();
    }
  }
  catch(error){
    console.log(error);
  }
}

// button event
button.addEventListener('click', async () =>{
  // disable Button at first when trigger
  button.disabled = true;

  // start Picture in Picture Method
  await videoElement.requestPictureInPicture();

  // Reset Button
  button.disabled = false;
})


// Onloaded
selectMediaStream();
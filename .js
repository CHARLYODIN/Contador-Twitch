counter = "Contador"

window.addEventListener("onEventReceived", function(obj){
  const listener = obj.detail.listener;
  const data = obj.detail.event;
  
  if (listener === "bot:counter" && data.counter === counter){
   document.getElementById("Contador").innerHTML=data.value;
  }
});
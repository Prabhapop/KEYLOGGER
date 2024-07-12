const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startbtn = document.getElementById("start-btn");
const stopbtn = document.getElementById("stop-btn");

startbtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  startbtn.disabled = true;
  stopbtn.disabled = false;
});

stopbtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyup", handleUp);
  logDiv.textContent = "";
  stateDiv.textContent = "";
  startbtn.disabled = false;
  stopbtn.disabled = true;
});

function handleDown(e) {
  logDiv.textContent = `Key ${e.key} presses down`;
  stateDiv.textContent = "Key is Down";
}

function handleUp(e) {
  logDiv.textContent = `Key ${e.key} presses Up`;
  stateDiv.textContent = " key is Up";
}

function changeStyle() {
    const targetText = document.getElementById("targetText");
    const fontSize = document.getElementById("fontSize").value;
    const fontColor = document.getElementById("fontColor").value;
    const fontFamily = document.getElementById("fontFamily").value;
  
    targetText.style.fontSize = fontSize + "px";
    targetText.style.color = fontColor;
    targetText.style.fontFamily = fontFamily;
}
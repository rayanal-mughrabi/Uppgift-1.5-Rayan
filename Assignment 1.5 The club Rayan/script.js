document.getElementById("enterBtn").addEventListener("click",function () {
    let age = document.getElementById("ageInput").valueAsNumber;
    let vip = document.getElementById("vipCheckbox").checked;

console.log("Age:", age);
console.log("VIP:", vip)

// let vip=true
// let age=17
if (vip==true) {
    alert("Welcome in, my best VIP customer:)")
   console.log("VIP override, Access granted")
    return;  }
if (age >= 18) {
    console.log("Access Granted")
    alert("Access Granted")
} else {
    console.log("Access Denied")
    alert("Access Denied") }
});
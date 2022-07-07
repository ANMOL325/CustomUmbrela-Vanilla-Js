const YellowButton = document.getElementById("Yellow");
const PinkButton = document.getElementById("Pink");
const BlueButton = document.getElementById("Blue");
const Body = document.getElementsByTagName("body");
const ImgDiv = document.getElementsByClassName("ImgDiv");
const Logo = document.getElementsByClassName("Logo");

const TypeFlie = document.getElementsByTagName("input");



let UmbrellaColor = window.getComputedStyle(ImgDiv[0]).backgroundImage;

console.log(ImgDiv[0].style);
console.log(Logo[0]);

console.log(UmbrellaColor);

console.log(YellowButton);
console.log(PinkButton);
console.log(BlueButton);

YellowButton.addEventListener("click", (e) => {
    UmbrellaColor = `url("./PICTURE/Yellow umbrella.png")` ;
    // window.getComputedStyle(ImgDiv[0]).backgroundImage = UmbrellaColor;
    console.log(ImgDiv[0].style.backgroundImage = UmbrellaColor)
    // console.log(UmbrellaColor);
    Body[0].style.backgroundColor = "rgb(255, 255, 220)";

}, false);

PinkButton.addEventListener("click", (e) => {
    UmbrellaColor = `url("./PICTURE/Pink umbrella.png")`;
    ImgDiv[0].style.backgroundImage = UmbrellaColor;
    Body[0].style.backgroundColor = "rgb(255, 235, 245)";
}, false);

BlueButton.addEventListener("click", (e) => {
    UmbrellaColor = `url("./PICTURE/Blue umbrella.png")`;
    ImgDiv[0].style.backgroundImage = UmbrellaColor;
    Body[0].style.backgroundColor = "aqua"
}, false);

TypeFlie[0].addEventListener("change", (e) => {
    console.log("Image Handler")
        // console.log(e.target.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        console.log(reader);
        reader.onload = () => {
            if(reader.readyState === 2){
                console.log("Inside Reader")
                console.log(reader.result);
                Logo[0].style.backgroundImage = `url(${reader.result})`
                // setImage(reader.result)
                // console.log(Image);
            }
            
        }
        // console.log(Image);
})









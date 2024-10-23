// let a = 100;
// var --> whole fxn, let --> within current block, const --> let but no change

// for (let a in [1.1, 4, true, null]) {
//     console.log(a)
// }

// === tests if value is equal plus type while == can coerce types so true==1 but true!==1
// loops+iterations

// function name(args) { stuff r}

// objects --> { stuff: this { things}, "more stuff": this {} }
// person.name gets name same as person["name"]
// the formatting above is basically json pandas can read json etc 

// DOM --> tree data structure with html elements
// querySelector(___) looks for css selector like .red-square from class or #__ for id
    // takes first matching item
// can also get by class, id, tag names then add an index for which like getbytag("P")[1]
    // for 2nd p tag thing
// input tag in html makes a thing to type into then can give event listener w/fxn
// keyup = global vs (element).onclick .onchange etc specific to some input/html element
    // also specific to element if .addEvListener on that element same as onclick=Fxn in html

let mlInterest = document.getElementById("mlinterest")

mlInterest.addEventListener("click", function() {
    let image = document.createElement("img")
    image.src = "./mlimage.png"
    image.width = 200
    image.height = 150
    mlInterest.appendChild(image)
    let interests = document.getElementsByClassName("interestspage")
    interests.height += 150
})

let educAnim = document.getElementById("education-anim-button")
let educPics = ["./7DF5041B-51B9-42FA-9D6C-1F8866C40D2E_1_201_a-900x674.jpeg",
    "./CA_Berkeley_UniversityOfCaliforniaAtBerkeley_byCharlieNguyen-Flickr_2008_001_Sig.jpg"
]
let educInfo = ["Dublin High School", "UC Berkeley"]
let count = 0

educAnim.addEventListener("click", function() {
    if (count < educPics.length) {
        let info = document.createElement("p")
        info.textContent = educInfo[count]
        info.style = "font-size: 20px";
        educAnim.appendChild(info)
        let image = document.createElement("img")
        image.src = educPics[count]
        image.width = 600
        image.height = 400
        educAnim.appendChild(image)
        count++
    } 
})
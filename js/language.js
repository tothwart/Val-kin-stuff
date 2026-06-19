const languages = {

est:{
home:"Avaleht",
showcase:"Galerii",
contacts:"Kontakt",
heroTitle:"Eritellimusel RGB klaaskuubik lauad Tallinnas",
heroText:"Käsitööna valmistatud valgustatud mööbel ettevõtetele.",
quoteBtn:"Küsi pakkumist",
feature1:"Eritellimus",
feature1Text:"Valmistatud vastavalt teie soovidele.",
feature2:"RGB Valgustus",
feature2Text:"Täielikult kohandatav valguslahendus.",
feature3:"Soodne Hind",
feature3Text:"Premium kvaliteet mõistliku hinnaga.",
aboutTitle:"Moodne valgustatud mööbel ettevõtetele",
aboutText:"Loome unikaalseid RGB klaaslaudu Tallinnas.",
showcaseTitle:"Varasemad Tööd",
contactTitle:"Võta Ühendust"
},

ru:{
home:"Главная",
showcase:"Наши работы",
contacts:"Контакты",
heroTitle:"RGB стеклянные кубические столы на заказ",
heroText:"Современная мебель с подсветкой для бизнеса.",
quoteBtn:"Получить предложение",
feature1:"Индивидуальный дизайн",
feature2:"RGB Подсветка",
feature3:"Доступная цена",
aboutTitle:"Современная мебель для бизнеса",
aboutText:"Изготавливаем уникальные RGB столы в Таллине.",
showcaseTitle:"Наши проекты",
contactTitle:"Связаться с нами"
},

en:{
home:"Home",
showcase:"Showcase",
contacts:"Contacts",
heroTitle:"Custom RGB Glass Cube Tables in Tallinn",
heroText:"Handcrafted illuminated furniture for modern businesses.",
quoteBtn:"Get a Quote",
feature1:"Custom Design",
feature2:"RGB Lighting",
feature3:"Affordable Pricing",
aboutTitle:"Premium Furniture for Businesses",
aboutText:"Unique RGB glass tables made in Tallinn.",
showcaseTitle:"Previous Work",
contactTitle:"Contact Us"
}

};

let current="est";

document.getElementById("langBtn").addEventListener("click",()=>{

if(current==="est"){
current="ru";
document.getElementById("langBtn").innerText="RU";
}
else if(current==="ru"){
current="en";
document.getElementById("langBtn").innerText="EN";
}
else{
current="est";
document.getElementById("langBtn").innerText="EST";
}

document.querySelectorAll("[data-key]").forEach(el=>{
const key=el.dataset.key;
if(languages[current][key]){
el.textContent=languages[current][key];
}
});

});

const dropnav = document.getElementById("dropnav");
dropnav.addEventListener("click", () => {
  const nav = document.getElementById("nav");
  nav.classList.toggle("activenav");
  dropnav.classList.toggle("transform-bars");
});
var ContentTitle = document.getElementById("title");
var ContentText = document.getElementById("text");
var ContentImg = document.getElementById("img-content");
let itemone = () => {
  ContentTitle.innerText ="تپسی کلاسیک";
  ContentText.innerText =
    "با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.";
  ContentImg.src = "../images/illus-classic.webp";
};
let itemtwo = () => {
  ContentTitle.innerText = "تپسی تلفنی";
  ContentText.innerText =
    "سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.";
  ContentImg.src = "../images/illus-tel.webp";
};

let itemthree = ()=>{
  ContentTitle.innerText="تپسی لاین";
  ContentText.innerText="تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود.";
  ContentImg.src="../images/illus-line.webp";
}
let itemfour = ()=>{
  ContentTitle.innerText="موتوپیک";
  ContentText.innerText="با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید.";
  ContentImg.src="../images/illus-motopeyk.webp";
}
let itemfive = ()=>{
  ContentTitle.innerText="اتوپیک";
  ContentText.innerText="اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.";
  ContentImg.src="../images/illus-autopeyk.webp";
}
let = itemsex = ()=>{
  ContentTitle.innerText="تپسی پلاس";
  ContentText.innerText="در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.";
  ContentImg.src="../images/illus-plus.webp";
}
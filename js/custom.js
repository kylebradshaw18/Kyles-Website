let headerIcons = [new icon("desktop","Full Stack Web Developer"),new icon("database","Database Desginer"),new icon("code","Software Engineer")];
let bootstrapColors = [null,"success","info","warning","danger"];
let languages = [
    new language("HTML5", 99),
    new language("Javascript", 90),
    new language("Typescript", 85),
    new language("JQuery", 80),
    new language("SQL", 90),
    new language("Java", 80),
    new language("C#", 99),
    new language("PHP", 80),
    new language("Swift", 20),
    new language("Haskell", 25),
    new language("Visual Basic", 70),
    new language("Python", 50),
    new language("R", 40),
    new language("SCSS", 80)];
let frameworks = [
    new language("Angular JS", 80),
    new language("Classic ASP", 70),
    new language("ASP.NET Web forms", 90),
    new language("Entity Framework", 80),
    new language("Dapper", 80),
    new language("ASP.NET CORE", 80),
    new language("ASP.NET MVC", 90),
    new language("ReactJs", 40),
    new language("Angular 2", 75),
    new language("Laravel", 25)];
let certificates = [
  new certificate("DAT210x: Programming with Python for Data Science", "https://courses.edx.org/certificates/d72c63decab84f2086133a3ef6fa9297"),
  new certificate("DEV218x: Advanced CSS Concepts", "https://courses.edx.org/certificates/7768968d7c40422492be77b204fc4e31"),
  new certificate("DEV273x: Introduction to TypeScript 2","https://courses.edx.org/certificates/6f13094fe578422cb162df9bf6de96ce"),
  new certificate("DAT203.1x: Data Science Essentials","https://courses.edx.org/certificates/647c851f50664505927887b8bf26075d"),
  new certificate("DAT203.2x: Principles of Machine Learning","https://courses.edx.org/certificates/28dd835085594fa78400193155b42de5"),
  new certificate("DAT208x: Introduction to Python for Data Science","https://courses.edx.org/certificates/0df7dc821b9a404e8b4e6020af98afb8"),
  new certificate("AZURE207x: Databases in Azure","https://courses.edx.org/certificates/dfe7bd6fc4f0417ebb2042093d4765be"),
  new certificate("DAT101x: Introduction to Data Science","https://courses.edx.org/certificates/79652a17c9f4426e9d150763887aca93"),
  new certificate("DAT201x: Querying Data with Transact-SQL","https://courses.edx.org/certificates/ea4a300b87d74f7a850e34a19a0d81d4"),
  new certificate("DAT220x: Delivering a Data Warehouse in the Cloud","https://courses.edx.org/certificates/e4d4b93e3eb14d97a27b5b7685df2379"),
  new certificate("DAT221x: Introduction to NoSQL Data Solutions","https://courses.edx.org/certificates/2fa7f175036f40f8a0086362dc653f1d"),
  new certificate("DAT222x: Essential Statistics for Data Analysis using Excel","https://courses.edx.org/certificates/234f191e0ecf468bb77ddd5b4a5eb37e"),
  new certificate("DAT223.1x: Processing Big Data with Azure Data Lake Analytics","https://courses.edx.org/certificates/3738fb11b3794f28bdab759f6461da19"),
  new certificate("DAT223.2x: Processing Real-Time Data Streams in Azure","https://courses.edx.org/certificates/891c813b2f3e41e197697e6fe3e2361a"),
  new certificate("DAT223.3x: Orchestrating Big Data with Azure Data Factory","https://courses.edx.org/certificates/d21766b63cba466a948619eb5c044749"),
  new certificate("DAT228x: Developing Big Data Solutions with Azure Machine Learning","https://courses.edx.org/certificates/136cc2b1101a4ed293c19784948ed3de"),
  new certificate("DAT229x: Microsoft Professional Orientation : Big Data","https://courses.edx.org/certificates/7185c8a6bd994d48aa5a0fd0dd49a24a"),
  new certificate("DAT230x: Microsoft Professional Capstone : Big Data","https://courses.edx.org/certificates/bc53d0e8133244d089609c80fb489457"),
  new certificate("DEV211.1x: Introduction to HTML and JavaScript","https://courses.edx.org/certificates/f8050e146c6a41a6b500cf2964813f80"),
  new certificate("Microsoft Profession Program - Big Data","https://academy.microsoft.com/en-us/certificates/982ef251-ecd1-46a8-85ae-1d3f4cbd80c1/"),
  new certificate("AZURE215x: Microsoft Professional Orientation : Cloud Administration","https://courses.edx.org/certificates/a5dfa83fda374b1d8cef29aaa69530e0"),
  new certificate("CSS.0x: CSS Basics","https://courses.edx.org/certificates/8b4ae9286a954c769df1004aca4a21d3"),
  new certificate("DAT206x: Analyzing and Visualizing Data with Excel","https://courses.edx.org/certificates/bf3ad5a46e894f4d8e1b56091ffa5855"),
  new certificate("DAT211x: Developing Intelligent Apps and Bots","https://courses.edx.org/certificates/c3feecc381734784bf340a7baa5fb136"),
  new certificate("DEV237x: Microsoft Professional Program : Front End Web Development","https://courses.edx.org/certificates/30aca75413a449d3bbc8b99690a086e5"),
  new certificate("PH125.1x: Data Science: R Basics","https://courses.edx.org/certificates/917e67e0fb6b4958b0ba6643b106be6d"),
  new certificate("DEV203x: Introduction to Bootstrap - A Tutorial","https://courses.edx.org/certificates/237296096de244ae8ae791f98d72bead"),
  new certificate("DEV208x: Introduction to jQuery","https://courses.edx.org/certificates/09b2af922eb44c609dbe1e84c4fdc837"),
  new certificate("DEV220x: AngularJS: Framework Fundamentals","https://courses.edx.org/certificates/f6eb597d56c4439999f5cf14fa7914e7"),
  new certificate("DEV221x: AngularJS: Advanced Framework Techniques","https://courses.edx.org/certificates/dc8648b75b9249e28f5611fae154fb14"),
  new certificate("DAT263x: Introduction to Artificial Intelligence (AI)","https://courses.edx.org/certificates/afe640024bfd48af84b2fa5deb5e56f3")
];
let footerIcons = [
    new icon("envelope","Email","mailto:kylebradshaw18@gmail.com?subject=Website Contact"),
    new icon("phone","Phone","tel:+18452402066"),
    new icon("file-pdf-o","Resume","./Resume.pdf"),
    new icon("linkedin","LinkedIn","https://www.linkedin.com/in/kyle-bradshaw"),
    new icon("github","GitHub","https://github.com/kylebradshaw18"),
    new icon("bitbucket","BitBucket","https://bitbucket.org/kyle_bradshaw1"),
    new icon("facebook","Facebook","https://www.facebook.com/kylebradshaw18"),
    new icon("twitter","Twitter","https://twitter.com/kylebradshaw18"),
    new icon("instagram","Instagram","https://www.instagram.com/kylebradshaw18/?hl=en"),
    new icon("youtube","Youtube","https://www.youtube.com/user/18kylebradshaw")];
$( document ).ready(function() {
  $('#loader').show();
  buildHeaderIcons(headerIcons);
  buildPortfolioInner("Languages", languages);
  buildPortfolioInner("Frameworks", frameworks);
  buildPortfolioInnerCert("Certificates", certificates);
  buildFooterIcons(footerIcons);
  $('#loader').hide();
});
function buildHeaderIcons(items){
  let html = [];
  for(let item of items)
    html.push('<div class="col-sm-4"><i class="fa fa-'+item.icon+'"></i><h3>'+item.text+'</h3></div>');
  $('#HeaderIcons').html(html.join(''));
}
function buildPortfolioInner(name, types){
  let html = [], colorsIndex = 0;
  shuffle(bootstrapColors);
  sortTypes(types);
  for(let index = 0; index < types.length; index++){
    if (index == 0) html.push('<h3 class="centered mb"><b>'+name+'</b></h3>');
    if(index % 2 == 0) html.push('<div class="row">');
    html.push('<div class="col-md-5"><div class="centered"><div class="row"><h6><b>'+types[index].name+'</b></h6>');
    let progressBarColor = ( bootstrapColors[colorsIndex] != null )? "progress-bar-"+bootstrapColors[colorsIndex]:"";
    html.push('<div class="progress"><div class="progress-bar '+progressBarColor+' progress-bar-striped active" role="progressbar" aria-valuenow="'+types[index].percent+'" aria-valuemin="0" aria-valuemax="100" style="width:'+types[index].percent+'%">'+types[index].percent+'%</div></div>');
    html.push('</div></div></div>');
    if(index % 2 == 0) html.push('<div class="col-md-2"></div>');
    if(index % 2 != 0 || index == types.length - 1) html.push('</div>');
    colorsIndex = (colorsIndex < bootstrapColors.length)?colorsIndex + 1:0;
  }
  $('#portfolioInner'+name).html(html.join(''));
}
function buildPortfolioInnerCert(name, types){
  let html = [];
  let MultNumber = ($('#portfolioSort').val() == "NameDesc")?1:-1;
  types.sort(function(a, b) {
    if (a.name < b.name)return 1 * MultNumber;
    if (a.name > b.name)return -1 * MultNumber;
    return 0;
  });
  for(let index = 0; index < types.length; index++){
    if (index == 0) html.push('<h3 class="centered mb"><b>'+name+'</b></h3>');
    if(index % 2 == 0) html.push('<div class="row">');
    html.push('<div class="col-md-5"><div class="centered"><div class="row"><a href="'+types[index].url+'" target="_blank"><h5><b>'+types[index].name+'</b></h5></a>');
    html.push('</div></div></div>');
    if(index % 2 == 0) html.push('<div class="col-md-2"></div>');
    if(index % 2 != 0 || index == types.length - 1) html.push('</div>');
  }
  $('#portfolioInner'+name).html(html.join(''));
}
function buildFooterIcons(items){
  let html = [];
  for(let item of items)
    html.push('<a href="'+item.link+'" target="_blank" data-toggle="tooltip" title="'+item.text+'"><i class="fa fa-'+item.icon+'"></i></a>');
  $('#FooterIcons').html(html.join(''));
}
function sortTypes(types){
  types.sort(function(a, b) {
    switch($('#portfolioSort').val()){
      case "PercentAsc":
        return a.percent - b.percent;
      case "NameAsc":
          if (a.name < b.name)return -1;
          if (a.name > b.name)return 1;
          return 0;
      case "NameDesc":
          if (a.name < b.name)return 1;
          if (a.name > b.name)return -1;
          return 0;
      default:return b.percent - a.percent;
    }
  });
}
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}
//Constructors
class language {
  constructor(name, percent) {
    this.name = name;
    this.percent = percent;
  }
}
class icon {
  constructor(icon, text, link) {
    this.icon = icon;
    this.text = text;
    this.link = (typeof link == undefined || typeof link == null) ? null : link;
  }
}
class certificate {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

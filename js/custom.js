let headerIcons = [new icon("desktop","Full Stack Web Developer"),new icon("database","Database Desginer"),new icon("code","Software Developer")];
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
    if (index == 0) html.push('<h4 class="centered mb"><b>'+name+'</b></h4>');
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
function language(name, percent){
  this.name = name;
  this.percent = percent;
}
function icon(icon, text, link){
  this.icon = icon;
  this.text = text;
  this.link = (typeof link == undefined || typeof link == null) ? null : link;
}
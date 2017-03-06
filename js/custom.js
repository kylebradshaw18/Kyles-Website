let headerIcons = [{icon: "desktop",text:"Full Stack Web Developer"},{icon: "database",text:"Database Developer"},{icon: "database",text:"Database Designer"}];
let bootstrapColors = [null,"success","info","warning","danger"];
let languages = [
    {name:"HTML5",percent:95},
    {name:"Javascript",percent:90},
    {name:"Typescript",percent:85},
    {name:"JQuery",percent:80},
    {name:"SQL",percent:85},
    {name:"Java",percent:80},
    {name:"C#",percent:80},
    {name:"PHP",percent:80},
    {name:"Swift",percent:20},
    {name:"Haskell",percent:25},
    {name:"Visual Basic",percent:70},
    {name:"CSS",percent:80}];
let frameworks = [
    {name:"Angular JS",percent:80},
    {name:"Classic ASP",percent:70},
    {name:"ASP.NET",percent:90},
    {name:"ReactJs",percent:40},
    {name:"Angular 2",percent:75},
    {name:"Laravel",percent:25}];
let footerIcons = [
    { icon: "envelope",  text:"Email",     link:"mailto:kylebradshaw18@gmail.com?subject=Website Contact"},
    { icon: "phone",     text:"Phone",     link:"tel:+18452402066"},
    { icon: "file-pdf-o",text:"Resume",    link:"./Resume.pdf"},
    { icon: "linkedin",  text:"LinkedIn",  link:"https://www.linkedin.com/in/kyle-bradshaw-012095135?trk=nav_responsive_tab_profile"},
    { icon: "github",    text:"GitHub",    link:"https://github.com/kylebradshaw18"},
    { icon: "bitbucket", text:"BitBucket", link:"https://bitbucket.org/kyle_bradshaw1"},
    { icon: "facebook",  text:"Facebook",  link:"https://www.facebook.com/kylebradshaw18"},
    { icon: "twitter",   text:"Twitter",   link:"https://twitter.com/kylebradshaw18"},
    { icon: "instagram", text:"Instagram", link:"https://www.instagram.com/kylebradshaw18/?hl=en"},
    { icon: "youtube",   text:"Youtube",   link:"https://www.youtube.com/user/18kylebradshaw"}];
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
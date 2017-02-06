/**
 * Globals
 * Progress Bar Colors
 * 
 * null = primary or blue
 * green = success
 * light blue = info
 * yellow = warning
 * red = danger
 */

let headerIcons = [{icon: "desktop",text:"Full Stack Web Developer"},{icon: "database",text:"Database Developer"},{icon: "database",text:"Database Designer"}];

let languages = [
    {name: "HTML5",color:"success",percent:70},
    {name: "CSS",color:  null,percent:100}];


let frameworks = [
    {name: "Angular JS",color:"success",percent:70},
    {name:   "Angular 2",color:  null,percent:70}];

let footerIcons = [
    { icon: "envelope",  text:"Email",     link:"mailto:kylebradshaw18@gmail.com?subject=Website Contact"},
    { icon: "phone",     text:"Phone",     link:"tel:+18452402066"},
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

//Function to build the header
function buildHeaderIcons(items){
  let html = [];
  for(let item of items)
    html.push('<div class="col-sm-4"><i class="fa fa-'+item.icon+'"></i><h3>'+item.text+'</h3></div>');
  $('#HeaderIcons').html(html.join(''));
}

//Function to build the portfolio section
function buildPortfolioInner(name, types){
  let html = [];
  sortTypes(types);
  for(let index = 0; index < types.length; index++){
    if ( index == 0 ) html.push('<h4 class="centered mb"><b>'+name+'</b></h4>');
    if(index % 2 == 0) html.push('<div class="row">');
    html.push('<div class="col-md-5"><div class="centered"><div class="row"><h6><b>'+types[index].name+'</b></h6>');
    let progressBarColor = ( types[index].color != null )? "progress-bar-"+types[index].color:"";
    html.push('<div class="progress"><div class="progress-bar '+progressBarColor+' progress-bar-striped active" role="progressbar" aria-valuenow="'+types[index].percent+'" aria-valuemin="0" aria-valuemax="100" style="width:'+types[index].percent+'%">'+types[index].percent+'%</div></div>');
    html.push('</div></div></div>');
    if(index % 2 == 0) html.push('<div class="col-md-2"></div>');
    if(index % 2 != 0 || index == types.length - 1) html.push('</div>');
  }
  $('#portfolioInner'+name).html(html.join(''));
}

//Function to build the footer links
function buildFooterIcons(items){
  let html = [];
  for(let item of items)
    html.push('<a href="'+item.link+'" target="_blank" data-toggle="tooltip" title="'+item.text+'"><i class="fa fa-'+item.icon+'"></i></a>');
  $('#FooterIcons').html(html.join(''));
}

function sortTypes(types){
  debugger;
  types.sort(function(a, b) {
    switch($('#portfolioSort').val()){
      case "PercentAsc":
        return a.percent - b.percent;
      case "NameAsc":
          if (a.name < b.name)
            return -1;
          if (a.name > b.name)
            return 1;
          return 0;
      case "NameDesc":
          if (a.name < b.name)
            return 1;
          if (a.name > b.name)
            return -1;
          return 0;
      default:
        return b.percent - a.percent;
    }
  });
  debugger;
}

function sortPortfolio(){
  debugger;
  buildPortfolioInner("Languages", languages);
  buildPortfolioInner("Frameworks", frameworks);
}
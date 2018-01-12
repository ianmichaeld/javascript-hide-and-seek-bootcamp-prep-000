function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var rls = document.querySelectorAll('ul.ranked-list');
  for(let i =0; i<rls.length; i++){
    rls[i].innerHTML = 
  }
}
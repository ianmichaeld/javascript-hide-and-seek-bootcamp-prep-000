function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var rls = document.querySelectorAll('ul.ranked-list');
  for(let i =0; i<rls.length; i++){
    let num = parseInt(rls[i].innerHTML);
    rls[i].innerHTML = (num + n).toString();
  }
}

function deepestChild(){
  let gn = document.querySelectorAll('div#grand-node');
}
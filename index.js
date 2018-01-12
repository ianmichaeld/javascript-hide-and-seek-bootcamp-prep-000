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
  let node = document.querySelector('#grand-node');
  let chld = gn.children[0];
  
  while(chld){
    node = chld;
    chld = chld.children[0]
    
  }
}
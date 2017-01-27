var $body,
    $items,
    _itemList = {};

$body = document.body;
$items = $body.children;

for(var i=0;i<$items.length;i++){
  //console.log($items[i].classList[0]);
  var key = $items[i].classList[0];

  _itemList[key] = $items[i];
}

console.log(_itemList);

// クラスを追加する場合
_itemList['クラス名'].classList.add('追加したいクラス');
// 削除する場合
_itemList['クラス名'].classList.remove('削除したいクラス');

// jQ
$(function(){

});
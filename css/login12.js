function All() {
  var n1= document.getElementById('book1').value;
  var n1= document.getElementById('book2').value;
  var n1= document.getElementById('book3').value;

  var p1 =25000*n1;
  var p2 =25000*n2;
  var p3 =25000*n3;

document.getElementById('book1total').value = p1;
document.getElementById('book1tota1').value = p2;
document.getElementById('book1tota1').value = p3;

var totalQ=parseInt(n1)+parseInt(n2)+parseInt(n3);

document.getElementById('totalQ').value = totalQ;

var totalprice=p1+p2+p3;

document.getElementById('totalprice').value = totalprice;







}

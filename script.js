addEventListener('click', clicou)
addEventListener('mouseout',saiu)
addEventListener('mouseenter',entrou)
function clicou(){
    var a=window.document.getElementById('area')
     a.style.background='black'
     a.innerText='Cor preta'
    }
    function entrou(){
var c=window.document.getElementById('area')
c.style.background='green'
c.innerText='azul'
}
    function saiu(){
     var b=window.document.getElementById('area')
    b.style.background='red'
    b.innerText='saiu'
     }   

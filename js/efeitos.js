// função de mascaras para inputs
$(document).ready(function(){
  $('.date').mask('00/00/0000');
  $('.time').mask('00:00:00');
  $('.date_time').mask('00/00/0000 00:00:00');
  $('.cep').mask('00000-000');
  $('.phone').mask('0000-0000');
  $('.phone_with_ddd').mask('(00) 00000-0000');
  $('.phone_us').mask('(000) 000-0000');
  $('.mixed').mask('AAA 000-S0S');
  $('.cpf').mask('000.000.000-00', {reverse: true});
  $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
  $('.money').mask('000.000.000.000.000,00', {reverse: true});
  $('.money2').mask("#.##0,00", {reverse: true});
  $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
    translation: {
      'Z': {
        pattern: /[0-9]/, optional: true
      }
    }
  });
  $('.ip_address').mask('099.099.099.099');
  $('.percent').mask('##0,00%', {reverse: true});
  $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
  $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
  $('.fallback').mask("00r00r0000", {
      translation: {
        'r': {
          pattern: /[\/]/,
          fallback: '/'
        },
        placeholder: "__/__/____"
      }
    });
  $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});

// função de favoritar os posts e serviços
  $(".btn-favotitar").click(function() {
    $(this).toggleClass("favorito");
  });

// função de colocar o header ou a barra fixa
  $(window).scroll(function(){
    if( $(this).scrollTop()>158 ){
      $('header').each(function(){
        $(this).addClass("header_fixo")
      });
      $('.barra-fixa').each(function(){
        $(this).addClass("fixo")
      });
    }else{
      $('header').each(function(){
        $(this).removeClass("header_fixo")
      });
      $('.barra-fixa').each(function(){
        $(this).removeClass("fixo")
      });
    };
  });
  $(window).scroll();

// função de checar todos os itens
  $('#selectall').click(function(event) {  
    if(this.checked) { 
        $('.checkbox1').each(function() { 
            this.checked = true;                 
        });
    }else{
        $('.checkbox1').each(function() { 
            this.checked = false;                      
        });         
    }
  });
});


// Função galeria
filterSelection("all")
function filterSelection(c) {
var x, i;
x = document.getElementsByClassName("filterDiv");
if (c == "all") c = "";
for (i = 0; i < x.length; i++) {
  RemoveClass(x[i], "show");
  if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
}
}

function AddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
}
}

function RemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  while (arr1.indexOf(arr2[i]) > -1) {
  arr1.splice(arr1.indexOf(arr2[i]), 1);     
  }
}
element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(){
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
});
}





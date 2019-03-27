var cafe = {
    'Эспрессо':{
        'espresso': 1
    },
    'Двойной эспрессо': {
        'espresso': 2
    },
    'Американо':{
        'espresso': 2,
        'water': 2
    },
    'Флэт Уайт':{
        'espresso': 1,
        'milk': 2
    },
    'Маккиато':{
        'espresso': 2,
        'milkfoam': 1
    },
    'ingridients': {
        'espresso':{
            'color': '#380101',
            'text': '"Эспрессо',
            'price': 10
        },
        'water':{
            'color': '#ccfbff',
            'text': 'Вода',
            'price': 3
        },
        'milk':{
            'color': '#fff',
            'text': 'Молоко',
            'price': 6
        },
        'milkfoam':{
            'color': '#f7ff9a',
            'text': 'Пена', 
            'price': 5
        }
        
    },
    'calcCafe': function(obj){
        var receptText = obj.text();
        var recept = cafe[receptText];
        var cup = $('.inner').height();
        var layerrHeight = cup/6;
        $('.inner div').remove();
        var allPrice = 0;

        
        for(elem in recept){
            var className = elem;
            var layerrProp = recept[elem];
            var color = cafe.ingridients[elem].color;
            var text = cafe.ingridients[elem].text;
            var price = cafe.ingridients[elem].price;
            var layerrHeightNew = layerrHeight*recept[elem];
            allPrice = allPrice+price*layerrProp;
            var lit ={
                'background-color': color,
                'height': layerrHeightNew
            }

            $('.inner').append('<div class=" '+className+' ">'+text+' '+recept[elem]+' порц.</div>');
            $('.inner').find('.'+className).css(lit);
        }
$('.price').html(allPrice + ' грн.');

 


        console.log(recept);
    }

}

$(document).ready(function(){
    $('.cup').before('<div class="price"></div>');
    $('.menu li').click(function(){
        cafe.calcCafe($(this));
    })
})












































// $(document).ready(function(){
//     $('.menu li').click(function(){
//         var receptText = $(this).text();
//         var recept = cafe[receptText];
//         var cup = $('.inner').height();
//         var layerrHeight = cup/6;
//         $('.inner div').remove();
//         for(elem in recept){
//             var className = elem;
//             var layerrColor = cafe.ingridients[elem].color;
//             var layerrText = cafe.ingridients[elem].text;
//             var layerrHeightNew = layerrHeight*recept[elem];
//             var style = {
//                 'background-color': layerrColor,
//                 'height': layerrHeightNew

//             }

//             $('.inner').append('<div class="'+className+'">'+layerrText+' '+recept[elem]+'</div>');
//             $('.inner').find('.'+className).css(style);
//         }
//     });
// })
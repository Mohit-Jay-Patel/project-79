var main_list_array = ["Chicken Tandoori Pizza",
                       "Veg Supreme Pizza",
                       "Paneer Tikka Pizza",
                       "Deluxe Veggie Pizza",
                       "Veg Extravaganza Pizza"  ];
function getmenu(){
    var html_data;
    html_data='<ol class="menu_list">';
    main_list_array.sort();
    for (var i=0;i<main_list_array.length;i++){
    html_data=html_data+'<li>'+main_list_array[i]+'</li>';

    }
    html_data=html_data+'</ol>';
    document.getElementById("display_addmenu").innerHTML=html_data;
}
function add_item(){
    var html_data;
    var item=document.getElementById("add_item").value;
    main_list_array.push(item);
    main_list_array.sort();
    html_data="<section class='cards'>";
    for( var i=0;i<main_list_array.length;i++){
        html_data=html_data+"<div class='card'>"+"<img src='images/pizzaImg.png'>"+main_list_array[i]+"</div>";
    }
    html_data=html_data+"</section>";
    document.getElementById("display_addmenu").innerHTML=html_data;
}
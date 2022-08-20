var nav = document.getElementById('nav-header');
var navMobile = document.getElementById('nav-mob');
var menuHeight = nav.clientHeight;
navMobile.onclick = function(){
    var isClosed = nav.clientHeight ===menuHeight;
    if(isClosed){
        nav.style.height = 'auto';
    } else {
        nav.style.height =null;
    }
}

var menuItems = document.querySelectorAll('#nav-header li a[href *= "#"]');
for (var i=0; i<menuItems.length; i++){
    var menuItem = menuItems[i];
    menuItem.onclick = function(){
        nav.style.height =null;

    }
}

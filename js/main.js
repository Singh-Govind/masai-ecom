if(JSON.parse(localStorage.getItem("signin")) != null){
    var logout = document.createElement("button");
    logout.innerText = "Logout";
    logout.setAttribute("class","logout");
    
    logout.addEventListener("click", logout_btn);

    document.querySelector(".menu").append(logout);
}

function logout_btn(){
    localStorage.removeItem("signin");
    window.location.href = "signin.html";
}


var cartItemsArr = JSON.parse(localStorage.getItem("cartItems")) || [];



function addToCart(data){

    if(checkElements(cartItemsArr, data)) 
    {
        alert("Item already added"); 
        return 0;
    }
    data.quantity = 1;
    cartItemsArr.push(data)
    localStorage.setItem("cartItems",JSON.stringify(cartItemsArr));
}

function checkElements(arr, element){
    for(var i = 0;  i < arr.length; i++)
    {
        if(arr[i].image_url == element.image_url)
            return true;
    }

    return false;
}


function deleteItemFunc(data, index){
    cartItemsArr.splice(index, 1);

    // localStorage.clear("cartItems");
    localStorage.setItem("cartItems", JSON.stringify(cartItemsArr));
    display(cartItemsArr);
}

function decreaseItem(data, index){

    if(cartItemsArr[index].quantity <= 1)
    {
        return 0;
    }
    var quan = cartItemsArr[index].quantity;
    quan--;
    cartItemsArr[index].quantity = quan;
    display(cartItemsArr);
}
function increaseItem(data, index){
    var quan = cartItemsArr[index].quantity;
    quan++;
    cartItemsArr[index].quantity = quan;
    display(cartItemsArr);
}





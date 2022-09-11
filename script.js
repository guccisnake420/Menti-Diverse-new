var addtoCart = document.getElementsByClassName('buy_button')
for (var i=0; i<addtoCart.length;i++){
    var button= addtoCart[i]
    button.addEventListener('click', function(event){
        console.log('clicked')
        let prodPrice= document.getElementsByClassName('price')[0]
        let price= parseFloat(prodPrice.innerText.replace('$',''))
        let fullimg= document.getElementsByClassName("prodimg")[0].src
        let proddesc =document.getElementsByClassName("Proddesc")[0]
        let desc= proddesc.textContent
        console.log(price, fullimg, desc)
        // getProductItems()
        addProdtocart(price, fullimg,desc)
        

    })
}
// function getProductItems(){
//     let prodPrice= document.getElementsByClassName('price')[0]
//     let price= parseFloat(prodPrice.innerText.replace('$',''))
//     let fullimg= document.getElementsByClassName("prodimg")[0].src
//     let proddesc =document.getElementsByClassName("Proddesc")[0]
//     let desc= proddesc.textContent
//     let cartItems = document.getElementsByClassName('carttable')[0]
//     console.log(price,fullimg,desc, cartItems)

// }
function addProdtocart(price, fullimg, desc){
    // let prodPrice= document.getElementsByClassName('price')[0]
    // price= parseFloat(prodPrice.innerText.replace('$',''))
    // fullimg= document.getElementsByClassName("prodimg")[0].src
    // let proddesc =document.getElementsByClassName("Proddesc")[0]
    // desc= proddesc.textContent
    
    
    let cartItems = document.getElementsByClassName('carttable')[0]
    const row = document.createElement('tr')
    let cartcontent=
    `<td id="cart_photo"><img src="${fullimg}" id="cartimg"/></td>
    <td id="cart_desc">${desc}</td>
    <td id="cart_size">   </td>
    <td id="cart_quantity">1</td>
    <td id="cart_price">${price}</td>
    <td><button type="button" class="del_button">Delete</button></td>`
    
    row.innerHTML=cartcontent
    cartItems.append(row)
    alert('Item Added to Cart')
    totalPrice();
    row.getElementsByClassName('del_button')[0].addEventListener('click', removeCartItem)
}
function totalPrice(){
    const total=[];
    const items=document.querySelectorAll("[id='cart_price']")
    items.forEach(function(item){
        total.push(parseFloat(item.textContent))
    })
    console.log(total)
    const totalMoney = total.reduce(function(total,item){
        total +=item;
        return total;
    },0)
    console.log(totalMoney)
    let Totaltab= document.getElementById('cart_total')
    Totaltab.innerText=totalMoney

 }

var removeCartItem = document.getElementsByClassName('del_button')
console.log(removeCartItem)
for(var i=0; i<removeCartItem.length; i++){
    var delbutton = removeCartItem[i]
    delbutton.addEventListener('click', function(event){
        console.log('clicky clicky click')
        alert('item removed from cart')
    })
}
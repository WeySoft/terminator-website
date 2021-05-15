const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const dogecoin = document.querySelector('#dogecoin')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const dogecoinContent = document.querySelector('#dogecoin-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '500px',
    height: '500px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '500px',
    height: '500px',
    top: 100,
    right: 50,
    bottom: 50,
    left: 150,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

dogecoin.addEventListener('click', () => {
  getDogeCoinPrice();
  setInterval(function(){getDogeCoinPrice();},60000);
  const dogecoinBox = new WinBox({
    title: 'Contact Me',
    width: '500px',
    height: '500px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: dogecoinContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

/* Add "https://api.ipify.org?format=json" statement
          this will communicate with the ipify servers in
          order to retrieve the IP address $.getJSON will
          load JSON-encoded data from the server using a
          GET HTTP request */
$.getJSON("https://api.ipify.org?format=json",
  function (data) {
    // Setting text of element span with class clientID
    $(".clientID").html(data.ip);
  })
function getDogeCoinPrice(){
  $.getJSON("https://sochain.com//api/v2/get_price/DOGE/USD", function (data) {
    $("#listCoin").empty();
    let nameOfExchange = ""
    data.data.prices.forEach((price, index) => { 
      if(index == data.data.prices.length-1){
        nameOfExchange = nameOfExchange + " and " +price.exchange+".";
      }
      else if (index == 0){
        nameOfExchange = price.exchange;
      }
      else {
        nameOfExchange = nameOfExchange + ", " + price.exchange;
      }
      $("#listCoin").append("<li>"+price.exchange + ": " + price.price + "/" + price.price_base +"</li>")
    })
    $('#exchanges').html(nameOfExchange);
  })
}
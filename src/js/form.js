function sendMessage() {
    name = document.getElementById('name').value;
    phone = document.getElementById('phone').value;
    email = document.getElementById('email').value;
    comment = document.getElementById('comment').value;

    var text = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AComment: ${comment}`;
    console.log(text);

    var token = '6372861588:AAEGaipFu1vG46sPuhaTzTjVkXPc5uqkwsg';
    console.log(token);
    var chat_id = '721323636';

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`;
    console.log(url);


    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
}

form = document.getElementById('form');
form.addEventListener('submit', sendMessage);
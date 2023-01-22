function ab(){
	let mail = document.getElementById("mail").value;
	let pass = document.getElementById("pass").value;
	let pass2 = document.getElementById("pass2").value;
	
	if (pass != pass2){
		alert("Ошибка, пароли не совпадают")
	}

	if (mail == ""){
		alert("Введите вашу электронную почту")
	}

	if (pass == "", pass2 == ""){
		alert("Введите пароль")
	}

	if (pass == pass2 && mail != "" && pass != "" && pass2 != ""){
		alert("Регистрация прошла успешно")
		let basa = [mail, pass]

		console.log(basa)
	}

}
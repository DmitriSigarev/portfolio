let number = null;
let moneyUp = null;
let moneyDown = null;
let piggyBankUp = null;



document.getElementById('addSallary').addEventListener('click', function (){
	let money = document.getElementById('sallary').value;
	if(!isFinite(money)){
		document.getElementById('sallary').style.borderColor = 'red';
	}else{
		moneyUp =money;
		number += +money;
		document.getElementById('Cash').textContent = number;
		if(number>=0){
		document.getElementById('koshel').style.color = ''
		document.getElementById('kazna').textContent = ''
		document.getElementById('sallary').style.borderColor = '';
	}
	}
	
	
})


//расход в цифрах
document.getElementById('outSallary').addEventListener('click',function(){
	const outInput = document.getElementById('outComing').value;
	if(!isFinite(outInput)){
		document.getElementById('outComing').style.borderColor = 'red';
	}else{
		moneyDown = +outInput;
		number -= +outInput;
		document.getElementById('Cash').textContent = number;
		if(number<0){
		document.getElementById('koshel').style.color = 'red'
		document.getElementById('kazna').textContent = 'Казна пустеет Милорд...'
		document.getElementById('outComing').style.borderColor = '';
	}
	}
	

})


//в список доход + описание
document.getElementById('addSallary').addEventListener('click',function(){
	const userInfo = document.getElementById('descriptionIncome').value;
	const ul = document.createElement('ul');
	const li = document.createElement('li');
	const hr = document.createElement('hr');
	li.textContent = ` Доход ${userInfo} : ${+moneyUp}`;
	ul.append(li)
	li.append(hr)
	document.getElementById('lis').append(ul)
	
})

//в список расход + описание
document.getElementById('outSallary').addEventListener('click',function(){
	const outDesc = document.getElementById('outComingDescription').value;
	const ul = document.createElement('ul');
	const li = document.createElement('li');
	const hr = document.createElement('hr');
	li.textContent = `Убыток ${outDesc} - ${+moneyDown}`;
	ul.append(li);
	li.append(hr);
	document.getElementById('lis').append(ul);
})

document.getElementById('addInPig').addEventListener('click', function(){
	const piggyBank = document.getElementById('pigIn').value;
	number -=  +piggyBank;
	piggyBankUp += +piggyBank;
	document.getElementById('HRYVNA').textContent = +piggyBankUp;
	document.getElementById('Cash').textContent = number;
	if(number<0){
		document.getElementById('koshel').style.color = 'red'
		document.getElementById('kazna').textContent = 'Казна пустеет Милорд...'
	}
	
	
})







//p.s. если Вы досмотрели до этого места, искренне надеюсь что после того что выше, голова у вас не болит))
const credits = 23580;
const pricePerDroid = 3000;
const quantityDroids = prompt('Сколько дроидов вы хотите приобрести?');
const totalDroids = quantityDroids * pricePerDroid;
const balance = credits - quantityDroids * pricePerDroid;
if (quantityDroids === null) {
	console.log(alert('Отменено пользователем!'));
}
if (quantityDroids * pricePerDroid > credits) {
	console.log(alert('Недостаточно средств на счету!'));
}
if (quantityDroids * pricePerDroid < credits) {
	console.log(alert(`Вы купили ${quantityDroids} дроидов, на счету осталось ${balance} кредитов.`));
}

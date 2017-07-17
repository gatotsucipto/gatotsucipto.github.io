Gatot Sucipto JackFox

--------------------
  GAME MOTOGP 2017
--------------------
Pseudocode:

PILIH dan SIMPAN "objek pertama"
PISAHKAN dan SIMPAN "objek kedua"
URUTKAN "objek kedua" ambil "urutan pertama"
SIMPAN "urutan pertama", "urutan kedua" dan "urutan ketiga"
HITUNG "objek ketiga" dibagi lima
TAMPILKAN hasil hitungan kelipatan lima

Code:

function motoGp2017(player) {

	var  panjang = player.slice(0,1);
  var totalLap = 25;
	var hasil = '';

	for (var i = panjang- 1; i <= 0; i++)
		hasil = hasil + player[i];{
			console.log('Rider ' +': ' + player[0]);
			{
			console.log('Bike ' + ': ' + player[1]);
			{
			console.log('Start Position ' + ': ' + player[2]);
					  	if (player[0]!==''){
 							console.log('Welcome'+ player[0] + ' to motoGP 2017! ');
						   } else { console.log('Rider tidak boleh kosong');}
								if (player[1]!=='') {
									if (player[1]==='Yamaha') {
										console.log('Halo '+ player[0]+', with this new '+ player[1] +' you will be able to maneuver better!');
									} else if (player[1]==='Honda') {
										console.log('Halo '+ player[0]+', your new '+ player[1] +' have a better performance in any weather condition!');
									} else if (player[1]==='Ducati') {
										console.log('Halo '+ player[0]+', you can take a lead at straight track with your new '+ player[1]);
									} else { console.log('Choose your bike to start race'); }

									}	if (player[2] === 3) {
												console.log('You start at third position!');
											} else if (player[2] === 1) {
												console.log('You start at first position!');
											} else if (player[2] === 2) {
												console.log('You start at second position!');
											} else { console.log('Fill in your start position'); }

										} for (var i = 5; i <= totalLap - 10; i += 5) {
											console.log('Lap '+i + ', you are leading!');
										} for (var u = 20; u <= totalLap; u += 5) {
											 console.log('Lap '+u + ', you are at second position!');} {
											 console.log('CONGRATULATIONS! '+player[0]+' you are the champion!');
										}
					return ('');
					}}}

var player1 = ['Rossi', 'Yamaha', 3 ]
var player2 = ['Marquez', 'Honda', 1 ]
var player3 = ['Lorenzo', 'Ducati', 2 ]

console.log(motoGp2017(player1));
console.log(motoGp2017(player2));
console.log(motoGp2017(player3));

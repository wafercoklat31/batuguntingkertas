let komputer = '';
let random;
let inputUser = '';

function main(){

    // random angka
    random = Math.random();


    // translate randoman angka jadi kata
    if (random >= 0 && random <= 1/3) {
        komputer = 'Batu';
    } else if (random > 1/3 && random < 2/3){
        komputer = 'Gunting';
    } else if (random > 2/3 && random <= 1){
        komputer = 'Kertas';
    }


    // Batu
    if (inputUser === 'Batu' && komputer === 'Batu') {
        document.getElementById('lawan').innerText = '✊ vs ✊'
        document.getElementById('hasil').innerText = 'Seri';
        console.log('Seri');
    } else if (inputUser === 'Batu' && komputer === 'Gunting'){
        document.getElementById('lawan').innerText = '✊ vs ✌'
        document.getElementById('hasil').innerText = 'Kamu menang!';
        console.log('Kamu Menang');
    } else if (inputUser === 'Batu' && komputer === 'Kertas') {
        document.getElementById('lawan').innerText = '✊ vs ✋'
        document.getElementById('hasil').innerText = 'Kamu Kalah';
        console.log('Kamu Kalah')
    }
    
    // Gunting
    if (inputUser === 'Gunting' && komputer === 'Batu') {
        document.getElementById('lawan').innerText = '✌ vs ✊'
        document.getElementById('hasil').innerText = 'Kamu Kalah';
        console.log('Kamu Kalah');
    } else if (inputUser === 'Gunting' && komputer === 'Gunting'){
        document.getElementById('lawan').innerText = '✌ vs ✌'
        document.getElementById('hasil').innerText = 'Seri';
        console.log('Seri');
    } else if (inputUser === 'Gunting' && komputer === 'Kertas') {
        document.getElementById('lawan').innerText = '✌ vs ✋'
        document.getElementById('hasil').innerText = 'Kamu menang!';
        console.log('Kamu Menang')
    }
    
    // Kertas
    if (inputUser === 'Kertas' && komputer === 'Batu') {
        document.getElementById('lawan').innerText = '✋ vs ✊'
        document.getElementById('hasil').innerText = 'Kamu menang!';
        console.log('Kamu Menang');
    } else if (inputUser === 'Kertas' && komputer === 'Gunting'){
        document.getElementById('lawan').innerText = '✋ vs ✌'
        document.getElementById('hasil').innerText = 'Kamu Kalah';
        console.log('Kamu Kalah');
    } else if (inputUser === 'Kertas' && komputer === 'Kertas') {
        document.getElementById('lawan').innerText = '✋ vs ✋'
        document.getElementById('hasil').innerText = 'Seri';
        console.log('Seri')
    }
}
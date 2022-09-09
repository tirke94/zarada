const inputOpis = document.querySelector('#opis')
const inputIznos = document.querySelector('#iznos')
const btnUnesi = document.querySelector('.button')
const dostupanBudzet = document.querySelector('.dostupanBudzet')
const prihod = document.querySelector('.prihod')
const rashod = document.querySelector('.rashod')
const ukupanProcenat = document.querySelector('.procenat')
const divPozitivanIspis = document.querySelector('.pozitivanIspis')
const divNegativanIspis = document.querySelector('.negativanIspis')
const plusMinus = document.querySelector('#plusMinus')
let ukupanPrihod = 0
let ukupanRashod = 0
let noviNiz = []
let trosak = {
    naziv: '',
    kolicina: ''
}

btnUnesi.addEventListener("click", () => {

    if (plusMinus.value === 'plus') {
        const pozitivanUnos = document.createElement('div')
        pozitivanUnos.classList.add('border')

        const pOpis = document.createElement('p')
        pOpis.textContent = inputOpis.value
        const pIznos = document.createElement('p')
        pIznos.textContent = '+' + inputIznos.value

        pozitivanUnos.append(pOpis, pIznos)
        divPozitivanIspis.appendChild(pozitivanUnos)

        ukupanPrihod += +pIznos.textContent
        prihod.textContent = "+" + ukupanPrihod
    }
    if (plusMinus.value === 'minus') {
        trosak = {
            naziv: inputOpis.value,
            kolicina: inputIznos.value
        }
        noviNiz.push(trosak)
        ukupanRashod += +trosak.kolicina
        render(noviNiz)
        rashod.textContent = +ukupanRashod
    }
    
    ukupanProcenat.textContent = Math.round((Math.abs(ukupanRashod) / ukupanPrihod) * 100) + '%'

    dostupanBudzet.textContent = ukupanPrihod - Math.abs(ukupanRashod)

    inputOpis.value = ''
    inputIznos.value = ''
})

const render = (noviNiz) => {

    divNegativanIspis.textContent = ''

    noviNiz.forEach(unos => {
        const negativanUnos = document.createElement('div')
        negativanUnos.classList.add('border')
        const pOpis = document.createElement('p')
        pOpis.textContent = unos.naziv
        const pIznos = document.createElement('p')
        pIznos.textContent = '-' + unos.kolicina
        const pProcenat = document.createElement('p')
        pProcenat.textContent = Math.abs(Math.round((+unos.kolicina / Math.abs(ukupanRashod)) * 100)) + "%"
    
        negativanUnos.append(pOpis, pIznos, pProcenat)
        divNegativanIspis.appendChild(negativanUnos)

    })
}
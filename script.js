<script>
    let circulo = document.querySelector(".circulo")
    let imgCopo = document.querySelector(".copo-grande")
    let verde = document.querySelector(".verde")
    let pink = document.querySelector(".pink")
    let rosa = document.querySelector(".rosa")

    verde.addEventListener("click", () => {
        imgCopo.src = "./imagens/img1.png"
        circulo.style.background = "#017143"
    })

    pink.addEventListener("click", () => {
        imgCopo.src = "./imagens/img2.png"
        circulo.style.background = "#eb7495"
    })

    rosa.addEventListener("click", () => {
        imgCopo.src = "./imagens/img3.png"
        circulo.style.background = "#d752b1"
    })

</script>

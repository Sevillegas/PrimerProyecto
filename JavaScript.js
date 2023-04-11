const imgArray = [
    './image/3.jpg', 
    './image/2.jpg',
    './image/1.jpg'            
]

const img = document.querySelector('#slide')

let i = 0

const slideShow = () => {
    img.src = imgArray[i]
    i = (i < imgArray.lenght - 1) ? i+2 : 1
}

const interval = () =>{
    setInterval(slideShow, 2000)
}

document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
    var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // you do the rest
  //SANITY CHECK ** console.log (answerPTagWithValue.innerHTML)
  var starterNum = answerPTagWithValue.innerHTML
  var starterNum = parseInt(answerPTagWithValue.innerHTML)
  // SANITY CHECK 2 ** console.log (starterNum)

  answerPTagWithValue.innerHTML = starterNum * 2
  // SANITY CHECK 3 ** console.log (answerPTagWithValue.innerHTML) *kinda pointless*

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3


  var circleClrChanger = document.querySelector('#circle-bw')

  if (circleClrChanger.style.background === "" ){

     circleClrChanger.style.background = '#000'

 } else if ( circleClrChanger.style.background === '#000'){

     circleClrChanger.style.background = ""
}

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  // 1 Select element
  var circleEl = document.querySelector('.circle-red')

  //2 Capture the current height and width of circle El
  var elementStyles = window.getComputedStyle(circleEl)
  //console.log (elementStyles.width)
  //console.log(elementStyles.height)

  var elWidthString = elementStyles.width
  var elHeightString = elementStyles.height
  //3 Convert height and width
  var elWidthStringNum = elWidthString.slice(0,-2)
  var elHeightStringNum = elHeightString.slice(0,-2)

  var currentElWidth = parseInt(elWidthStringNum)
  var currentElHeight = parseInt(elHeightStringNum)

  //console.log('current height/width' , currentElWidth, currentElHeight)

  //4 Double the integer value of height and width
  var doubleWidth = currentElWidth * 2
  var doubleHeight = currentElHeight * 2

 // console.log('current width/height', doubleWidth, doubleHeight)

  //END

  if(doubleWidth > 320 ){
     circleEl.style.width = "40px"
     circleEl.style.height = "40px"
 } else {
     circleEl.style.width = doubleWidth + 'px' //**DONT FORGET "QUOTES" FOR STRING VALUES
     circleEl.style.height = doubleHeight + 'px' //Add a px after to return it to a string value so that it reads in the browser
}
   //** RECODED DURING HW GRAB BAG FOR MUSCLE MEMORY AND PRACTICE

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var usrList = document.querySelector ("#user-list")
    var inactiveUsers = document.querySelectorAll ('#user-list .inactive')

    console.log(usrList)

    for (var i = 0; i <inactiveUsers.length; i++){
      usrList.removeChild(inactiveUsers[i])
   }

})

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var boxDivEl = document.querySelector ('#reverse-squares .answer-box')
  var boxSpanEl = document.querySelectorAll ('#reverse-squares .span')

  console.log(boxSpanEl[0])

  for (var i = boxSpanEl.length -1; i >= 0; i--){

     boxDivEl.removeChild(boxSpanEl[i])
     boxDivEl.appendChild(boxSpanEl[i])
 }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
   var imgEl = document.querySelector('#city-img')
   //console.log('cat', imgEl.src)

   //split to an array to isolate the city-photo-"number"
   var splitSrcStringArray = imgEl.src.split('/')

   //access the 'number'
   var stringToModify = splitSrcStringArray.pop()

   //isolate the number part of city-photo-"number"
   var cityPhotoNumvalString = stringToModify.split('.')[0]

   var cityPhotoXArr = cityPhotoNumvalString.split('-')

   var numString = cityPhotoXArr.pop()

   //convet the numString to an integer and add 1
   var imgNum = parseInt(numString)

   var nextImg = imgNum + 1
 //if statment

 if (nextImg <= 10){
    var imgNumForDOM = nextImg
} else {
   var imgNumForDOM = 1
}

//write for DOM
imgEl.src = './images/city-photo-' + (nextImg % 10 + 1) + '.jpg'


})

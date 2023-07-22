let arr=[]
let time=[]
let index=0
function setTime(event){
    let tempindex=index
    event.preventDefault()
    let time1=Number(document.getElementById('hours').value)
    let time2=Number(document.getElementById('minutes').value)
    let time3=Number(document.getElementById('seconds').value)
    document.getElementById('hours').value=''
    document.getElementById('seconds').value=''
    document.getElementById('minutes').value=''
    let parent=document.getElementsByClassName('activetimer')[0]
    if(arr.length==0){
        document.getElementsByClassName('activetimer')[0].innerHTML=''
    }
    let temp=document.createElement('div')
    temp.className='inditimer'
    temp.id=`timer1${tempindex}`
    temp.innerHTML=`<div class='timeleft'>Time Left:</div>
    <div class="timedisplay" id="timer2${tempindex}"></div>
    <button onclick="remove(${tempindex})">Stop</button>`
    time.push((time1*3600 + time2*60 +time3))
    parent.append(temp)
    arr.push(setInterval(()=>{displaytime(time[tempindex],tempindex)},1000))
    console.log(arr)
    index++
}
let submit=document.getElementsByTagName("form")[0]
submit.addEventListener("submit",setTime)
function displaytime(timer,index){
    console.log(time)
    console.log(index)
    let c= document.getElementById(`timer2${index}`)
    console.log(c)
    let hours=Math.floor(timer/3600)
    let minutes=Math.floor(timer/60)
    if(minutes>60){
        minutes=minutes%60
    }
    let seconds=timer%60
    c.innerText=`${hours<10?'0'+hours:hours}:${minutes<10?'0'+minutes:minutes}:${seconds<10?'0'+seconds:seconds}`
    time[index]=time[index]-1
    if(time[index]<0){
        clearInterval(arr[index])
        c.style.fontSize='30px'
        c.innerText='Timer is up Baby'
        document.getElementById('audio').play()
    }
}
function remove(inde){
    clearInterval(arr[inde])
    let c= document.getElementById(`timer1${inde}`).remove()
    arr.splice(inde,1)
    time.splice(inde,1)
    index--
    if(document.getElementsByClassName("inditimer").length==0){
        document.getElementsByClassName('activetimer')[0].innerHTML=''
        document.getElementsByClassName('activetimer')[0].innerText="You have no active timers currently!"
    }
}
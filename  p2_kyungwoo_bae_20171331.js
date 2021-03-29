//변수설정
let mic, amp ;
let state = 0; 


function setup() {
  //배경설정
  createCanvas(windowWidth, windowWidth);
  let r = random(171,255);
    let g = random(160,214);
    let b =random(229,255);
  background(r,g,b);
  //마이크 사용
  mic = new p5.AudioIn();
  mic.start();
  //소리 진폭 가져오기
  amp= new p5.Amplitude();
  amp.setInput(mic);
  
}

function draw(){
  //진폭 변수화
   let rms = amp.getLevel();
  
  if(mouseIsPressed){
    //색 랜덤설정
    let color = random(160,255);
    let colort = random(160,255);
    let colorr =random(160,255);
    fill(color,colort,colorr);
    //진폭에 따라 크기가 변하는 원
    ellipse(mouseX, mouseY, 10 + rms * 300, 10 + rms * 300)
  }
  
}

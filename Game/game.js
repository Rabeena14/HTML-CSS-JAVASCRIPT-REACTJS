var total= 0
function guessTheNumber() {
        var num = Number(document.getElementById("number").value)
        var answer=document.getElementById("answer")
        var score=document.getElementById("score")
        var a = Math.random() * 10;
        console.log(a)
        var b = Math.floor(a)
        document.getElementById("ans").innerHTML=b
        console.log(b);
             if(num==b)
        {
              console.log("Right");
              answer.textContent="Right";
              total= total +1
              score.textContent="Score :" + total
              alert("You won");
        }
             else
        {
              console.log("wrong");
              answer.textContent="wrong";
              total=total-1
              score.textContent="Score :" + total
              if(total < -10){
                alert("Game over")
                total=0;
              }
        }
}
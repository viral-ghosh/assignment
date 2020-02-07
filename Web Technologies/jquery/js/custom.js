$(document).ready(function(){
    var score=0;
    $("#1").hide();
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
    $("#5").hide();
    $("#result").hide();
    $("#start").click(function(){
      $("#home").hide();
      $("#1").show();
     
    });
    $("#btn1").click(function(){
      var radioValue = $("input[name='q1']:checked").val();
      if(radioValue){
          if(radioValue==4){
            score+=1;
          }
        $("#1").hide();
        $("#2").show();
      }else{
        alert("Please choose any option");
      }
    });
    $("#btn2").click(function(){
      var radioValue = $("input[name='q2']:checked").val();
      if(radioValue){
        $("#2").hide();
        $("#3").show();
          if(radioValue==1){
            score+=1;
          }
      }else{
        alert("Please choose any option");
      }
    });
    $("#btn3").click(function(){
     
      var radioValue = $("input[name='q3']:checked").val();
      if(radioValue){
        $("#3").hide();
      $("#4").show();
          if(radioValue==3){
            score+=1;
          }
      }else{
        alert("Please choose any option");
      }
    });
    $("#btn4").click(function(){  
      var radioValue = $("input[name='q4']:checked").val();
      if(radioValue){
        $("#4").hide();
        $("#5").show();
          if(radioValue==1){
            score+=1;
          }
      }else{
        alert("Please choose any option");
      }
    });
    $("#btn5").click(function(){    
      var radioValue = $("input[name='q5']:checked").val();
      if(radioValue){
        $("#5").hide();
        $("#result").show();
          if(radioValue==4){
            score+=1;

          }
          $("#scored").text("You Scored "+score+" Points");
      }else{
        alert("Please choose any option");
      }
    });
    $("#end").click(function(){
     location.reload(true);
    });

  });
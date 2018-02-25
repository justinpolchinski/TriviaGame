console.log("Linking...")

$(document).ready(function(){
    var $start = $("#start");
    var $startContainer = $("#startContainer");
    var $timer = $("#timer");
    var $questions = $("#questions");
    var $checkbox1 = $(".checkBox1");
    var firstValue;
    var $q1 =$("#q1");
    var right = 0;
    var inCorrect = 0;
    var count = 0;
    var $score = $("#score");
    var tickerArray =[
        "aapl","BA","amzn", 
        "fb","googl","goog","f"];
    var theAnswer;    
    var secs = 30;
    var $timer = $("#timer"); //need id= "timer" 
   // var timeLeft = setInterval(decreaseBy, 1000);
    var timeLeft;
    var widthPercent =0; //for bar decreasing see function below

    
    $score.hide();
    function decreaseBy(){
            if (secs == 0){
                console.log("Done!");
                $(this).parent().hide();
                $timer.slideUp(500);
                clearInterval(timeLeft);
                $score.text("Your Score is " + Math.round(right/tickerArray.length*100));
                $questions.hide();
                $score.slideDown(500);
                clearInterval(timeLeft);
        
            }else{
                secs--;
                widthPercent = secs/30*100
                $timer.text(secs).width(widthPercent+"%");
                
            }
            }
    
    $timer.hide();
    $questions.hide();
    $start.on("click", function(){
        $start.slideUp(500);
        $startContainer.slideUp(500);
        $timer.slideDown(500);
        $questions.slideDown(500);
        
        timeLeft = setInterval(decreaseBy, 1000);
        $(":radio").on("click", function(){
        
            //-----------------------
            firstValue = $(this).val();
            //-------------------------
            
            console.log("firstValue: " + firstValue);
            count++;
            
            for (var i =0; i < tickerArray.length; i++){   
            if(firstValue == tickerArray[i]){
                console.log("correct");
                right++;
                theAnswer=tickerArray[i];
                $(this).parent().hide();
                console.log("Right: " + right);
                console.log("inCorrect: " + inCorrect);
                if(count==tickerArray.length){
                    
                    console.log("Done!");

                    $timer.slideUp(500);
                    clearInterval(timeLeft);
                    $score.text("Your Score is " + Math.round(right/tickerArray.length*100));
                    $score.slideDown(500);
                    return;
                }
                return theAnswer;
            }
            }
            if(firstValue!=theAnswer){
                console.log("wrong");
                inCorrect++;
                if(count==tickerArray.length){
                    
                    console.log("Done!");
                    $(this).parent().hide();
                    $timer.slideUp(500);
                    clearInterval(timeLeft);
                    $score.text("Your Score is " + Math.round(right/tickerArray.length*100));
                    $score.slideDown(500);
                    return;
                }
            }
            $(this).parent().hide();
            console.log("Right: " + right);
            console.log("inCorrect: " + inCorrect);
    
        })
        
        
    });
    // $(":radio").on("click", function(){
        
    //     //-----------------------
    //     firstValue = $(this).val();
    //     //-------------------------
        
    //     console.log("firstValue: " + firstValue);
        
        
    //     for (var i =0; i < tickerArray.length; i++){   
    //     if(firstValue == tickerArray[i]){
    //         console.log("correct");
    //         right++;
    //         theAnswer=tickerArray[i]
    //         $(this).parent().hide();
    //         console.log("Right: " + right);
    //         console.log("inCorrect: " + inCorrect);
    //         if(right+inCorrect==tickerArray.length){
                
    //             console.log("Done!");
    //             return clearInterval(timeLeft);;
    //         }
    //         return theAnswer;
    //     }
    //     }
    //     if(firstValue!=theAnswer){
    //         console.log("wrong");
    //         inCorrect++;
    //     }
    //     $(this).parent().hide();
    //     console.log("Right: " + right);
    //     console.log("inCorrect: " + inCorrect);

    // })


});   
//     var secs = 30;
//     var $time = $("#time");//need id= "timer" 
//     var timeLeft = setInterval(decreaseBy, 1000);
//     var widthPercent =0;//for bar decreasing see function below
// function decreaseBy(){
//     if (secs == 0){
//     clearInterval(timeLeft);

//     }else{
//         secs--;
//         widthPercent = secs/30*100
//         $time.text(secs).width(widthPercent+"%");
        
//     }
//     }


// function justinsMath (placeWhatEver, placeSomethingElse,x, y, ){
//     var answer  = placeWhatEver + placeSomethingElse;
//     console.log("The answer is: " + answer);
// }

// justinsMath(5,10);
// justinsMath(2,11);
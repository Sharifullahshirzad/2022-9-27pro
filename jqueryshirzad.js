



// $('button').click(()=>{
    // $('div').children('p:').css({'color':'red'})

    // $('div').find('b').css({'color':'green'})

    // $('p').siblings().css({'color':'blue',"font-size":'20px'})
    // $('p').siblings('h1').css({'color':'blue',"font-size":'20px'})

    // $('p').next().css({'color':'blue',"font-size":'20px'})
    // $('p').nextAll().css({'color':'blue',"font-size":'20px'})
    // $('p').nextUntil().css({'color':'blue',"font-size":'20px'})
    // $('p').prev().css({'color':'blue',"font-size":'20px'})
    // $('h1').prevAll().css({'color':'gold',"font-size":'20px'})

    // first methode

    // $('div').first().css({'color':'gold'})
    // $('div').second().css({'color':'gold'})
    // $('div').last().css({'color':'gold'})

    // $('p').filter('.test').css({'color':'gold'})
    // $('p').not('.test').css({'color':'gold'})
    



// })

//     //  calculter 
// function insert(num){
//     // console.log(num)
//     $('#cal').val($('#cal').val()+ num)
// }

// function eql(){
//     $('#cal').val(eval($('#cal').val()))
// }

// function theClear(){
//     $('#cal').val('');
// }

// function del(){
//     var value = $('#cal').val();
//     $('#cal').val(value.substring(0, value.length -1))
// }

$('button').click(()=>{
    $('#output').load('try.html h1',function(responseTxt,statusTxt,xhr){

        // alert('data loaded successfully ')

        if(statusTxt == "success"){

        alert('data loaded successfully! ' + xhr.statusText)
            
        }else if(statusTxt == error){
            alert('somthing went wrong ' + xhr.status)
        }
    })

})

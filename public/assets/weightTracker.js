$(document).ready(function(){
    $('form').on('submit', function(){
       let name = $("input[name='name']");
       let currentWeight =  $("input[name='currentWeight']");
       let targetWeight =  $("input[name='targetWeight']");
       let targetDate =  $("input[name='targetDate']");
console.log(targetDate)
       let userInfo = {
           name: name.val(),
           currentWeight: currentWeight.val(),
           targetWeight: targetWeight.val(),
           targetDate: targetDate.val()
       }
       console.log(userInfo)
       $.ajax({
           type: 'POST',
           url: '/tracker',
           data: userInfo,
           success: function(data){
               location.reload()
           }
       })

       return false
    });
});
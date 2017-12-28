function btntest_onclick() 
	{
	window.location.href = "tryTHIS.html";
	}

function rotate_dis(){	
	$(document).ready(function(){
		$("#myCarousel").carousel();
		
		 // Enable carousel control
		$(".left").click(function(){
			$("#myCarousel").carousel('prev');
		});
		$(".right").click(function(){
			$("#myCarousel").carousel('next');
		});
    // Enable carousel indicators
		$(".slide-one").click(function(){
			$("#myCarousel").carousel(0);
		});
		$(".slide-two").click(function(){
			$("#myCarousel").carousel(1);
		});
		$(".slide-three").click(function(){
			$("#myCarousel").carousel(2);
		});
	})
}
  
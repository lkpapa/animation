<<<<<<< HEAD
jQuery(document).ready(function(){
                jQuery('#scroll-zoon-section').viewportChecker({
                    offset: 200,
                    callbackFunction: function(elem){
                        setTimeout(function(){
                            const zoomElement = document.querySelector(".elementor-element-5ef5b67");
							let zoom = 1;
							const ZOOM_SPEED = 0.1;
							document.addEventListener("wheel", function (e) {
								var scroll = jQuery(window).scrollTop();
								jQuery(".elementor-element-5ef5b67").css({
									width: (100 + scroll/5) + "%"
								  })
							});
                        },500);
                    }
                });
				
=======
jQuery(document).ready(function(){
                jQuery('#scroll-zoon-section').viewportChecker({
                    offset: 200,
                    callbackFunction: function(elem){
                        setTimeout(function(){
                            const zoomElement = document.querySelector(".elementor-element-5ef5b67");
							let zoom = 1;
							const ZOOM_SPEED = 0.1;
							document.addEventListener("wheel", function (e) {
								var scroll = jQuery(window).scrollTop();
								jQuery(".elementor-element-5ef5b67").css({
									width: (100 + scroll/5) + "%"
								  })
							});
                        },500);
                    }
                });
				
>>>>>>> 7664dfa35a9930e3b21f34f94f701138770be3a7
            });
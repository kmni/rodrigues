var hju	= {
	mobileNavi:	function(){
		if ($('#mobile_navi').length)
		{
			$('#mobile_navi a').click(function(){
				var a			= $(this),
					mob_navi	= $('#mobile_navi'),
					top_navi	= $('#top_navi').length ? $('#top_navi') : false;
				if (top_navi)
				{
					if (top_navi.hasClass('expanded'))
					{
						mob_navi.removeClass('expanded');
						top_navi.removeClass('expanded');
					}
					else
					{
						mob_navi.addClass('expanded');
						top_navi.addClass('expanded');
					}
				}
				return false;
			});
		}
	},
	carousel:	function(){
		$('.carousel').carousel({interval: 3000});
	},
	init:	function(){
		hju.mobileNavi();
		hju.carousel();
	}
};
$(document).ready(function(){
	hju.init();
});
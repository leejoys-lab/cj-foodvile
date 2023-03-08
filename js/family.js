$('.call_sitemap').on('click', function (e) {
	$('#sitemap').show().focus();
  });
  $('#close_sitemap').on('click', function () {
	$('#sitemap').hide();
  });

	$('.selectbox a').on('click', function(e){
		e.preventDefault();
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
		}else{
			$(this).parent().addClass('on');
		}
	});
	$('#realtedSites button').on('click', function(e){
		e.preventDefault();
		if($('#realtedSite .selectbox').hasClass('on')){
			$('#realtedSite .selectbox').removeClass('on');
		}
	});
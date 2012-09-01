var SubUtil = {
	add: function(el){
		var STLabel = el.siblings('.subTaskInput').val(),
			STPriority = el.siblings('.prioritySelectSub').find('.prioritySubSlider').slider('value'),
			parentTaskLabel = el.parent().siblings(".mainTaskWrapper").find(".mainTaskLabel").text();
			STContents = $('<div class="subTask">\
									<div class="subMarker"></div>\
									<label class="subTaskLabel"></label>\
									<div class="subHolder"></div>\
									<div class="subOptions">\
										<ul>\
											<li id="subInfo">Details</li>\
											<li id="subEdit">Edit</li>\
											<li id="subDelete">Delete</li>\
										</ul>\
									</div>\
									<div class="checkButton"></div>\
									<div class="optTrigger"></div>\
								</div>');	
		
		STContents.find('.subTaskLabel').text(STLabel);
		MainUtil.mainTaskInfo[parentTaskLabel].subTasks.push(STLabel);
		
		if(STPriority == 2){
			STContents.attr("data-subPriority", "urgent").find(".subMarker").css("background","red");
		} else if(STPriority == 1){
			STContents.attr("data-subPriority", "normal").find(".subMarker").css("background","black");
		} else if(STPriority == 0){
			STContents.attr("data-subPriority", "low").find(".subMarker").css("background","blue");
		}
		
		el.parent().siblings(".mainTaskWrapper").find(".subTrigger").show();
		
		STContents.hide();
		el.parent().siblings(".subTaskWrapper").prepend(STContents);
		STContents.slideDown(100);
	}
	
	
}
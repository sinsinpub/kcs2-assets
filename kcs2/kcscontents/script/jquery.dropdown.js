/* =============================================================================
	jQuery Dropdown Plugin ver1.16
	Copyright(c) 2013, ShanaBrian
	Dual licensed under the MIT and GPL licenses.
============================================================================= */
(function($) {
	$.fn.dropdown = function(settings) {
		settings = $.extend({
			action				: 'click',	// マウスの動作 [ hover | click ]
			animate				: 'slide',	// アニメーションの種類 [ direct | slide ]
			animateDirection	: 'y',		// アニメーションの方向 [ y | x ]
			animateDuration		: 100,		// アニメーションの動作時間 [ ミリ秒 ]
			animateEasing		: 'linear',	// アニメーションのイージング
			actionElement		: 'li',		// actionを適用する要素
			targetElement		: 'ul',		// 開閉する要素
			textElement			: 'a',		// targetElementが存在する文字要素
			showClass			: '',		// 展開時targetElementに付加するClass名
			textClass			: '',		// targetElementが存在するtextElementに付加するClass名
			textOpenClass		: ''		// targetElementが展開状態のtextElementに付加するClass名
		}, settings);

		var ddElmt = $(settings.actionElement + ':has(' + settings.targetElement + ')', this);
		var start_op = {opacity : 0};

		ddElmt.each(function() {
			var aspect;
			var target = $('> ' + settings.targetElement, this);
			if(settings.animateDirection == 'y') {
				aspect = target.height();
				start_op.height = 0;
			} else if(settings.animateDirection == 'x') {
				aspect = target.width();
				start_op.width = 0;
			}
			if(settings.action == 'hover') {
				$(this).hover(function() {
					changeAction('show', target, aspect);
				}, function() {
					changeAction('hide', target, aspect);
				});
			} else if(settings.action == 'click') {
				$(this).click(function() {
					if(target.is(':hidden')) {
						changeAction('hide', $(this).siblings().find(settings.targetElement + ':not(:hidden)'), aspect);
						changeAction('show', target, aspect);
					} else {
						changeAction('hide', $(settings.targetElement, this), aspect);
					}
					return false;
				});
			}
			if(settings.textClass != '') {
				$('> ' + settings.textElement, this).addClass(settings.textClass);
			}
		});
		if(settings.animate == 'direct') {
			ddElmt.find(settings.targetElement).hide();
		} else if(settings.animate == 'slide') {
			ddElmt.find(settings.targetElement).animate(start_op, 0, 'linear', function(){$(this).hide()});
		}

		function changeAction(mode, target, aspect) {
			if(settings.showClass != '') {
				var base = target.parent();
				if(mode == 'show') {
					base.addClass(settings.showClass);
				} else {
					base.removeClass(settings.showClass);
				}
			}
			if(settings.textOpenClass != '') {
				var te = target.parent().find('> ' + settings.textElement);
				if(mode == 'show') {
					te.addClass(settings.textOpenClass);
				} else {
					te.removeClass(settings.textOpenClass);
				}
			}
			if(settings.animate == 'direct') {
				if(mode == 'show') {
					target.show();
				} else {
					target.hide();
				}
			} else if(settings.animate == 'slide') {
				var op = {opacity : 0};
				var num = 0;
				if(mode == 'show') {
					op.opacity = 1;
					num = aspect;
				}
				if(settings.animateDirection == 'y') {
					op.height = num;
				} else if(settings.animateDirection == 'x') {
					op.width = num;
				}
				target.show().stop().animate(
					op,
					{
						duration: settings.animateDuration,
						easing	: settings.animateEasing,
						complete: function() {
							if(!$.support.opacity) {
								this.style.removeAttribute('filter');
							}
							if(mode == 'hide') {
								$('> ' + settings.targetElement, this).not(':hidden').animate(start_op, 0).hide();
								$(this).hide();
							} else {
								$(this).css('overflow', 'visible');
							}
						}
					}
				);
			}
		}
		return this;
	}
})(jQuery);

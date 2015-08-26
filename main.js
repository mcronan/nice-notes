$(function(){ 

// for the toggle NOTES/LETTERS button

	$('.note-button').on('click', function(){
		$('.note-button').css({
			'color' : 'white',
			'background-color' : '#0d7087',
		})
	})

	$('.note-button').on('click', function(){
		$('.letter-button').css({
			'color' : '#0d7087',
			'background-color' : 'white',
		})
	})

	$('.letter-button').on('click', function(){
		$('.letter-button').css({
			'color' : 'white',
			'background-color' : '#0d7087',
		})
	})

	$('.letter-button').on('click', function(){
		$('.note-button').css({
			'color' : '#0d7087',
			'background-color' : 'white',
		})
	})


	$('.letter-button').on('click', function(){
		$('.letter-display').css({'display' : 'inline-block'})
		$('.note-display').css({'display' : 'none'})
	})

	$('.note-button').on('click', function(){
		$('.note-display').css({'display' : 'inline-block'})
		$('.letter-display').css({'display' : 'none'})
	})





})
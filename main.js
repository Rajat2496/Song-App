$("#submitbtn").click(function(){																								
	  var userName = $("input").val();																							//checking input box for more than 2 characters while login
							if(userName.length > 2)
										{
													$("p.user-name").append(userName);											//showing the contents of input box to the main body as a welcome message
													$('#main').removeClass('hidden');
													$('.welcome').addClass('hidden');
										}
							else{
								$("#input-name").addClass("error");
								alert('Name should be more than 3 characters')					//if characters less than 3, shows error
							}
});

$("input").keyup(function(event){
    if(event.keyCode == 13){																													//hit enter to click the Go button 
        $("#submitbtn").click();
    }
});


//song info
var songs = [
	{
        'name': 'Tamma Tamma Once Again',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
        'fileName': 'song1.mp3',
        'image': 'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
        'image': 'song2.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
        'image': 'song3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image': 'song4.jpg'
    }
    ]
   
	window.onload = function (){
		changeCurrentSongDetails(songs[0]);
	 	for(var i = 0; i < songs.length; i++) {
	        var obj = songs[i];
	        var name = '#song' + (i+1);
	        var song = $(name);
	        song.find('.song-name').text(obj.name);										//finding song name from song object
	        song.find('.song-artist').text(obj.artist);						//finding artist name
	        song.find('.song-album').text(obj.album);								//finding album name
	        song.find('.song-length').text(obj.duration);				//find song length
	        addSongNameClickEvent(obj, i + 1);
    	}
    	$('#songs').DataTable({																													//search bar
    		paging: false,
    	});
	}
	
	function toggleSong() {
		var song = document.querySelector('audio'); 															//toggle song play/pause on click
		if(song.paused) {
			song.play();	
		} else {
			song.pause();
		}
	}
	function addSongNameClickEvent(songObj, id) {																	//playing song from the song object
		var songName = songObj.name;
		var fileName = songObj.fileName
		var id = '#song' + id;
		function onClick(event){
		
			var song = document.querySelector('audio');
			var currentSong = song.src;
			if (currentSong.search(fileName) != -1) {
				toggleSong();
			} else {
				changeCurrentSongDetails(songObj);
				song.src = fileName; 
				song.play();	
			}
		}
		
		$(id).on('click', onClick);
	}
	function changeCurrentSongDetails(songObj) {
		var songPath = 'img/' + songObj.image;
	    $('.current-song-image').attr('src', songPath)
	    $('.current-song-name').text(songObj.name)
	    $('.current-song-album').text(songObj.album)
	}

function addSongEventListener(songName, position){
	var id = '#song' + position;
	
	$(id).on('click', function(event){
		var song = document.querySelector('audio');
		var currentSong = song.src;
		
		if(currentSong.search(songName) != -1){
			toggleSong();
		}else{ 
          song.src = songName;
			song.play();
		}
		
	});
}


$('body').on('keypress',function(event) {
								var target = event.target;
								if (event.keyCode == 32 && target.tagName != 'INPUT' )
								{
											var song = document.querySelector('audio');
											if(song.paused == true) {
											console.log('Playing');
													$('.fa-play').removeClass('fa-play').addClass('fa-pause');
													song.play();
								}
								else {
								console.log('Pausing');
											$('.fa-pause').removeClass('fa-pause').addClass('fa-play');
											song.pause();
							}
				}
});
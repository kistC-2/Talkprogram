
function speak() {
	var player = document.form.serifu.value;
	var com = "";
	document.form.serifu.value;
	if(!player) {
		return false;
		
		}else if
			(player.match(/^(ただいま|ただ)$/i)){
			com='お帰りなさい～！夕飯はもう食べた？';
		}else if
			(player.match(/^(食べた|たべた|食べたよ|たべたよ)$/i)){
			com='そっか、食べてきたんだね･･･';
		}else if
			(player.match(/^(食べてない|たべてない|まだ|まだだよ)$/i)){
			com='じゃあ夕飯作らないとね！和洋中、何が食べたいのかな？';
		}else if
			(player.match(/^(和食|和|和風)$/i)){
			com='和食かぁ･･･。ちなみに肉と魚、どっちの気分？(※和の肉or和の魚)';
				}else if
				(player.match(/^(和の肉)$/i)){
				com="それなら生姜焼きはどう？";
				}else if
				(player.match(/^(和の魚)$/i)){
				com='それならブリの照り焼きはどう？';
			
		}else if
			(player.match(/^(洋食|洋|洋風)$/i)){
			com='洋風だね。ちなみに肉と魚、どっちの気分？(※洋の肉or洋の魚)';
				}else if
				(player.match(/^(洋の肉)$/i)){
				com='それならチキンのトマト煮はどうかな？';
				}else if
				(player.match(/^(洋の魚)$/i)){
				com='それなら鮭のムニエルはどうかな？';
				
		}else if
		(player.match(/^(中華|中華料理|中)$/i)){
			com='中華いいね！ちなみに肉と魚介、どっちの気分？（※中華の肉or中華の魚介）';
			
				}else if
				(player.match(/^(中華の肉)$/i)){
				com='それならバンバンジーはどうかな？';
				}else if
				(player.match(/^(中華の魚介)$/i)){
				com='それならエビチリはどうかな？';
				
			}else if
			(player.match(/^(嫌|だめ|NO|No|やだ)$/i)){
			com='うーん･･･';
		}else if
		(player.match(/^(いいよ|OK|ok|おｋ|いいね)$/i)){
			com='よかった！';
			
		}else if
		(player.match(/^(どっちもいや|どっちも嫌|それ以外|どれもいや)$/i)){
			com='困ったときはラーメンで決まり！';
			
		}else if
		(player.match(/^(ありがとう|ありがとー|ありがと)$/i)){
			com='どういたしまして';
			
		}else if
		(player.match(/^(ばいばい|バイバイ|またね|またねー)$/i)){
			com='またね';
			
		}else if
		(player.match(/^(料理して|つくって|作って)$/i)){
			com='僕は作ってあげられないんだ･･･';
		
		}else if
		(player.match(/^(つかれた|疲れた)$/i)){
			com='おつかれさま！';
		
		}else if
		(player.match(/^(眠たい|ねむたい|ねむい|眠い)$/i)){
			com='おやすみなさい～';
			
		}else {
			com='ん･･･？';
		}
		document.form.comspeak.value = com;
		return false;
		}
		
myImage = new Array(
	"images/fun.png", "images/happy.png", "images/normal.png"
);
function change() {
	rnd = Math.floor(Math.random() * myImage.length);
	document.men.src = myImage[rnd];
}
'use strict';

function member_list(dai){
    let pass=[];
    let name=[];
    let shozoku;
    let img;
    let dannin;
    let num;
    let j = 0;
    switch(dai){
        case 1:
            pass = ['a-zu-','ettexi-','otyabe','onagi','oryou','kikki-','sho-ko','taisuke','desuku','hanatyan','hani-','besu','manakyun','mia','mi-shan','runrun'];
            name = ['あーずー','えってぃー','おちゃべ','おなぎ','おりょう','きっきー','しょーこねーさん','たいすけ','ですく','花ちゃん','はにー','べす','まなきゅん','みあ','みーしゃん','るんるん'];
            shozoku = 'th1';
            num = 15;
            break;
        case 2:
            pass = ['omu','tirutiru','nattyan','pikanii','pyontyan','be-si-','poxu','mei','moepi-','mottoxu-','yu-ka','yukako','yuririn','rogi-'];
            name = ['おむ','ちるちる','なっちゃん','ぴか兄','ぴょんちゃん','べーしー','ぽぅ','めい','もえぴー','もっとぅ','ゆーか','ゆかこ','ゆりりん','ろぎー'];
            shozoku = 'th2';
            num = 14;
            break;
        case 3:
            pass = ['ariana','ebimi','kamui','kinu','keroppi','sara-nu','seiran','tadaguti','tyurami','tyopi','toipurio','nenoko','haruka','parumu','peko','honorika','mayuppe','maruko-n','mitio','yuduna','rahuran','runati-','reieru'];
            name = ['ありあな','えびみ','カムイ','きぬ','けろっぴ','らら・さらーぬ','せいらん','たゞ口','ちゅらみ','ちょぴ','といぷりお','ねのこ','はるか','ぱるむ','ぺこ','ほのりか','まゆっぺ','まるこーん','みちお','ゆづな','らふらん','るなちー','れいえる'];
            shozoku = 'th3';
            num = 21;
            break;
        case 4:
            pass = ['itari','in','eme','ousama','ohana','oranju','kyameron','komati','jack','suichan','sebasu','soa','cha-ri-','teika','toluri','towako','shounagon','hisui','puteo','bejiyuki','pomumin','mani-','mamirin','marin','mimi','memehan','yo-guru','rimo-ne'];
            name = ['ぃたりい','院','えめ','おうさま','オハナ','おらんジュ','キャメロン','こまち','ジャック','すいちゃん','セバス','そあ','チャリ','ていか。','トゥリ','とわこ','なごん','ひすい','ぷて男','べじゆき','ぽむみん','まにー','まみりん','まりん','みみ','めめはん','よーぐる','りもーね',];
            shozoku = 'th4';
	    num = 30;
	    break;
    	case 5:
            pass = ['ana','usaramu','eden','koloria','semorina','takashi','tamagon','tekku','haku','marugototiwawa','merani-','yun','rinrin','ru-buru'];
            name = ['あな','うさらむ','エデン','こぉりあ','セモリナ','たかし','たまごん','てっく','白','まるごとちわわ','メラニー','ゆん','りんりん','るーぶる'];
            shozoku = 'th5';
	    num = 12;
	    break;
    	case 6:
	    pass = ['arisu','gaku','kirio','kuin','syeru','sikibu','jambo','sunsuke','tokimori','don','nimo','nerieru','hati','patora','biri','ponii','masamune','riida'];    
            name = ['有栖','楽','きりお','くいん','しぇる','しきぶ','ジャンボ','すんすけ','ときもり','ドン','ニモ','ねりえる','8','ぱとら','びりー','ぽにぃ','マサムネ','りーだぁ'];
	    shozoku = 'th6';
	    num = 19;
	    break;
	case 7:
	    pass = ['asagi','atamin','orumu','komugi','koremitu','sei','sion','soreiyu','tuyu','pikorin','foron','beru','pomerin','ravin','rate','riri-','ruxuna','rein','rebekka','romi','romio'];    
            name = ['あさぎ','あたみん','おるむ','こむぎ','文秀','犀','詩音','ソレイユ','つゆ','犀こりん','ふぉろん','べる','ぽめりん','らゔぃん','ラテ','リリー','るぅな','れいん','レベッカ','ろみ','ろみお'];
	    shozoku = 'th7';
	    num = 21;
	    break;
	default:
            break;
    }
    for(let item of pass) {
            img = `<a class="member" href="images_content/${shozoku}/${item}.JPG" data-lightbox="${shozoku}" data-tytle="個人紹介">
                        <img class="mem_img" src="images_intro/${shozoku}/${item}.JPG"><p>${name[j]}</p>
                    </a>`;
        document.getElementById(shozoku).insertAdjacentHTML('beforeend',img);
        j += 1;
    }
}

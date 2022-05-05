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
            pass = ['itarii','eme','ousama','ohana','oranju','kyameron','komati','shounagon','jack','soa','tya-ri-','teika','toxuri','towako','paitan','hisui','puteo','bejiyuki','pomumin','mani-','mamirin','marin','mimi','memehan','yo-guru','rimo-ne'];
            name = ['ぃたりい','えめ','おうさま','オハナ','おらんジュ','キャメロン','こまち','少納言','ジャック','そあ','チャーリー','ていか。','トゥリ','とわこ','ぱいたん','ひすい','ぷて男','べじゆき','ぽむみん','まにー','まみりん','まりん','みみ','めめはん','よーぐる','りもーね',];
            shozoku = 'th4';
	    break;
        default:
            memb = [];
            break;
    }
    for(let item of pass) {
            img = `<div class="member"><img class="mem_img" src="images_intro/${shozoku}/${item}.JPG"><p>${name[j]}</p></div>`;
        document.getElementById(shozoku).insertAdjacentHTML('beforeend',img);
        j += 1;
    }
}

let hiyoko = {
    name: "ぴよ",

    age: 0,
    stage: "🥚たまご期",

    love: 50,
    selfish: 80,
    vegetable: 100,
    stress: 20,

    joke: 0,
    dance: 0,

    cleanCount: 0,

    personality:{
        sweet:0,
        funny:0,
        strict:0
    },

    stickers:[],
    toys:[]
};


// 表示更新
function update(){

    document.getElementById("name").textContent = hiyoko.name;
    document.getElementById("stage").textContent = hiyoko.stage;

    document.getElementById("love").textContent = hiyoko.love;
    document.getElementById("selfish").textContent = hiyoko.selfish;
    document.getElementById("vegetable").textContent = hiyoko.vegetable;
    document.getElementById("stress").textContent = hiyoko.stress;
    document.getElementById("joke").textContent = hiyoko.joke;
    document.getElementById("dance").textContent = hiyoko.dance;


    let face="🐥";


    if(hiyoko.stress >= 80){
        face="💢🐥";
    }
    else if(hiyoko.love >= 80){
        face="🥺🐥";
    }
    else if(hiyoko.dance >=50){
        face="✨🐥✨";
    }


    document.getElementById("pet").textContent=face;


    personalityCheck();


    document.getElementById("stickerBook").textContent =
    hiyoko.stickers.join(" ") || "まだない";


    document.getElementById("toyBook").textContent =
    hiyoko.toys.join(" ") || "まだない";


    saveGame();
}




function say(text){

    document.getElementById("message").textContent=text;

    update();
}




// 性格判定
function personalityCheck(){

    let p="普通のひよこ";


    if(hiyoko.selfish > 100){
        p="😤わがままひよこ";
    }

    if(hiyoko.love > 100){
        p="🥺甘えんぼひよこ";
    }

    if(hiyoko.joke > 50){
        p="😂おもしろひよこ";
    }

    if(hiyoko.dance > 80){
        p="💃ダンサーひよこ";
    }


    document.getElementById("personality").textContent=p;

}




// 食べ物

function giveVegetable(){

    hiyoko.vegetable+=5;
    hiyoko.stress+=10;

    say("🐥「やだぁぁ！！葉っぱしゃん！！🥺");

}



function giveSnack(){

    hiyoko.love+=5;
    hiyoko.selfish+=3;
    hiyoko.stress-=10;

    say("🐥「ケーキ最高だもん！！🍰");

}




function giveDrink(){

    hiyoko.love+=7;

    say("🐥「🧋もちもちしゃん！！");

}




function giveWatermelon(){

    hiyoko.joke+=10;
    hiyoko.love+=3;

    say("🐥「皮だけ！？赤いところは！？😂");

}





// 遊び

function giveToy(){

    hiyoko.toys.push("🧸ぬいぐるみ");

    hiyoko.love+=10;
    hiyoko.selfish+=5;

    say("🐥「おもちゃ買ってーー！！🥺");

}



function giveSticker(){

    hiyoko.stickers.push("⭐");

    hiyoko.love+=8;

    say("🐥「シール宝物にするもん！！✨");

}



function hug(){

    hiyoko.love+=15;
    hiyoko.stress-=20;

    say("🐥「だっこ落ち着くもん🥺");

}



function dance(){

    hiyoko.dance+=10;
    hiyoko.joke+=3;
    hiyoko.love+=5;

    say("🐥「ぴよぴよダンス！！💃");

}





// 掃除

function clean(){

    hiyoko.cleanCount++;


    if(hiyoko.cleanCount===1){

        say("🐥「掃除するもん！！（雑巾ぶんぶん）");

    }

    else if(hiyoko.cleanCount===2){

        say("🐥「やだーー😭（雑巾ぽいっ）");

    }

    else{

        say("🐥「かいぬしのいじわるーー😭");

    }

}



// 成長

function grow(){

    hiyoko.age++;


    if(hiyoko.age>=3){

        hiyoko.stage="🐥ひよこ期";
    }

    if(hiyoko.age>=10){

        hiyoko.stage="🐤成長ひよこ";
    }


    update();

}




// セーブ

function saveGame(){

    localStorage.setItem(
        "hiyokoSave",
        JSON.stringify(hiyoko)
    );

}




function loadGame(){

    let data=localStorage.getItem("hiyokoSave");


    if(data){

        hiyoko=JSON.parse(data);

        say("🐥「戻ってきたもん！！");

    }

}




function resetGame(){

    localStorage.removeItem("hiyokoSave");

    location.reload();

}




// 最初の表示

update();

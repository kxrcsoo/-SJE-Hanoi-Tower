const easy = document.getElementById("btn-easy");
const normal = document.getElementById("btn-normal");
const hard = document.getElementById("btn-hard");

easy.addEventListener('mouseover', () => {
    $("#desc").html("A könnyű nehézségi szinten három darab korongot kell áthelyezned az első oszlopról a harmadikra.");
});
  
easy.addEventListener('mouseout', () => {
    $("#desc").html("");
});


normal.addEventListener('mouseover', () => {
    $("#desc").html("A normál nehézségi szinten hat darab korongot kell áthelyezned az első oszlopról a harmadikra.");
});
  
normal.addEventListener('mouseout', () => {
    $("#desc").html("");
});


hard.addEventListener('mouseover', () => {
    $("#desc").html("A nehéz nehézségi szinten nyolc darab korongot kell áthelyezned az első oszlopról a harmadikra.");
});
  
hard.addEventListener('mouseout', () => {
    $("#desc").html("");
});

function startTheGame(difficulty) {
    if (difficulty == 1) {
        window.location.href = "./game/easy/index.html";
    }
    if (difficulty == 2) {
        window.location.href = "./game/normal/index.html";
    }
    if (difficulty == 3) {
        window.location.href = "./game/hard/index.html";
    }
}

function showRules() {
    window.location.href = "rules.html";
}
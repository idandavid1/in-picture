'use strict'

var gQuests
var gCurrQuestIdx
var nextId

function initGame() {
    nextId = 1
    gQuests = createQuests()
    gCurrQuestIdx = 0
    const elDivWin = document.querySelector('.win')
    elDivWin.style.display = 'none'
    renderQuest()
}


function createQuests() {
    return [
        { id: nextId++, opts: ['dog', 'lion', 'cat'], correctOptIndex: 0 },
        { id: nextId++, opts: ['elephant', 'panda', 'cat'], correctOptIndex: 1 },
        { id: nextId++, opts: ['giraffe', 'lion', 'rabbit'], correctOptIndex: 0 },
        { id: nextId++, opts: ['dog', 'lion', 'cat'], correctOptIndex: 1 },
        { id: nextId++, opts: ['dog', 'lion', 'tiger'], correctOptIndex: 2 },
        { id: nextId++, opts: ['giraffe', 'elephant', 'goat'], correctOptIndex: 1 },
        { id: nextId++, opts: ['rabbit', 'lion', 'parrot'], correctOptIndex: 2 },
        { id: nextId++, opts: ['rabbit', 'lion', 'zebra'], correctOptIndex: 2 }
    ]
}

function renderQuest() {
    var strHTML = ''
    strHTML += `<img src="img/${gQuests[gCurrQuestIdx].id}.jpg"><br>`
    const opts = gQuests[gCurrQuestIdx].opts
    for (var i = 0; i < opts.length; i++) {
        strHTML += `<button onclick="checkAnswer(${i}, this)">${opts[i]}</button>`
    }
    const elDiv = document.querySelector('.game')
    elDiv.innerHTML = strHTML
    console.log(elDiv);
}

function checkAnswer(optIdx, elButton) {
    if (optIdx !== gQuests[gCurrQuestIdx].correctOptIndex) {
        elButton.style.backgroundColor = 'red'
        return
    }

    gCurrQuestIdx++
    if (gCurrQuestIdx === gQuests.length) {
        const elDivWin = document.querySelector('.win')
        elDivWin.style.display = 'block'
    }
    renderQuest()
}

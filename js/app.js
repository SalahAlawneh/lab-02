"use strict";

function card(ele) {
    this.keyword = ele.keyword;
    this.image_url = ele.image_url;
    this.title = ele.title;
    this.description = ele.description;
    this.horns = ele.horns;
}

card.prototype.render = function () {
    let card = $("#photo-template").clone();
    card.find("img").attr("src", this.image_url);
    console.log(this.image_url);
    card.find("h2").text(this.title);
    card.find("p").text(this.description);
    $("main").append(card);
    card.removeAttr('id');
}

$(document).ready(() => {

    $.ajax({ url: "data/page-1.json", dataType: 'json' }).then(function (data) {
        data.forEach(element => {
            let newCard = new card(element);
            newCard.render();
            newCard.appendSelector();
        });

    });

})

card.prototype.appendSelector = function () {
    let clonedOption = $("#opiton").clone();
    $("select").append(clonedOption);
    clonedOption.text(this.keyword);
    // clonedOption.val(this.keyword);

}
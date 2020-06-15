$(document).ready(function()
{
    $("<p>Wow, I precede the image!</p>").insertBefore("img:first");
    $("<p>Hey, I come in last</p>").insertAfter("img:first");
});

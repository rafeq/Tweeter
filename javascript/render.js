const renderPosts = function (posts) {
    $("#posts").empty()
    for (let indexOfPost = 0; indexOfPost < posts.length; indexOfPost++) {
        let newPost = (`<div class="post" id="${posts[indexOfPost]['id']}" > <h2>${posts[indexOfPost]['text']}</h2> </div>`)
        $("#posts").append(newPost)
        let divForComments = `<div id="pc${posts[indexOfPost]['id']}"></div>`;
        $(`#${posts[indexOfPost]['id']}`).append(divForComments);
        $(`#pc${posts[indexOfPost]['id']}`).empty()
        for (let indexOfComments = 0; indexOfComments < posts[indexOfPost]['comments'].length; indexOfComments++) {
            newComment = (`<div><div class="delete-comment"  data-commentId="${posts[indexOfPost]['comments'][indexOfComments]['id']}" data-postId="${posts[indexOfPost]['id']}"> X </div> ${posts[indexOfPost]['comments'][indexOfComments]['text']}</div>`)
            $(`#pc${posts[indexOfPost]['id']}`).append(newComment);
        }
        $(`#pc${posts[indexOfPost]['id']}`).append(`<div class="comment"  data-id="${posts[indexOfPost]['id']}"><button>comment</button> </div><input type="text" id="commentInput"> <br>`)
        let deleteButton = (`<div class="delete" data-id="${posts[indexOfPost]['id']}"> <button>delete</button> </div>`)
        $(`#pc${posts[indexOfPost]['id']}`).append(deleteButton)
    }
}




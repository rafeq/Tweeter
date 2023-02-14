
post = function () {
    const text = $("input").val()
    tweeter.addPost(text)
    renderPosts(tweeter.getPosts())
}

addComment = function () {
    const comment = $("#commentInput").val()
    postId = $(this).data("id")
    tweeter.addComment(comment, postId)
    renderPosts(tweeter.getPosts())
}

deletePost = function () {
    postId = $(this).data("id")
    tweeter.removePost(postId)
    renderPosts(tweeter.getPosts())
}

removeComment=function(){
    let postId = $(this).data('postid')
    let commentId = $(this).data('commentid')
    tweeter.removeComment(postId,commentId)
    renderPosts(tweeter.getPosts())
}

$("#posts").on("click", ".delete", deletePost)

$("#posts").on("click",".comment", addComment)

$("#posts").on("click",".delete-comment", removeComment)




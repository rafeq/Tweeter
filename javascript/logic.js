const Tweeter = function () {

    _postsArray = []
    
    let _postIdCounter = 1
    let _commentIdCounter = 1

    const getPosts = function () {
        return _postsArray
    }

    const addPost = function (postText) {
        
        let newPost = {
            text: postText,
            id: "p" + _postIdCounter,
            comments: []
        }
        _postsArray.push(newPost)
        _postIdCounter++
    }

    const removePost = function (postID) {
        for (let index = 0; index < _postsArray.length; index++) {
            if (_postsArray[index].id == postID) {
                _postsArray.splice(index, 1)
            }
        }
    }

    const addComment = function (comment,postID) {
        let newComment = {
            text: comment,
            id: "c" + _commentIdCounter
        }
        for (let index = 0; index < _postsArray.length; index++) {
            if (_postsArray[index]["id"] == postID) {
                _postsArray[index].comments.push(newComment)            }
        }
        _commentIdCounter++
    }

    const removeComment = function (postID, commentID) {
        for (let postIndex = 0; postIndex < _postsArray.length; postIndex++) {
            if (_postsArray[postIndex]["id"] == postID) {
                
                for (let commentIndex = 0; commentIndex < 3; commentIndex++) {
                   
                    if (_postsArray[postIndex].comments[commentIndex].id == commentID) {
                        _postsArray[postIndex].comments.splice(commentIndex, 1)
                    }
                }
            }
        }
    }

    return {
        addPost: addPost,
        getPosts: getPosts,
        removePost: removePost,
        addComment: addComment,
        removeComment:removeComment
    }
}

const tweeter = Tweeter()




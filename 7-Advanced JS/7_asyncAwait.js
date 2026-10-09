function fetchPostData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post Data fetched") ; 
        }, 3000);
    })
}

function fetchCommentData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Comment Data fetched") ; 
        }, 3000);
    })
}

async function getBlogData() {
    try {
        console.log("Fetching blog data...");
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();

        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData(),]);

        console.log("Post Data fetched");
        console.log("Comment data fetched");
        console.log("Data fetching completed.");
        
    } catch (error) {
        console.log("Error fetching blog data", error);
        
    }
}

getBlogData();
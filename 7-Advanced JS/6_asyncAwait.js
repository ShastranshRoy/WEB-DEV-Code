function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if(success == true){
                resolve({name: "DuduBubu Company", URL: "https://dudububu.com"})
            }
            else{
                reject("File crashed");
            }
            
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log("Fetching user data....");
        
        const UserData = await fetchUserData()
        console.log("User Data:", UserData);
        console.log("User Data fetched successfully");
        
        
    } catch (error) {
        console.log("Error fetching data", error);
        
        
    }
    
}

getUserData();
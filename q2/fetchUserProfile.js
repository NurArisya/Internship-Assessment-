//Question 2
//Async Data Fetching

async function fetchUserProfile(userId){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if(!response.ok){
            throw new Error("User not found");
        }

        const user = await response.json();

        return {
            name: user.name,
            email: user.email,
        };
    }
    catch(error){
        console.error(error);
    }
}

fetchUserProfile(1).then(result => console.log(result));

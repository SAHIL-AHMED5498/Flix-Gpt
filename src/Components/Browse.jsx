import useUserContext from "../utils/useUserContext"


const Browse=()=>{
  


    const {user}=useUserContext();
    console.log(user);
      if (!user) {
    return <div className="relative top-14">Loading...</div>; // or redirect, or spinner
  }

    const {displayName,email,userId}=user;
 


    return(
      <div className="relative top-14"><h1>hello {displayName} your email is {email} and assigned id is {userId}</h1></div>
    )

}

export default Browse
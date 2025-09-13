function Profile(){
    const name='pavansai'
    const age=18
    const isstudent=true
    return(
        <div>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>{isstudent===true?"i am a student":"i am not a student"}</p>
        
        </div>
    )
}
export default Profile
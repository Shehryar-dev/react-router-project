import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/Shehryar-dev')
        .then(response => response.json()).then(data => {
            setData(data);
        })
    })
    return (
        <div className='text-center'>
          
            GitHub Profile User Name: {data.login} <br/>
            GitHub Profile Full Name: {data.name} <br/>
            GitHub Followers: {data.followers} <br/>
            GitHub bio: {data.bio} <br/>
            GitHub Public Repo: {data.public_repos} <br/>
            GitHub Followers: {data.following} <br/>
            <img src={data.avatar_url} alt="" />
            {/* {    "html_url": "https://github.com/Shehryar-dev",
    "followers_url": "https://api.github.com/users/Shehryar-dev/followers",
    "following_url": "https://api.github.com/users/Shehryar-dev/following{/other_user}",} */}
        </div>
    )
}

export default Github



import React, { createContext, useContext, useState } from 'react'

const API_URL = "https://api.github.com/users"

const GithubSearchContext = createContext({
    userDetails: null,
    setUserDetails: (userDetails) => { }
})


function SearchInput() {
    const [username, setUsername] = useState("")

    const {setUserDetails} = useContext(GithubSearchContext)

    function searchUserDetailsOnGithub() {

        if (username == "") {
            alert("Please enter your Github username")
            return
        }

        fetch(`${API_URL}/${username}`).then((response) => {
            return response.json()
        }).then((data) => {

            // if (data?.message) {
            //     alert("Username not found")
            //     return
            // }
            // hydrateUserDetails(data)
            // details of the user

            setUserDetails(data)

        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        searchUserDetailsOnGithub()
    }

    return (
        <form className="flex items-center gap-1" onSubmit={handleSubmit}>
            <input type="search" placeholder="Enter your Github username" name="username"
                className="border border-gray-300 rounded p-2 flex-grow" onInput={(e) => setUsername(e.target.value)} />
            <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded">Search</button>
        </form>
    )
}


function UserDetails() {

    const {userDetails} = useContext(GithubSearchContext)

    return (

        !userDetails ? <></> : (userDetails?.message ? <p className='text-red-400'> User details not found </p> :

            <div className="details-container mt-10">

                <div className="flex items-center gap-1">
                    <img src={userDetails?.avatar_url} alt="User Image" id="user-image" className="w-10 h-10 rounded-full shadow" />
                    <a id="username-text" target="_blank" href={userDetails?.html_url} className="text-gray-800 text-lg font-semibold">
                        {userDetails?.login}
                    </a>
                </div>


                <ul className="mt-4 flex flex-col gap-1">
                    <li id="followers-count" className="text-gray-500 font-semibold">
                        Followers : {userDetails?.followers}
                    </li>
                    <li id="public-repos" className="text-gray-500 font-semibold">
                        Public Repos : {userDetails?.public_repos}
                    </li>
                </ul>

            </div>)

    )
}


function GithubSearch() {
    return (
        <div className="max-w-2xl mx-auto p-2">
            <SearchInput />
            <UserDetails />
        </div>

    )
}



export default function GithubSearchProvider() {
    const [userDetails, setUserDetails] = useState(null)
    return (
        <GithubSearchContext.Provider value={{ userDetails, setUserDetails }}>
            <GithubSearch />
        </GithubSearchContext.Provider>
    )
}
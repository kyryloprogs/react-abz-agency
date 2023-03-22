import UserCard from "./UserCard";



const GetSection = ({ users, countOfPages, setPageNumber, pageNumber }) => {

    const updateUsers = () => {
        setPageNumber(pageNumber + 1)
    } 

    return (
        <section className='getskills'>
            <div className="container">
                <div className="skills_header">
                    Working with GET request
                </div>

                <div className="users_list">
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
                {countOfPages > pageNumber && (
                    <div className="add_more_btn" onClick={() => updateUsers()}>Show more</div>
                )}
                    
            </div>
        </section>
    )
}

export default GetSection
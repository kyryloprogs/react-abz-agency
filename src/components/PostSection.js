import { useState } from 'react'

const PostSection = ({ positionList }) => {

    const [formData, setFormData] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [positionID, setPositionID] = useState(1);
    const [photo, setPhoto] = useState("");

    const handleChange = (event) => {
        
        const name = event.target.name;
        const value = event.target.value;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = () => {

    };

    return (
        <section className='postskills'>
            <div className="container">
                <div className="skills_header">
                    Working with POST request
                </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input 
                        className="name" 
                        name="name" 
                        type="text" 
                        placeholder='Your name' 
                        value={formData.name || ""} 
                        onChange={handleChange}/>
                    </label>
                    <label>
                        <input 
                        className="name" 
                        name="email" 
                        type="email" 
                        placeholder='Email' 
                        value={formData.email || ""} 
                        onChange={handleChange} 
                        />
                    </label>
                    <label>
                        <input 
                        className="name" 
                        name="phone" 
                        type="phone" 
                        placeholder='Your name' 
                        value={formData.phone || ""} 
                        onChange={handleChange} 
                        />
                        <div className="phone_help">+38 (XXX) XXX - XX - XX</div>
                    </label>

                    <div className="radiogroup">
                        Select your position
                        {positionList.map(position => (
                            <label key={position.id} className='radioButton'>
                                <input
                                    type="radio"
                                    name='position'
                                    id={position.id}
                                    value={position.id}
                                    checked={(formData.position || "1") === position.id.toString()}
                                    onChange={handleChange}
                                />
                                {position.name}
                            </label>
                        ))}

                    </div>
                    <input className="name" name="file" type="file" placeholder='Your name' value={name} onChange={handleChange} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
    )
}

export default PostSection
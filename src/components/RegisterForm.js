import { useState, useEffect } from 'react'


const RegisterForm = ({ positionList, setIsSended, setPageNumber, setUsers }) => {

    const [formData, setFormData] = useState({ position_id: "1" });
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});

    const updateData = () => {
        setIsSended(true);
        setPageNumber(1);
        setTimeout(() => {
            fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`)
            .then((response) => response.json())
            .then((data) => setUsers(data.users))
            .catch((error) => console.log(error));
        }, 1000)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        let value;

        switch (name) {
            case "photo":
                value = event.target.files[0];
                break;
            case "email":
                value = event.target.value.toLowerCase();
                break;
            default:
                value = event.target.value;
        }

        setFormData({ ...formData, [name]: value })
    }

    const onGetData = async (response) => {
        let form_data = new FormData();
        for (let key in formData) {
            form_data.append(key, formData[key]);
        }

        if (response.success) {
            fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
                {
                    method: 'POST',
                    body: form_data,
                    headers: {
                        "Token": response.token,
                    },
                }).then(response => response.json())
                .then(result => {
                    if (result.success) {
                        updateData();
                    }
                })
                .catch(error => console.log(error));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        isDisabled(true);
        fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token")
            .then(response => response.json())
            .then(data => onGetData(data))
            .catch((error) => console.log(error));
    };

    const isDisabled = (submit = false) => {
        (formData.name &&
            formData.email &&
            formData.phone &&
            formData.photo &&
            setIsValid(true));
        const errorList = {};

        if (submit) {
            //Name
            if (!formData["name"]) {
                setIsValid(false);
                errorList["name"] = "Cannot be empty";
            }
            //Email
            if (!formData["email"]) {
                setIsValid(false);
                errorList["email"] = "Cannot be empty";
            }
            //Phone
            if (!formData["phone"]) {
                setIsValid(false);
                errorList["phone"] = "Cannot be empty";
            }
            //Photo
            if (!formData["photo"]) {
                setIsValid(false);
                errorList["photo"] = "Cannot be empty";
            }
        }

        if (formData["name"]) {
            if (!formData["name"].match(/^[a-zA-Z]+$/)) {
                setIsValid(false);
                errorList["name"] = "Only letters";
            }
        }

        if (formData["email"]) {
            if (!formData["email"].match(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/)) {
                setIsValid(false);
                errorList["email"] = "Wrong format";
            }

        }
        if (formData["phone"]) {
            if (!formData["phone"].match(/^[\+]{0,1}380([0-9]{9})$/)) {
                setIsValid(false);
                errorList["phone"] = "Wrong format";
            }
        }
        if (formData["phone"]) {
            if (!formData["phone"].match(/^[\+]{0,1}380([0-9]{9})$/)) {
                setIsValid(false);
                errorList["phone"] = "Wrong format";
            }
        }
        if (formData["photo"]) {
            let allErrors = "";
            if (!formData["photo"].name.endsWith(".jpg") && !formData["photo"].name.endsWith(".jpeg")) {
                setIsValid(false);
                allErrors += "Wrong format (only jpeg or jpg). ";
            }
            if (formData["photo"].size > (7 * 1024 * 1024)) {
                setIsValid(false);
                allErrors += "Max size of photo - 7 mb. ";
            }
            if (allErrors.length > 0) {
                errorList["photo"] = allErrors;
            }
        }
        setErrors(errorList);
    };


    useEffect(() => {
        isDisabled();
    }, [formData]);

    return (
        <section className='postskills'>
            <div className="container">
                <div className="skills_header">
                    Working with POST request
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="material-textfield">
                        <input
                            style={errors.name && { border: "2px solid #CB3D40" }}
                            name="name"
                            type="text"
                            value={formData.name || ""}
                            onChange={handleChange}
                            placeholder=" "
                        />
                        <label className={`text_label ${errors.name && "text_error"}`}>Your name</label>
                    </div>
                    <div className={`input_error ${!errors.name && "hidden"}`}>{errors.name}</div>

                    <div className="material-textfield">
                        <input
                            style={errors.email && { border: "2px solid #CB3D40" }}
                            name="email"
                            type="email"
                            placeholder=" "
                            value={formData.email || ""}
                            onChange={handleChange}
                        />
                        <label className={`text_label ${errors.email && "text_error"}`}>Email</label>
                    </div>
                    <div className={`input_error ${!errors.email && "hidden"}`}>{errors.email}</div>
                    <div className="material-textfield">
                        <input
                            style={errors.phone && { border: "2px solid #CB3D40" }}
                            name="phone"
                            type="phone"
                            placeholder=" "
                            value={formData.phone || ""}
                            onChange={handleChange}
                        />
                        <label className={`text_label ph ${errors.phone && "text_error"}`}>Phone</label>
                        <div className="phone_help">+38 (XXX) XXX - XX - XX</div>
                    </div>
                    <div className={`input_error ${!errors.phone && "hidden"}`}>{errors.phone}</div>

                    <div className="radiogroup">
                        Select your position
                        {positionList.map(position => (
                            <label key={position.id} className='radioButton'>
                                <div className='round'>
                                    <input
                                        type="radio"
                                        name='position_id'
                                        id={position.id}
                                        value={position.id}
                                        checked={formData.position_id.toString() === position.id.toString()}
                                        onChange={handleChange}
                                    />
                                </div>
                                {position.name}
                            </label>
                        ))}

                    </div>
                    <label>
                        <input
                            style={errors.photo && { border: "2px solid #CB3D40" }}
                            name="photo"
                            type="file"
                            onChange={handleChange}
                        />
                    </label>
                    <div className={`input_error ${!errors.photo && "hidden"}`}>{errors.photo}</div>
                    <input className={`yellowBtn ${isValid ? "" : "disabled"}`} disabled={!isValid} type="submit" value="Submit" />
                </form>
            </div>
        </section>

    )
}

export default RegisterForm
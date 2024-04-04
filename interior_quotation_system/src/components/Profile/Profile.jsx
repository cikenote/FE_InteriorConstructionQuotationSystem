import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./style.scss"
const Profile = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        console.log("Making API call...");
        fetchAPI();
    }, []);

    const fetchAPI = async () => {
        try {
            const response = await axios.get("https://swp391api.developvn.click/api/User/info");
            if (response.data && response.data) {
                setUser(response.data);
            } else {
                console.log("Error fetching articles: Response data or responses are undefined");
            }
        } catch (error) {
            console.log("Error fetching articles: ", error);
        }
    };
    return (
        <div className="container-xl px-4 mt-4 profile-container">
            <div className="row">
                <div className="col-xl-4">
                    {/* Profile picture card*/}
                    <div className="card mb-4 mb-xl-0">
                        <div className="card-header text-center">Avatar</div>
                        <div className="card-body text-center pt-5 pb-5">
                            {/* Profile picture image*/}
                            <img
                                className="img-account-profile rounded-circle mb-2"
                                src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    {/* Account details card*/}
                    <div className="card mb-4">
                        <div className="card-header text-center">Account Details</div>
                        <div className="card-body">
                            <form>
                                {/* Form Group (username)*/}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputUsername">
                                        Username
                                    </label>
                                    <input
                                        className="form-control"
                                        id="inputUsername"
                                        type="text"
                                        placeholder="Enter your username"
                                        defaultValue= {`${user.username}`}
                                        readOnly={true}
                                    />
                                </div>
                                {/* Form Row*/}
                                <div className="row gx-3 mb-3">
                                    {/* Form Group (first name)*/}
                                    <div className="col-md-6 col-md-12 ">
                                        <label className="small mb-1" htmlFor="inputFirstName">
                                            Full Name
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputFirstName"
                                            type="text"
                                            placeholder="Enter your first name"
                                            defaultValue={`${user.fullname}`}
                                            readOnly={true}
                                        />
                                    </div>
                                </div>
                                {/* Form Group (email address)*/}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputEmailAddress">
                                        Email address
                                    </label>
                                    <input
                                        className="form-control"
                                        id="inputEmailAddress"
                                        type="email"
                                        placeholder="Enter your email address"
                                        defaultValue={`${user.email}`}
                                        readOnly={true}
                                    />
                                </div>
                                {/* Form Row*/}
                                <div className="row gx-3 mb-3">
                                    {/* Form Group (phone number)*/}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputPhone">
                                            Phone number
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputPhone"
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            defaultValue={`${user.phoneNumber}`}
                                            readOnly={true}
                                        />
                                    </div>
                                    {/* Form Group (birthday)*/}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputBirthday">
                                            Birthday
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputBirthday"
                                            type="text"
                                            name="birthday"
                                            placeholder="Enter your birthday"
                                            defaultValue={`${user.birthdate}`}
                                            readOnly={true}
                                        />
                                    </div>
                                </div>
                                {/* Save changes button*/}
                                {/*<button className="btn btn-primary" type="button">*/}
                                {/*    Save changes*/}
                                {/*</button>*/}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
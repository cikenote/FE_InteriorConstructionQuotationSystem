import React from "react";
import "../../styles/pages/loginPage.scss";
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const RegisterPage = () => {
    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const [validator] = React.useState(
        new SimpleReactValidator({
            className: "errorMessage",
        })
    );

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: "",
                full_name: "",
                password: "",
                confirm_password: "",
            });
            validator.hideMessages();
            toast.success("Registration Complete successfully!");
            router.push("/login");
        } else {
            validator.showMessages();
            toast.error("Empty field is not allowed!");
        }
    };
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>Signup</h2>
                <p>Signup your account</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Full Name"
                                variant="outlined"
                                name="full_name"
                                label="Name"
                                // InputLabelProps={{
                                //     shrink: true,
                                // }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                // InputLabelProps={{
                                //     shrink: true,
                                // }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                variant="outlined"
                                name="password"
                                label="Password"
                                // InputLabelProps={{
                                //     shrink: true,
                                // }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Confirm Password"
                                variant="outlined"
                                name="confirm_password"
                                label="Confirm Password"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button
                                    fullWidth
                                    className="cBtnTheme"
                                    type="submit"
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                            <Grid className="loginWithSocial">
                                <Button className="google">
                                    <img src="../../public/images/google_icon.png"></img>
                                    <p>Continue with Google</p>
                                </Button>
                            </Grid>
                            <p className="noteHelp">
                                Already have an account?{" "}
                                <a href="/login">Return to Sign In</a>
                            </p>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default RegisterPage;

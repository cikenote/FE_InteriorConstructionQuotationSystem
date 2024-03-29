import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../styles/pages/loginPage.scss";

const ForgotPassword = () => {
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
            });
            validator.hideMessages();
            toast.success("You successfully Reset!");
            router.push("/login");
        } else {
            validator.showMessages();
            toast.error("Empty field is not allowed!");
        }
    };
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>Forgot Password</h2>
                <p>Reset your account password</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
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
                            <Grid className="formFooter">
                                <Button
                                    fullWidth
                                    className="cBtn cBtnLarge cBtnTheme"
                                    type="submit"
                                >
                                    Resend Password
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

export default ForgotPassword;

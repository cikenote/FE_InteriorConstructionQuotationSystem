import React, { useState } from "react";
import "../../styles/pages/loginPage.scss";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SimpleReactValidator from "simple-react-validator";
import GoogleIcon from "@mui/icons-material/Google";

const LoginPage = () => {
    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({ ...value, remember: !value.remember });
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
                password: "",
                remember: false,
            });
            validator.hideMessages();

            const userRegex = /^user+.*/gm;
            const email = value.email;

            if (email.match(userRegex)) {
                toast.success("You successfully Login on Arkio !");
                router.push("/");
            }
        } else {
            validator.showMessages();
            toast.error("Empty field is not allowed!");
        }
    };
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>Sign In</h2>
                <p>Sign in to your account</p>
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
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                variant="outlined"
                                name="password"
                                type="password"
                                label="Password"
                                // InputLabelProps={{
                                //     shrink: true,
                                // }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formAction">
                                <FormControlLabel
                                    control={
                                        <Checkbox onChange={rememberHandler} />
                                    }
                                    label="Remember Me"
                                />
                                <a href="/forgot-password">Forgot Password?</a>
                            </Grid>
                            <Grid className="formFooter">
                                <Button
                                    fullWidth
                                    className="cBtnTheme"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid className="loginWithSocial">
                                <Button className="google">
                                    <img src="../../public/images/google_icon.png"></img>
                                    <p>Continue with Google</p>
                                </Button>
                            </Grid>
                            <p className="noteHelp">
                                Don't have an account?{" "}
                                <a href="/register">Create free account</a>
                            </p>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default LoginPage;

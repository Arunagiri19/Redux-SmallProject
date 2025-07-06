import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { AppDispatch } from "../Store/Store";
import { saveuser } from "../features/studentSlice";
const Login = () => {
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [nameError, setNameError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const navigate = useNavigate()

    const dispatch = useDispatch<AppDispatch>();
    const clickHandle = () => {
        let hasError = false;

        if (name.trim() === '') {
            setNameError(true);
            hasError = true;
        }

        if (password.trim() === '') {
            setPasswordError(true);
            hasError = true;
        }

        if (hasError) return;
        setNameError(false);
        setPasswordError(false);

        dispatch(saveuser({ name, password }))
        navigate('./review')
    }

    return (
        <>
            <section className="w-full h-full bg-gradient-to-bl from-blue-200 to-purple-400 flex justify-center items-center px-4">
                <div className=" w-full max-w-md bg-gray-300 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-6">
                    <h1 className="text-3xl sm:text-3xl  font-bold text-purple-800"> Login Page</h1>

                    <TextField
                        className="w-full"
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            if (e.target.value.trim() !== '') setNameError(false);
                        }}
                        error={nameError}
                        helperText={nameError ? "Name is required" : ""}
                    />

                    <TextField
                        className="w-full"
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (e.target.value.trim() !== '') setPasswordError(false);
                        }}
                        error={passwordError}
                        helperText={passwordError ? "Password is required" : ""}
                    />

                    <Button
                        variant="contained"
                        onClick={clickHandle}
                        className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-200"
                    >
                        Login
                    </Button>
                </div>
            </section>

        </>
    )
}

export default Login;
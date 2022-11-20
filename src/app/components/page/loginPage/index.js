import React, { useEffect, useState } from "react";
// Libs
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
// Components
import { removeErr, signIn } from "../../../store/usersSlice/actions";
import { getUserError } from "../../../store/usersSlice/selectors";

const LoginPage = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState({ name: "", email: "", password: "" });
    const dispatch = useDispatch();
    const mainError = useSelector(getUserError);
    const history = useHistory();

    useEffect(() => {
        validate();
    }, [data]);

    const validateScheme = yup.object().shape({
        password: yup
            .string()
            .required("Пароль обязателен для заполнения")
            .matches(
                /[A-Z]+/g,
                "Пароль должен содержать хотя бы одну заглавную букву"
            )
            .matches(/\d+/g, "Пароль должен содержать хотя бы одну цифру")
            .matches(
                /(?=.*[!@#$%^&*])/,
                "Пароль должен содержать один из специальных символов (!@#$%^&*)"
            )
            .matches(/(?=.{8,})/, "Пароль должен содержать хотя бы 8 симолов"),

        email: yup
            .string()
            .required("Электронная почта почта обязательна для заполнения")
            .email("Email введен некорректно")
    });

    function validate() {
        dispatch(removeErr());
        validateScheme
            .validate(data)
            .then(() => setError({}))
            .catch((err) => setError({ [err.path]: err.message }));
        return Object.keys(error).length === 0;
    }

    const handleSubmit = () => {
        dispatch(signIn(data));
        if (!mainError) {
            history.push("/");
        }
    };

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const isValid = Object.keys(error).length === 0;

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Log in</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleChange}
                    />
                    <>{error.email}</>

                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={handleChange}
                    />
                    <>{error.password}</>

                    <button
                        disabled={!isValid}
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full text-center rounded border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
                    >
                        Log In
                    </button>
                    <>{mainError?.login}</>
                </div>

                <div className="text-grey-dark mt-6">
                    Don't have an account?{" "}
                    <Link
                        className="no-underline border-b text-blue-600"
                        to="/auth/signup"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

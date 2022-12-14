import React from "react";
// Libs
import { Switch, Route, Redirect } from "react-router-dom";
// Components

import MainPage from "./components/page/mainPage/mainPage";
import UserPage from "./components/page/userPage";
import SignUpPage from "./components/page/signUpPage";
import LoginPage from "./components/page/loginPage";
// Layouts
import UsersLayout from "./layouts/UsersLayout";
import AuthLayout from "./layouts/AuthLayout";
import LogOut from "./layouts/LogOut";
import AppLoader from "./hoc/AppLoader";
import FavouritePage from "./components/page/favoritePage/favouritePage";
import Main from "./components/page/main";

function App() {
    return (
        <AppLoader>
            <Switch>
                <Route path="/auth/:path?" exact>
                    <AuthLayout>
                        <Switch>
                            <Route path="/auth/login">
                                <LoginPage />
                            </Route>
                            <Route path="/auth/signup">
                                <SignUpPage />
                            </Route>
                            <Route path="*">
                                <Redirect to="/auth/signup" />
                            </Route>
                        </Switch>
                    </AuthLayout>
                </Route>

                <Route path="/">
                    <UsersLayout>
                        <Switch>
                            <Route path="/" exact>
                                <MainPage />
                            </Route>
                            <Route path="/hackathon-team1" exact>
                                <Main />
                            </Route>

                            <Route path="/logout">
                                <LogOut />
                            </Route>

                            <Route path="/favourite">
                                <FavouritePage />
                            </Route>
                            <Route path="/users/:userId">
                                <UserPage />
                            </Route>
                        </Switch>
                    </UsersLayout>
                </Route>
            </Switch>
        </AppLoader>
    );
}

export default App;

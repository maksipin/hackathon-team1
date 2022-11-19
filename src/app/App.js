import React from "react";
// Libs
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
// Components
import AppLoader from "./hoc/AppLoader";
import FavouritePage from "./components/page/favoritePage";
import MainPage from "./components/page/mainPage";
import UserPage from "./components/page/userPage";
import SignUpPage from "./components/page/signUpPage";
import LoginPage from "./components/page/loginPage";
// Layouts
import UsersLayout from "./layouts/UsersLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
    return (
        <AppLoader>
            <Router>
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

                    <Route>
                        <UsersLayout>
                            <Switch>
                                <Route path="/" exact>
                                    <MainPage />
                                </Route>
                                <Route path="/favourite">
                                    <FavouritePage />
                                </Route>
                                <Route path="/:userId">
                                    <UserPage />
                                </Route>
                                <Route path="*">
                                    <Redirect to="/" />
                                </Route>
                            </Switch>
                        </UsersLayout>
                    </Route>
                </Switch>
            </Router>
        </AppLoader>
    );
}

export default App;

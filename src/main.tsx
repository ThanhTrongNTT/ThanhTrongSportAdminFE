import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import store from "./redux/store";
import DeclareRouter from "./routes";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Suspense
            fallback={
                <div className="h-screen flex justify-center items-center content-center bg-gradient-to-t from-orange-400 via-red-500 to-pink-500">
                    <div
                        className={`border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-primary`}
                    />
                </div>
            }
        >
            <Provider store={store}>
                <Router>
                    <ToastContainer />
                    <DeclareRouter />
                </Router>
            </Provider>
        </Suspense>
    </React.StrictMode>
);

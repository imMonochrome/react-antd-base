/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Layout } from "antd";
import LOGO from "../assets/images/LOGO.png";

function App() {
    return (
        <Layout>
            <div className="App">
                <header className="App-header">
                    <img src={LOGO} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        </Layout>
    );
}

export default App;

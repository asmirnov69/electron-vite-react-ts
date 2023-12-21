import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
//mport { IpcRenderer } from 'electron';
//import { ipcRenderer } from 'electron/renderer';
//import { IpcRenderer, ipcRenderer } from 'electron';

interface AppProps {};
interface AppState {};

class App extends Component<AppProps, AppState>
{
    try_connect()
    {
        console.log("try_connect");
        let uu = window.electronAPI;
        let res = window.electronAPI.test_rpc_call('hi');
        console.log(res);
    }

    render() {
        return (
        <div>
            <h1>Hello, world from react App!</h1>
            <button onClick={this.try_connect}>press</button>
        </div>);
    }
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App/>);

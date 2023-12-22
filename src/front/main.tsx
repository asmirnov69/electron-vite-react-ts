import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
//mport { IpcRenderer } from 'electron';
//import { ipcRenderer } from 'electron/renderer';
//import { IpcRenderer, ipcRenderer } from 'electron';

interface AppProps {};
interface AppState {};

window.electronAPI.back_to_front((arg) => {
    console.log("front called", arg);
})

class App extends Component<AppProps, AppState>
{
    async try_connect()
    {
        console.log("try_connect");
        // @ts-expect-error
        let res = await window.electronAPI.front_to_back_bidir('hi');
        //let res = await window.electronAPI.front_to_back_bidir('hi', 'bye'); ???
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

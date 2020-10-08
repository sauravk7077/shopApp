import React, { createContext } from "react";
import Fade from "react-reveal/Fade";
import Button from "./components/Button";

export const AlertContext = createContext();

class AlertContextProvider extends React.Component{
    constructor() {
        super();
        this.state = {
            show: false,
            title: 'Title',
            desc: 'Description'
        }
    }

    toggleAlert = () => {
        this.setState(s=>({
            show: !s.show
        }));
    }

    setDetails = (title, desc) =>{
        this.setState({
            title,
            desc
        })
    }

    render() {
        const contextObject = {
            ...this.state,
            toggleAlert: this.toggleAlert,
            setDetails: this.setDetails
        }
        return(
            <AlertContext.Provider value={contextObject}>
                <div className={`modal ${this.state.show? '': 'hidden'}`}>
                    <div className={`alert`} >
                        {/* <Fade when={this.state.show}> */}
                            <h3>{this.state.title}</h3>
                            <p>{this.state.desc}</p>
                            <Button value="OK" click={this.toggleAlert}/>
                        {/* </Fade> */}
                    </div>
                </div>
                {this.props.children}
            </AlertContext.Provider>
        )
    }
}

export default AlertContextProvider;
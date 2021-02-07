import React, {Component} from 'react';
import AlertDialog from './AlertDialog/AlertDialog';
import Toast from "./Toast/Toast";
import {ToastStore} from "../../../Vendor/Utils/Core/Stores/Global/Toast/Toast.Store";
import {APP} from "../../../App/Init/App.Init";

class GlobalComponents extends Component {
    public state: any;

    public constructor(props: any) {
        super(props);

        this.state = {
            Toast: {}
        };
    }

    public componentDidMount(): void {
        ToastStore.addChangeListener(() => {
            this.setState({
                Toast: {
                    ...ToastStore.state,
                }
            });
        });
    }

    public componentWillUnmount(): void {
        ToastStore.removeChangeListener(() => {
            this.setState({});
        });
    }

    render(): Required<React.ReactNode> {

        return (
            <React.Fragment>
                <AlertDialog/>
                <Toast open={this.state.Toast.open} type={this.state.Toast.type} message={this.state.Toast.message} onClose={() => APP.SERVICES.CORE.TOAST.hide()} duration={this.state.Toast.duration} horizontalAlign={this.state.Toast.horizontalAlign} verticalAlign={this.state.Toast.verticalAlign} />
            </React.Fragment>
        );
    }
}

export default GlobalComponents;

import {Button, TextField} from '@material-ui/core/';
import React from "react";

class Form extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <p>
                    <TextField
                        id="with-placeholder"
                        label="City"
                        placeholder="Enter City..."
                        margin="normal"
                        name="city"    
                    />
                    &nbsp;
                    <TextField
                        id="with-placeholder"
                        label="Country"
                        placeholder="Enter Country..."
                        margin="normal"
                        name="country"    
                    />
                </p>
                <Button variant="outlined" color="primary" type="submit">
                    Get Weather
                </Button>
            </form>
        );
    }
};

export default Form;
import Typography from '@material-ui/core/Typography';
import React from "react";

class Weather extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <div>
                <Typography component="p">
                    { this.props.city && this.props.country && <p>Location: { this.props.city }, { this.props.country }</p> }
                    { this.props.temperature && <p>Temperature: { this.props.temperature } Celsius</p> }
                    { this.props.humidity && <p>Humidity: { this.props.humidity }</p> }
                    { this.props.description && <p>Conditions: { this.props.description }</p> }
                    { this.props.error && <p>{ this.props.error }</p> }
                    &nbsp;
                </Typography>
            </div>
        );
    }
};

export default Weather;
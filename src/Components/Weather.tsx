import React from "react";

class Weather extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <div>
                { this.props.city && this.props.country && <p>Location: { this.props.city }, { this.props.country }</p> }
                { this.props.temperature && <p>Temperature: { this.props.temperature } Kelvin</p> }
                { this.props.humidity && <p>Humidity: { this.props.humidity }</p> }
                { this.props.description && <p>Conditions: { this.props.description }</p> }
                { this.props.error && <p>{ this.props.error }</p> }
            </div>
        );
    }
};

export default Weather;
import Typography from '@material-ui/core/Typography';
import React from 'react';

class Titles extends React.Component {
    public render() {
        return (
            <div>
                <Typography variant="headline" component="h3">
                    Curent Weather Conditions
                </Typography>
                <Typography component="p">
                    Enter the location below.
                </Typography>
            </div>
        );
    }
};

export default Titles;
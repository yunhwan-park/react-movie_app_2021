import React from 'react';

class Detail extends React.Component {
    componentDidMount()
    {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const {location} = this.props;
        
        if (location.state) {
            return (
                <div>
                    <span>{location.state.title}</span>
                    <img src={location.state.poster} alt="{location.state.title}" title={location.state.title} />
                </div>
            );
        }
        else
        {
            return null;
        }
    }
}

export default Detail;
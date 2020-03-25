import React from 'react';

// class형 컴포넌트를 만들었다면 this.props.match
const About = ({match}) => {
    return (
        <div>
            {match.params.username} 의 소개
        </div>
    );
};

export default About;
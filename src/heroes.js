import React from 'react';

var dataSource = [
    { name: 'Superman', power: 'fly with unerwear' },
    { name: 'Batbam' , power: 'belt with gadgets' },
    { name: 'Spiderman' , power: 'Jump like a monkey' },
    { name: 'Hulk' , power: 'Angri with anyone'}
];

class Heroes extends React.Component{

    componentDidMount() {
        setTimeout(function(){
            this.setState({ list: dataSource });
        }).bind((this),2000);
    }
}
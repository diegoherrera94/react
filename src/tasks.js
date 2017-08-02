import React from 'react';

class Tasks extends React.Component{
    render(){
        return(
            <section>
                <header></header>
                <ul>
                    {this.props.children}
                </ul>
                <footer></footer>
            </section>
        )
    }
};

export default Tasks;
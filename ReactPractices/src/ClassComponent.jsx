import { Component } from "react";

class ClassComponent extends Component{
    
    state = {
        counter:0
    }
    handleOnClick = () =>
    {
        // this.setState({counter : this.state.counter + 1})
        // this.setState({counter : this.state.counter+ 1})
        // this.setState({counter : this.state.counter + 1})
        this.setState((prevState) => {
            return {
              counter: prevState.counter + 1,
            };
          });
          this.setState((prevState) => {
            return {
              counter: prevState.counter + 1,
            };
          });
        //   this.setState((prevState) => {
        //     return {
        //       counter: prevState.counter + 1,
        //     };
        //   });
    }
         
    
    render()
    {
        const {counter} = this.state;
        return(
            <div>
                <p>{counter}</p>
                <button onClick = {this.handleOnClick}>+</button> 
            </div>
        )
    }
}
export default ClassComponent;
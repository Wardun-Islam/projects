import React,{Component} from 'react';
import './App.css';
import 'tachyons';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import CardList from '../../components/cardlist/CardList';
import Scroll from '../../components/scroll/Scroll';
import ErrorBoundary from '../../components/errorboundary/ErrorBoundary';
//import {Robots} from '../../contents/Contents';
import {connect} from 'react-redux';
import {setSearchField, requestRobots, createRobot} from '../../actions/actions';

const mapStateToProps = (state) => {
  return {
    inputText: state.setRobots.searchFieldText,
    requestPending: state.requestRobots.requestPending,
    robots: state.requestRobots.robots,
    hasError: state.requestRobots.hasError,
    error: state.requestRobots.error
  }
};

const mapDispatchToProps = (dispatch) => ({
    onTextChange: (event) => dispatch(setSearchField(event.target.value)),
    requestRobots: () => dispatch(requestRobots()),
    createRobot: (text) => dispatch(createRobot(text))
});

class App extends Component{
  
  componentDidMount(){
      //setTimeout(() => {this.setState({robots:Robots});}, 3000);
      //console.log(this.props);
      this.props.requestRobots();
    }

    render(){
      let {inputText, onTextChange, robots, requestPending, createRobot} = this.props;
      // const onTextChange = (event) => {
      //   if(event.keyCode === 13){
      //       // onButtonClick();
      //   }
      //   this.setState({inputText: event.target.value});
      // }

      const onButtonClick = () => {
        createRobot(inputText);
      }
      //{
      //   if(inputText.length>0){
      //   let found = false;
      //   for(let robot of robots){
      //       found = robot.name.toLowerCase()===(inputText.toLowerCase());
      //   };
      //   if(!found){ 
      //       const newRobotList = robots.concat(
      //         [{"id": robots.length+1,
      //           "name": inputText,
      //           "email": "Noemail@nodomain.com"}]);
      //       this.setState({robots: newRobotList});
      //     }
      //   }
      // }

      let filterRobots = robots.filter((robot, i) =>{
        return robot.name.toLowerCase().includes(inputText.toLowerCase());
      });

      return (requestPending) ?
        <h1 style={{textAlign:'center', fontWeight:'600%'}}>Loading...</h1> :
        (<div className="body">
           <Header/>
           <Input  onTextChange={onTextChange} onButtonClick={onButtonClick}/>
           <Scroll>
             <div className="App">
               <ErrorBoundary>
                 <CardList Robots={filterRobots}/>
                </ErrorBoundary>
              </div>
            </Scroll>
          </div>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

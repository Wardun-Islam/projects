import React,{Component} from 'react';
import './App.css';
import Navigation from '../../components/navigation/Navigation';
import Logo from '../../components/logo/Logo';
import Title from '../../components/title/Title';
import ImageUrlInputField from '../../components/imageurlinputfield/ImageUrlInputField';
import Particles from 'react-particles-js';
import ImageField from '../../components/imagefield/ImageField';
import {connect} from 'react-redux';
import {ChangeImageUrlField, DetectFaceFromImage, PutScore, ChangeRoute, ClearRouteSignIn, GetUserInfo} from '../../actions/Actions';
import SignIn from '../../components/signin/SignIn';
import Register from '../../components/register/Register';


const mapStateToProps = (state) =>{
  return{
    imageUrlField: state.ImageRecognigationReducer.imageUrlField,
    imageData: state.ImageRecognigationReducer.imageData,
    imageUrl: state.ImageRecognigationReducer.imageUrl,
    route: state.RouteReducer.route,
    isSignedIn: state.RouteReducer.isSignedIn,
    id: state.SignInReducer.currentUserId,
    name: state.RouteReducer.userName,
    contents: state.RouteReducer.userEntries
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    onInputChange: (event) => dispatch(ChangeImageUrlField(event.target.value)),
    detectFace: (link) => dispatch(DetectFaceFromImage(link)),
    clearSignIn: () => dispatch(ClearRouteSignIn()),
    changeRoute: (route) => dispatch(ChangeRoute(route)),
    getUserInfo: (id) => dispatch(GetUserInfo(id)),
    putScore: (id) => dispatch(PutScore(id))
  }
}

const particlesparams={
      "particles": {
          "number": {
              "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
          }
      },
  "background": {
    "image": "linear-gradient(to right,#eff3c6, #0779e4)"
    }    
  };


class App extends Component{

  componentDidMount(){
      console.log('component did mount')
  }

  onClick = () =>{
        this.props.detectFace(this.props.imageUrlField);
        this.props.putScore(this.props.id);
      }
  render(){

    this.props.getUserInfo(this.props.id);
      const signOut = (route) =>{
        if(route !== 'home')
          this.props.clearSignIn();
        this.props.changeRoute(route);
      }
        return( 
        <div className="App">
            <Particles params={particlesparams} className="particle"/>
            <Navigation isSignedIn={this.props.isSignedIn} onClick={signOut}/>
            { this.props.route === 'home'
            ? <div>
                <Logo/>
                <Title name={this.props.name} contents={this.props.contents}/>
                <ImageUrlInputField onClick={this.onClick} onInputChange={this.props.onInputChange}/>
                <ImageField link={this.props.imageUrl} data={this.props.imageData}/>
              </div>
            :this.props.route === 'register'
              ?<Register onClick={this.props.changeRoute}/>
              :<SignIn onClick={this.props.changeRoute}/>
            }
          </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

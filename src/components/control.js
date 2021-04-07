// import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';
import Seach from './Seach'
import Sort from './Sort'
class Control extends Component {
  constructor (props) {
    super(props);
    this.state = {
      txtUserName: "",
      txtPassword: '',
      txtDescription:'',
      sltGender:1,
      rdlange:"en",
      chkbStatus: false
    };
    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }
  onHandleChange(e) {
    var target = e.target;
    var name = target.name;
    console.log("target target target", target.type);
    var value = target.type ==='checkbox'? target.checked: target.value;
    this.setState({
     [name]:value
    })
  }
  onHandleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    // this.setState({
    //   userName: e.target.value
    // })
  }
  render() {
    return (
        <div className="row mt-15">
            <Seach/>
            <Sort/>
        </div>
    );
  }
}

export default Control;

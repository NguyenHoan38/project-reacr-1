// import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';

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
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Nhập từ khóa..." />
            <span className="input-group-btn">
            <button className="btn btn-primary" type="button">
                <span className="fa fa-search mr-5" />Tìm
            </button>
            </span>
        </div>
    </div>
    );
  }
}

export default Control;

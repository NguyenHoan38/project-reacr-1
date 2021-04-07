// import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';

class Sort extends Component {
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
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
                <a role="button">
                <span className="fa fa-sort-alpha-asc pr-5">
                    Tên A-Z
                </span>
                </a>
            </li>
            <li>
                <a role="button">
                <span className="fa fa-sort-alpha-desc pr-5">
                    Tên Z-A
                </span>
                </a>
            </li>
            <li role="separator" className="divider" />
            <li><a role="button">Trạng Thái Kích Hoạt</a></li>
            <li><a role="button">Trạng Thái Ẩn</a></li>
            </ul>
        </div>
    </div>
    );
  }
}

export default Sort;

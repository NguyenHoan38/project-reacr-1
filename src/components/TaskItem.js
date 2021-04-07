// import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';
class TaskItem extends Component {
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
  }
  render() {
    var  {task,index} = this.props 
    // var {index} = this.props
    return (
        <tr>
            <td>{index+1}</td>
            <td>{task.name}</td>
            <td className="text-center">
            <span className={task.status? 'label label-success':'label label-danger'}>
                {task.status?' Kích Hoạt':'Chưa kích hoạt'}
            
            </span>
            </td>
            <td className="text-center">
            <button type="button" className="btn btn-warning">
                <span className="fa fa-pencil mr-5" />Sửa
            </button>
            &nbsp;
            <button type="button" className="btn btn-danger">
                <span className="fa fa-trash mr-5" />Xóa
            </button>
            </td>
        </tr>
    );
  }
}

export default TaskItem;

// import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';
import TaskItem from './TaskItem'
class TaskList extends Component {
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
    var {tasks} = this.props;
    var elmTasks = tasks.map((task,index)=>{
        return <TaskItem key={task.id} index={index} task={task}/>
    })
    return (
        <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
            {elmTasks}
            {/* <TaskItem/> */}
        </tbody>
      </table>
    );
  }
}

export default TaskList;

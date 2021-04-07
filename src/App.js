// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import TaskForm  from  './components/taskForm.js';
import Control  from  './components/control.js';
import TaskList  from  './components/TaskList.js';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      task: [],
      isDisplayForm : false
    };
  }
  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        tasks : tasks,
      })
    }
  }
  onGenerateData =() =>{
    var tasks = [
      {
        id : 1,
        name:"Dựng html",
        status:true
      },
      {
        id :2,
        name:"Gép api ",
        status:false
      }
    ];
    this.setState({
      tasks:tasks
    });
    localStorage.setItem('tasks',JSON.stringify(tasks) )
    console.log("task ", tasks);
  }
  onHandleAddWork =()=>{
    this.setState({
      isDisplayForm:!this.isDisplayForm
    });
  }
  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1)
  }
  generateID() {
    return this.s4 + this.s4() + '-' + this.s4() + '-' +this.s4();
  }
  onCloseForm = () =>{
    this.setState({
      isDisplayForm:false
    });
  }
  render() {
    var {tasks,isDisplayForm} = this.state;
    var elementTaskForm = isDisplayForm?<TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm}/>:'';
    return (
      <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        <div className={isDisplayForm?'col-xs-4 col-sm-4 col-md-4 col-lg-4':''}>
          {elementTaskForm}
            {/* <TaskForm/> */}
        </div>
        <div className={isDisplayForm?'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
          <button type="button" className="btn btn-primary" onClick={this.onHandleAddWork}>
            <span className="fa fa-plus mr-5" />Thêm Công Việc
          </button>
          <button type="button" className="btn btn-danger ml-4" onClick={this.onGenerateData}>
           Thêm dữ liệu
          </button>
          <Control/>
          <div className="row mt-10 ">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={tasks}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
}

export default App;

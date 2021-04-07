// import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';

class TaskForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "",
      status: false,
    };
    // this.onHandleChange = this.onHandleChange.bind(this)
    // this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }
  onCloseForm =() =>{
      this.props.onCloseForm();
  }
//   onSubmit =() =>{
//     this.props.onSubmit();
// }
  onChange=(e)=>{
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
        [name] :value
    })
  }
  onSubmit =(e) =>{
     e.preventDefault();
      console.log(this.state);
      this.props.onSubmit();
  }
  render() {
    return (
        <div className="panel panel-warning">
            <div className="panel-heading ">
                <h3 className="panel-title">Thêm Công Việc</h3>
                <span onClick={this.onCloseForm}>x</span>
            </div>
            <div className="panel-body">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <label>Tên :</label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} />
                </div>
                <label>Trạng Thái :</label>
                <select className="form-control" required="required" name="status" value={this.state.status} onChange={this.onChange}>
                <option value={true}>Kích Hoạt</option>
                <option value={false}>Ẩn</option>
                </select>
                <br />
                <div className="text-center">
                <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                </div>
            </form>
            </div>
        </div>
    );
  }
}

export default TaskForm;

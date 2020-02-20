import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SubmitSpeech from './components/submitSpeech/submitSpeech.component';
import ViewSpeech from './components/ViewSpeech/ViewSpeech.component';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      speechs:[],
      textarea:"",
      author :"",
      subject :'',
      date:new Date()
    }
  }
  handleChange=event=>{
    this.setState({
      [event.target.name] :event.target.value
    })
    console.log("textarea",this.state.textarea)
    console.log(this.state.author)
    console.log("subject",this.state.subject)
  }
  handleDate=(d)=>[
    this.setState({
      date:d
    },console.log(this.state.date))
  ]
  addSpeech=(event)=>{
    event.preventDefault()
    if(this.state.textarea !==''){
    
     var newItems={
       speechs:this.state.textarea,
       Author:this.state.author,
       Subject:this.state.subject,
       Date:this.state.date

     }
     this.setState((prevState)=>{
       return {
        textarea:"",
        author :"",
        subject :'',
        date:'',
         speechs:prevState.speechs.concat(newItems)
       }
     })
    }
     console.log(this.state.speechs)
  }

  render(){
   
  return (
    
    <div className="App">
      <SubmitSpeech addSpeech={this.addSpeech} date={this.state.date} handleChange={this.handleChange} handleDate={this.handleDate}/>
       <ViewSpeech list={this.state.speechs}/>
      </div>
  );}
}

export default App;

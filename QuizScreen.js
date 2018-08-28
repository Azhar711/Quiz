import React,{Component} from 'react';
import AnswerComponent from './Answer';
import QuestionComponent from './Question';
import ResultComponent from './Result';
import './QuizScreen.css';

class QuizComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            questionId : 1,
            selectedOption:'',
            category:'',
            question:'',
            correctAnswer:'',
            correct:0,
            view: false
        }
    }

    onChangeHandler=(event)=>{
        const selected= event.target.value;
        this.setState({
            selectedOption: selected
        })
        if (this.state.questionId < this.props.data.length) {
            setTimeout(() => this.nextQuestion(), 300);
            const counter= this.state.correct;
            (this.state.correctAnswer.toLowerCase() === selected) ? 
            // console.log('Correct')
            this.setState({
                correct: counter +1
            })
            : 
            null;
        } else {
           this.setState({
               view: true
           })
        }
    }

    componentWillMount() {
        this.shuffleArray(this.props.data)
        this.setState({
            question: this.props.data[0].question,
            correctAnswer: this.props.data[0].correct_answer,
            category: this.props.data[0].category,
            
        });
    }

    shuffleArray(array) {
        var Index = array.length, value, x;

        while (0 !== Index) {
            x = Math.floor(Math.random() * Index);
            Index -= 1;

            value = array[Index];
            array[Index] = array[x];
            array[x] = value;
        }
        return array;
    };

    nextQuestion() {
        const counter = this.state.count + 1;
        const qId = this.state.questionId + 1;

        this.setState({
            count: counter,
            questionId: qId,
            question: this.props.data[counter].question,
            category: this.props.data[counter].category,
            correctAnswer: this.props.data[counter].correct_answer,
            selectedOption:'',
        });
    }

    render(){
        console.log(this.state.correct);
        return(
            <div className="Quiz">
            {
                !this.state.view ?
                <div>
                <QuestionComponent
                header={this.state.category}
                question={this.state.question}
                />
                <AnswerComponent
                selectedOption={this.state.selectedOption}
                change={this.onChangeHandler}
                /> 
                </div> :
                <div> 
                <ResultComponent
                result={this.state.correct}
                click={this.props.clicked}
                /> 
                </div>  
            }
            </div>
        );
    }
}

export default QuizComponent;
import React from 'react';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { AddSummuryActionThunk } from '../redux/summury/actions'

export class InputEntrepneursSummury extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            summuryHeader: '',
            summuryBody: ''
        }
    }

    onHeaderChange = (e) => {
        this.setState({
            summuryHeader: e.currentTarget.value
        })
    }

    onBodyChange = (e) => {
        this.setState({
            summuryBody: e.currentTarget.value
        })
    }

    addSummury = (e) => {
        e.preventDefault();
        this.props.addSummury(
            {
                summuryHeader: this.state.summuryHeader,
                summuryBody: this.state.summuryBody
            }
        );
        this.setState({
            summuryHeader: '',
            summuryBody: ''
        })
    }

    render(){
        return (
            <div>
                <Form style={alignForm}>
                    <FormGroup>
                      <Label for="exampleEmail">Summury Header</Label>
                      <Input type="text" name="summuryHeader" id="summuryHeader" placeholder="Summury Header" onChange={this.onHeaderChange} value={this.state.summuryHeader}/>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Summury Description</Label>
                      <Input type="textarea" name="summuryBody" id="summuryBody" placeholder="Summury Description" onChange={this.onBodyChange} style={textAreaStyle} value={this.state.summuryBody}/>
                    </FormGroup>
                    <Button color="info" style={btnStyle} onClick={this.addSummury}>Submit</Button>{' '}
                </Form>
            </div>
        )
    }
}

const textAreaStyle = {
    resize: 'none',

}

const alignForm = {
    width: '60%',
    margin: '0 auto'
}

const btnStyle = {
    width: '100%'
}

const mapStateToProps = (state) => {
    return {
        summury: state.summury.summuryArray
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSummury: (summury) => {
            dispatch(AddSummuryActionThunk(summury))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputEntrepneursSummury);
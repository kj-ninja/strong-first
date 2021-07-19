import React, { Component } from 'react';
import AsyncSelect from 'react-select/async'
import {getToken} from "../../utils/getToken";

class ReactSelect extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedOption: {},
            token: getToken()
        }
    }

    fetchData = (inputValue, callback) => {
        if (!inputValue || inputValue.length < 2) {
            callback([]);
        } else {
            setTimeout(() => {
                fetch("https://ironman.coderaf.com/exercise?q=" + inputValue, {
                    method: "GET",
                    'headers': {'Access-Token': this.state.token}
                })
                    .then((resp) => {
                        return resp.json()
                    })
                    .then((data) => {
                        const tempArray = [];
                        data.forEach((element) => {
                            tempArray.push({ label: `${element.name}`, value: element.id });
                        });
                        callback(tempArray);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            });
        }
    };

    onSearchChange = (selectedOption) => {
        if (selectedOption) {
            this.setState({
                selectedOption
            });
            this.props.setExercise(selectedOption);
        }
    };
    render() {
        return ( <div>
            <AsyncSelect
                value={this.state.selectedOption}
                loadOptions={this.fetchData}
                onChange={(e) => {
                    this.onSearchChange(e);
                }}
                defaultOptions={false}
            />
        </div>)
    }
}

export default ReactSelect;

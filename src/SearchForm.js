import React from "react";
import SearchResults from "./SearchResults";

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { country: '' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        if (event.target.value == '') {
            this.setState({ isLoaded: false })
            return
        }
        fetch(`https://restcountries.com/v2/name/${event.target.value}`)
            .then(
                async response => {
                    const data = await response.json()
                    this.setState({result: data, isLoaded: true})
                })
           
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <input name="country" type="text" className="form-control" onChange={this.handleChange} />
                </form>
                {this.state.isLoaded ? <SearchResults result={this.state.result} /> : <p>No data</p>}
            </div>
        );
    }
}
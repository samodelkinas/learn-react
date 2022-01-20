import React from "react";

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (Array.isArray(this.props.result)) {
            return (
                <table className="table">
                    <thead>
                        <th>&nbsp;</th>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Population</th>
                    </thead>
                    <tbody>
                        {this.props.result.map(d =>
                        (<tr key={d.id}>
                            <td><img src={d.flag} style={{ width: 30 }}></img></td>
                            <td>{d.name}</td>
                            <td>{d.region}</td>
                            <td>{d.population}</td>
                        </tr>))}
                    </tbody>
                </table>
            )
        } else {
            return(<p>No data</p>)
        }
    }
}

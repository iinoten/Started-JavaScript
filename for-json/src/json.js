import React from 'react';

const $ = window.$;

class FeedlTitle extends React.Component {
    constructor() {
      super();
      this.state = ({
        entry: []
      });
    }
  
  
    componentDidMount() {
      $.ajax({
          url: this.props.url,
          data: {
              q: "select title from feed where url = '" + this.props.target + "'",
              format: "json"
          },
          type: 'GET',
          dataType: 'json',
          success: function(res) {
            for (var i in res.query.results.entry) {
              console.log(res.query.results.entry[i].title);
            }
            this.setState({entry: res.query.results.entry});
          }.bind(this),
          error: function(xhr, status, err) {
            console.log(this.props.targetURL, status, err.toString());
          }.bind(this)
        });
    }
  
    render() {
      return(
        <ol>
         {this.state.entry.map(function(index) {
           return <li key={index.title}>{index.title}</li>;
         })}
        </ol>
      );
    }
  }
  
export default FeedlTitle;
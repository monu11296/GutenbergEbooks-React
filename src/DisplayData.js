import React, {Component} from 'react';

class DisplayData extends Component {
    
    render(){

        const title_image =   this.props.results.map(data1 =>
            <li key={data1.id}>
                <h2>{data1.title}</h2> 
                <p>by {data1.authors[0].name}</p>
                <img src={data1.formats['image/jpeg']} alt={data1.formats['image/jpeg']} />
            </li>);

        return(
            <div>
                {title_image}
            </div>

        );
    }

}

export default DisplayData;
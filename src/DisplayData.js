import React, {Component} from 'react';



class DisplayData extends Component {

    constructor(props){
        super(props);
        this.handleQuery = this.handleQuery.bind(this);
      }
      
      handleQuery = (e) => { 
        e.preventDefault();
       const query = e.target.value;
       this.props.onChange(query); 
      }

      //var title_image = this.props.results;

      checkFormat(bookFormat){
        var i;
        for(i = 0; i < bookFormat.length; i++ ){
            if(bookFormat[i].search(".htm") !== -1)
                return bookFormat[i];
            else if(bookFormat[i].search(".txt") !== -1)
                return bookFormat[i];
      }
    }

    checkImageSize(imgSize){
        var str; 
        if(imgSize.search(".small.") !== -1){
            str = imgSize.replace("small", "medium");
            return str;
        }
        else 
            return  imgSize;
    }


    render(){

        const title_image = this.props.results.map(data1 => 
            <li key={data1.id}>
                <h2>{data1.title}</h2> 
                <p>by {data1.authors.map((authors,index) => <span key={index}>{authors.name}</span>)}</p>
                {/*<img src={data1.formats['image/jpeg']} alt={data1.formats['image/jpeg']} />*/}
                <img src={this.checkImageSize(data1.formats['image/jpeg'])} alt={data1.formats['image/jpeg']} />
                <br />

                     <p>
                     <a href={this.checkFormat(Object.values(data1.formats))}>Read</a>
                    </p>
        </li>);

        return(
            <div>
                <h2>Book Category {this.props.myQuery}</h2>

                    <select id="category" onChange={this.handleQuery}>
                    <option value="Fiction">
                        Fiction
                    </option>

                    <option value="Drama">
                        Drama
                    </option>

                    <option value="Philosophy">
                        Philosophy
                    </option>

                    <option value="Humor">
                        Humor
                    </option>

                    <option value="History">
                        History
                    </option>
                    </select>

                {title_image}
            </div>

        );
    }

}

export default DisplayData;
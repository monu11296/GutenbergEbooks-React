import React, {Component} from 'react';
import loadingPic from './pic.gif';



class DisplayData extends Component {


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
        var title_image;
        const load = "....";

        if(this.props.myQuery) {
        title_image = this.props.results.map(data1 => 
            <li key={data1.id}>
                <h3>{this.props.loading ? load : data1.title}</h3>

                <p>by {data1.authors.map((authors,index) => <span key={index}>{this.props.loading ? load : authors.name}</span>)}</p>
                    {/*<img src={data1.formats['image/jpeg']} alt={data1.formats['image/jpeg']} />*/}
                <img src={this.props.loading ? loadingPic : this.checkImageSize(data1.formats['image/jpeg'])} alt={data1.formats['image/jpeg']} />
                <br />

                <p>
                    <a href={this.props.loading ? load : this.checkFormat(Object.values(data1.formats))}><button>Read</button></a>
                </p>
        </li>);
        }

        else { title_image = "Please Select a Topic"; }

        return(
            <div>
                <h2> {this.props.myQuery ? this.props.myQuery : "No Topic Selected" }</h2>
                {title_image}
            </div>
        );
    }

}

export default DisplayData;
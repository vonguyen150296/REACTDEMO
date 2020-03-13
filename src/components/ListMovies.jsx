import React,{Component} from "react";
import Card from "./Card";

class listMovies extends Component{
constructor(props)
{
    super(props)
}

componentDidMount () {
    
}

render()
  {
    return (
        <React.Fragment>
            <div className="title">Liste des films :</div>
            <div className="items">
                <div className="row">
                    {this.props.movies.filter((item) => {
                        return this.props.selectedCategories == item.category || (this.props.selectedCategories.length === 0);
                    }).map(item => {
                        return (
                            <div className='col'>
                            <Card
                            onDelete={this.props.deleteHandler}
                            key={item.id}
                            {...item}
                            />
                        </div>
                        )
                    })
                    }
                </div>
            </div>
        </React.Fragment>
    )
  }

}

export default listMovies;
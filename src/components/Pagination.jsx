import React,{Component} from "react";

class Pagination extends Component{
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
            <div className="pagination">
				<a href="#">Précédent</a>
				{this.props.page.map((item) => 
                        <a href="#">{item}</a>
                    )
                }
				<a href="#">Suivant</a>
        	</div>
        </React.Fragment>
    )
  }

}

export default Pagination;
import React, {Component} from 'react'

class MenuItem extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <article className="menuItem">
                <div className='sideIcons'>
                    <a href={this.props.commentLink} target="_blank">
                        <span>
                        <em>▲</em>
                        </span>
                        <span>
                        <em>
                            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M3.175 9.412c.842.375 1.803.588 2.825.588 3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5c0 1.052.39 2.028 1.056 2.833l-1.056 3.167 3.175-1.588z"></path>
                                </g>
                            </svg>
                        </em>
                        </span>
                    </a>
                </div>
                <div className='itemHeading'>
                    <h2>
                       <a href={this.props.link} target="_blank">
                        {this.props.title}
                       </a>
                    </h2>
                    <p>
                        {this.props.desc}
                    </p>
                    <summary>
                       <time> {this.props.time} </time>
                        by
                        <a href={`/author/${this.props.author}`}>
                        {this.props.author}
                        </a> 
                    </summary>
                </div>
            </article>
        )
    }
}

export default MenuItem
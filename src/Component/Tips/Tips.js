import React from 'react'

const Tips = () =>{
  return(
    <div className="card ">
      <div className="card-header blue darken-4">
        <p className="white-text txtInden">

          12-dic
        </p>
      </div>
      <div className="card-content ">
        <div className="row">
          <div className="col s12 m12 l12 xl12">
            <div>
              <div className="justify-align">
                <p className="ultra-small">{post.message}</p>
                <p>
                  {console.log('like-comment',post.like)}
                </p>
              </div>      <br/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col m4 center-align">
            {
              post.like?
                <i style={like} onClick={() => getlike(idcom)} className="material-icons" >thumb_up</i>
                :<i  className="material-icons" onClick={() => getlike(idcom)} >thumb_up</i>
            }
            <i className="new badge " data-badge-caption="like" >{post.no_like}</i>
          </div>
          <div className="col m4">
            <i className="material-icons">share</i>
            Compartir
          </div>
          <div className="col m4">
            <i className="material-icons" >insert_comment</i>
            Comentar
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tips;
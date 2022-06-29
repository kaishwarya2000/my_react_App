import React ,{useState,useEffect} from 'react'

function Card() {
    const [user,setUser] = useState([]);

    const fetchData =()=>{
        fetch("https://reqres.in/api/users?page=1")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            let gagan = data.results
            console.log(gagan);
            setUser(gagan)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div className="clearfix">
        <div className="row">
          {user.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.avatar}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data.first_name +
                      " " +
                      data.last_name}
                  </h5>
                  <p className="card-text">
                    {data.email}
                    <br />
                    
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    )
}

export default Card
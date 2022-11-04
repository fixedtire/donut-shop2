import './App.css';

export const Item = ({ name, description, price, img, handleClick }) => {
    return (
        
            <div>
                <div className="card-item">

                    
                    

                    <div className="card-details">
                        <center>
                        <img 
                        src={img} alt={name} 
                        className="white-shadow"
                        height="150px" width="180px">
                        </img>
                        </center>
                        <p className="title">{name}</p>
                        <p className="description">{description}</p>
                        <p className="description">${price}</p>
                        <button
                         onClick={()=>{handleClick()}}
                         className="white-shadow">
                        ADD ME!
                        </button>

                    </div>
                
                </div>
            
            </div>
    );
}
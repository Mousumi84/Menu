function Dishes({menuList}) {
    
    return (
        <div id="dishes">
            {

                menuList.map(dishes => {
                    return (
                        <div className="dsh" key={dishes.id}>
                            <div className="imgbox"><img src={dishes.img} className="img"></img></div>
                            <div className="nm">{dishes.title}</div>
                            <div className="price">$ {dishes.price}</div>
                            <div className="des">{dishes.desc}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dishes;
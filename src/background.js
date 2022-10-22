import {Card} from 'react-bootstrap'

const Background = () => {
    return (
    <div>
        <Card style={{ width: "100%", minHeight: "200px", backgroundColor: "#DEEED6" }} className="text-black">
            <div style={{width:"65%", position:"absolute", left: '5em'}}>
                <Card.Text style={{fontWeight:'bold', fontSize:'2.5em', textAlign:"left"}}>
                Order groceries for delivery or pickup today
                </Card.Text>
                <Card.Text style={{textAlight:"left"}}>
                    Whatever you want from local stores, brought right to your door.
                </Card.Text>
            </div>
            <img 
            style={{ height: "200px", width: "20%", position: "absolute", right: 0 }}
            src='https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg'></img>
        </Card>
    </div>
    )
}

export default Background
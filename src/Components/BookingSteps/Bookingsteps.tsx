import "./Bookingsteps.css"
import Greece from "../../assets/images/greece.png"
import building from "../../assets/svg/building.svg"
import heart from "../../assets/svg/heart.svg"

const BookingSteps = [
    {
        images : '/src/assets/svg/destination.svg',
        name : 'Choose Destination',
        description : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates.'
    },
     {
        images : '/src/assets/svg/payments.svg',
        name : 'Make Payment',
        description : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates.'
    }, {
        images : '/src/assets/svg/reach.svg',
        name : 'Reach Airport on Selected Date',
        description : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates.'
    },
]

const iconimages = [
    {
        id : 1,
        icon : '/src/assets/svg/LEAF.svg'
    },
     {
        id : 2,
        icon : '/src/assets/svg/mapicon.svg'
    }, {
        id : 3,
        icon : '/src/assets/svg/send.svg'
    },
]

const Bookingsteps = () => {
  return (
    <div className="booking_steps">
        <div className="bokking_container">
            <div className="booking_options">
                <div className="booking_options_head">
                        <p className="booking_head1">Easy and Fast</p>
                        <p className="booking_head2">Light</p>
                </div>
                <div className="bokking_options_subhead">
                     {
                    BookingSteps.map((i,id) => (
                        <div className="booking_box" key={id}>
                              <div className="booking_box_logo"><img src={i.images} alt="images not found" /></div>
                              <div>
                                <p className="booking_box_name">{i.name}</p>
                                <p className="booking_box_desc">{i.description}</p>
                              </div>
                        </div>
                    ))
                  }
                </div>
            </div>
            <div className="booking_view">
                 <div className="booking_view_card">
                    <div className="booking_greece_img">
                        <img src={Greece} alt="image not found" />
                    </div>
                    <div className="booking_trip_content">
                        <p className="greecehead">
                                Trip To Greece
                        <p className="greecedate">14-29 June | by Robbin joseph</p>
                        </p>
                        <div className="icons1">
                            {iconimages.map((i,id) => (
                                <div key={id}>
                                    <img src={i.icon} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="ongoing">
                            <div className="ongoing2">
                                <img src={building} alt="image not found" />
                                <p className="ongoing_text">24 people going</p>
                            </div>
                            <img src={heart} alt="image not found" />
                        </div>
                    </div>
                 </div>

            </div>
        </div>
    </div>
  )
}

export default Bookingsteps
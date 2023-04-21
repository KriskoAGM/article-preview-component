import avatarImage from '../images/avatar-michelle.jpg';

export const User = () => {
    return (
        <div className="user">
            <img src={avatarImage} alt="" />
            <div className="wrapper">
                <p className="name">Michelle Appleton</p>
                <p className="date">28 Jun 2020</p>
            </div>
        </div>
    )
}
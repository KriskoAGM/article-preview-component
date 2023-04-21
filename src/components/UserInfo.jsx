import { User } from './User';
import { Share } from './Share';

export const UserInfo = () => {
    return (
        <div className="user-info">
            <User />
            <Share />
        </div>
    )
}
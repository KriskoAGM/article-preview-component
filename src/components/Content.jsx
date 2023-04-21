import { UserInfo } from './UserInfo';
import { Description } from './Description';

export const Content = () => {
    return (
        <div className="content-container">
            <Description />
            <UserInfo />
        </div>
    )
}
import { Fragment } from 'react'
import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';
const SideScreen = ({location,history}) => {
    const navigate=useNavigate()
    return (
        <Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    navigate(to)
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="todo">
                    <NavItem eventKey="todo">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Todo
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </Fragment>
    )
}
export default SideScreen
import { Button, Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

function Navbar() {
  return (
    <div className='nav-conatiner'>
        <div className='logo-conatiner'>
            <Avatar src={icon} size="large"/>
            < Typography.Title level={2} className='logo'>
                <Link to='/'>CryptoWorld</Link>
            </Typography.Title>
            <Menu theme ="dark" >
              <Menu.Item icon={<HomeOutlined />}>
                <Link to='/'>Home</Link>
              </Menu.Item>
              <Menu.Item icon={<FundOutlined />}>
                <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
              </Menu.Item>
              <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to='/exchanges'>Exchanges</Link>
              </Menu.Item>
              <Menu.Item icon={<BulbOutlined />}>
                <Link to='/news'>News</Link>
              </Menu.Item>

            </Menu>

        </div>
    </div>
  )
}

export default Navbar
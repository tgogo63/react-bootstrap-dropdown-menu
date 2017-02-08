import React from 'react';
import { Link } from 'react-router';
import DropdownMenu from '../../src/DropdownMenu';
import MenuItem from '../../src/MenuItem';

class IconTrigger extends React.Component {
  render() {
    return (
      <div style={{marginLeft: '30px'}}>
        <h3>Dropdown Menu with Bootstrap Icon Trigger</h3>
        <p>Click the bootstrap headphone icon below to show the dropdown menu. &nbsp;<Link to="/">Back</Link></p>

        <DropdownMenu triggerType="icon" trigger="glyphicon glyphicon-headphones">
          <MenuItem key="1" text="Home" location="/icontrigger" />
          <MenuItem key="2" text="Edit Profile" location="/icontrigger" />
          <MenuItem key="3" text="Logout" location="/icontrigger" />
        </DropdownMenu>

        <pre><code>
          import React from 'react';<br />
          import &#123; DropdownMenu, MenuItem &#125; from 'react-bootstrap-dropdown-menu';<br />
          <br />
          class Simple extends React.Component &#123;<br />
            &nbsp;&nbsp;render() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DropdownMenu triggerType='icon' trigger='glyphicon glyphicon-headphones'&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem key='1' text='Home' location='/icontrigger' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem key='2' text='Edit Profile' location='/icontrigger' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem key='3' text='Logout' location='/icontrigger' /&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/DropdownMenu&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;)<br />
            &nbsp;&nbsp;&#125;<br />
          &#125;<br />
        </code></pre>

        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default IconTrigger;
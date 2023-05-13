import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabCard from '../Cards/TabCard';


function SchoolTabs() {
  return (
    <Tabs
      defaultActiveKey="daySchool"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="daySchool" title="Day School">
        <TabCard src={'./assets/schoolImg/dps2.jpg'}/>
      </Tab>
      <Tab eventKey="playSchool" title="Play School">
      <TabCard src={'assets/schoolImg/sumati.jpg'}/>
      </Tab>
      <Tab eventKey="boardingSchool" title="Boarding School">
      <TabCard src={'assets/schoolImg/mindseyeplay.jpg'}/>
      </Tab>
      <Tab eventKey="university" title="Universiry" >
      <TabCard src={'assets/schoolImg/mariamata.jpg'}/>
      </Tab>
    </Tabs>
  );
}

export default SchoolTabs;
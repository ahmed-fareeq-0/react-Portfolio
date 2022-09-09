import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Experience } from '../../data';

const Skills = () => {
  return (
    <section className=' w-full flex justify-center items-center' id='skills'>
      <VerticalTimeline>
      {Experience && Experience.map(item => (
          <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#171D2A', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #171D2A ' }}
            date="2011 - present"
            iconStyle={{ background: `${item.bg}`, color: '#fff' }}
            icon={item.icon} >
        

            <h3 className="vertical-timeline-element-title font-semibold" style={{'color':`${item.bg}`}}>{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.date}</h4>
            <p className=' text-dbdbdb font-medium' >{item.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Skills;

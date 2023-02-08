import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2010 - 2019'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>
                Rustomjee International School
            </h3>
            <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2019 - 2021'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>
                Nirmala Memorial Foundation
            </h3>
            <p>Science - HSC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2021 - 2025'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>
                Dwarkadas J. Sanghvi College of Engineering
            </h3>
            <p>B.E. Computer Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
